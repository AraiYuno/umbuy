package project.team6.umbuy.presentation;

import android.Manifest;
import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import com.amazonaws.ClientConfiguration;
import com.amazonaws.Protocol;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.PutObjectResult;


import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Date;
import java.util.UUID;


import project.team6.umbuy.R;

import project.team6.umbuy.data_model.User;
import project.team6.umbuy.shared.AdvertisementService;
import project.team6.umbuy.shared.CredentialsManager;
import project.team6.umbuy.data_model.Advertisement;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class CreateAdActivity extends AppCompatActivity {
    //AWS S3
    private static final Integer READ_EXST = 0x1;
    private static final String AWS_KEY = "CHECK DOCUMENTATION";
    private static final String AWS_SECRET = "CHECK DOCUMENTATION;
    private static final String AWS_BUCKET = "kyleteam6best";
    private static String uploadingFileName;
    private static String uploadingFileExtension;
    private boolean pictureUploaded;
    private ImageView mImage;
    private ProgressDialog pd;

    private EditText create_ad_title;
    private EditText create_ad_description;
    private EditText create_ad_category;
    private EditText create_ad_price;
    private Button btn_upload;
    private Button submit;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_create_ad);
        // initialize layout variables
        create_ad_title = (EditText) this.findViewById(R.id.create_ad_title_field);
        create_ad_description = (EditText) this.findViewById(R.id.create_ad_description_field);
        create_ad_category = (EditText) this.findViewById(R.id.create_ad_category_field);
        create_ad_price = (EditText) this.findViewById(R.id.create_ad_price_field);
        submit = (Button) this.findViewById(R.id.create_ad_submit);

        //AWS S3
        askForPermission(Manifest.permission.READ_EXTERNAL_STORAGE,READ_EXST);
        pd = new ProgressDialog(CreateAdActivity.this);
        pd.setMessage("Uploading");
        mImage = (ImageView) findViewById(R.id.create_ad_picture);
        btn_upload = (Button) this.findViewById(R.id.create_ad_upload);
        uploadingFileExtension = "";
        uploadingFileName = "";
        pictureUploaded = false;


        submit.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                sendAd();
            }
        });

        btn_upload.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                SelectImage();
            }
        });
    }


    private void sendAd() {

        AdvertisementService adService = new AdvertisementService();

        int advertisementId;
        double price = 0;
        String title;
        String userId;
        String description;
        String imageUrl = "";
        String category;


        // get userId profile
        userId = User.getUserProfile().getId();
        advertisementId = 0;
        title = create_ad_title.getText().toString().trim();
        description = create_ad_description.getText().toString().trim();
        if( pictureUploaded )
            imageUrl = "https://s3.amazonaws.com/kyleteam6best/android/" + uploadingFileName + "." + uploadingFileExtension;
        else
            imageUrl = "http://marcroftmedical.com/wp-content/themes/marcroft/images/default-blog.jpg"; // default for now
        category = create_ad_category.getText().toString().trim();

        // input checking
        if (title.isEmpty()) {
            Toast.makeText(this, "Please fill in all required field (*)", Toast.LENGTH_LONG).show();
        } else if (create_ad_price.getText().toString().trim().isEmpty() || create_ad_price.getText().toString().trim().equals('.') || create_ad_price.getText().toString().trim().equals(',')) {
            Toast.makeText(this, "Please input a valid price", Toast.LENGTH_SHORT).show();
        } else {
            price = Double.parseDouble(create_ad_price.getText().toString());

            // fix
            Advertisement ad = new Advertisement( advertisementId,userId,title,description,price, new Date(), new Date(), new Date(),imageUrl, category);
            // POST call to update server using RETROFIT API
            adService.submitAd(advertisementId, title, userId, description, price, imageUrl, category).enqueue(new Callback<Advertisement>() {
                @Override
                public void onResponse(Call<Advertisement> call, Response<Advertisement> response) {
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            Toast.makeText(CreateAdActivity.this, "Advertisement successfully created!", Toast.LENGTH_LONG).show();
                            create_ad_title.setText("");
                            create_ad_category.setText("");
                            create_ad_description.setText("");
                            create_ad_price.setText("");
                        }
                    });

                    startActivity(new Intent(getApplicationContext(), ViewAdsActivity.class));
                    finish();
                }

                @Override
                public void onFailure(Call<Advertisement> call, Throwable t) {
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            Toast.makeText(CreateAdActivity.this, "Failed to create advertisement", Toast.LENGTH_LONG).show();
                        }
                    });
                }
            });
        }
    }


    //==============================================================================================
    // Author: Kyle
    //   AWS S3 Image Uploading
    //
    // Functions:
    //  1. askForPermission: requests permission to access android storage.
    //  2. onRequestPermissionsResult: handles the response from askForPermission function.
    //  3. SelectImage: opens up the phone's gallery so that the user can choose a picture.
    //  4. onActivityResult: displays a preview of the selected image.
    //  5. uploadImageToAWS: uploads the selected image to AWS S3 bucket.
    //==============================================================================================
    private void askForPermission(String permission, Integer requestCode) {
        if (ContextCompat.checkSelfPermission(CreateAdActivity.this, permission) != PackageManager.PERMISSION_GRANTED) {
            if (ActivityCompat.shouldShowRequestPermissionRationale(CreateAdActivity.this, permission)) {
                ActivityCompat.requestPermissions(CreateAdActivity.this, new String[]{permission}, requestCode);
            } else {
                ActivityCompat.requestPermissions(CreateAdActivity.this, new String[]{permission}, requestCode);
            }
        }
    }



    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if(ActivityCompat.checkSelfPermission(this, permissions[0]) == PackageManager.PERMISSION_GRANTED){
            switch (requestCode) {
                //Location
                case 1:
                    Intent imageIntent = new Intent(Intent.ACTION_PICK, android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
                    break;
            }
            Toast.makeText(this, "Permission granted", Toast.LENGTH_SHORT).show();
        }else{
            Toast.makeText(this, "Permission denied", Toast.LENGTH_SHORT).show();
        }
    }

    private void SelectImage() {
        final CharSequence[] options = {"Select from gallery"};

        AlertDialog.Builder builder = new AlertDialog.Builder(CreateAdActivity.this);
        builder.setTitle("Select");
        builder.setCancelable(true);
        builder.setItems(options, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int item) {
                if (options[item].equals("Select from gallery")) {
                    Intent intent = new Intent(Intent.ACTION_PICK, android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
                    startActivityForResult(intent, 2);
                }
            }
        });
        builder.show();
    }


    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == RESULT_OK) {
            if (requestCode == 2) {
                Uri selectedImage = data.getData();
                String[] filePath = {MediaStore.Images.Media.DATA};
                Cursor c = getContentResolver().query(selectedImage, filePath, null, null, null);
                c.moveToFirst();
                int columnIndex = c.getColumnIndex(filePath[0]);
                final String picturePath = c.getString(columnIndex);
                c.close();
                Bitmap thumbnail = (BitmapFactory.decodeFile(picturePath));
                mImage.setImageBitmap(thumbnail);
                mImage.setVisibility(View.VISIBLE);
                pd.show();
                Thread thread = new Thread(new Runnable() {

                    @Override
                    public void run() {
                        try {
                            uploadImageToAWS(picturePath);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                });
                thread.start();
            }
        }
    }


    private void uploadImageToAWS(String selectedImagePath) {
        if (selectedImagePath == null) {
            Toast.makeText(this, "Could not find the filepath of the selected file", Toast.LENGTH_LONG).show();
            return;
        }
        File file = new File(selectedImagePath);
        AmazonS3 s3Client = null;

        if (s3Client == null) {
            ClientConfiguration clientConfig = new ClientConfiguration();
            clientConfig.setProtocol(Protocol.HTTP);
            clientConfig.setMaxErrorRetry(0);
            clientConfig.setSocketTimeout(60000);
            BasicAWSCredentials credentials = new BasicAWSCredentials(AWS_KEY, AWS_SECRET);
            s3Client = new AmazonS3Client(credentials, clientConfig);
            s3Client.setRegion(Region.getRegion(Regions.US_EAST_1));
        }
        InputStream stream = null;
        try {
            stream = new FileInputStream(file);
            ObjectMetadata objectMetadata = new ObjectMetadata();
            objectMetadata.setContentLength(file.length());
            String[] s = selectedImagePath.split("\\.");
            String extension = s[s.length - 1];
            uploadingFileExtension = extension;
            String fileName = UUID.randomUUID().toString();
            uploadingFileName = fileName;
            PutObjectRequest putObjectRequest = new PutObjectRequest(AWS_BUCKET, "android/" + fileName + "." + extension, stream, objectMetadata)
                    .withCannedAcl(CannedAccessControlList.PublicRead);

            // above line is  making the request to the aws  server for the specific place to upload the image were aws_bucket is the main folder  name and inside that is the profiles folder and there the file will be get uploaded
            PutObjectResult result = s3Client.putObject(putObjectRequest);

            // this will  add the image to the specified path in the aws bucket.
            runOnUiThread(new Runnable() {
                public void run() {
                    pictureUploaded = true;
                    btn_upload.setText("Different Picture");
                    pd.dismiss();
                }
            });
            if (result == null) {
                Log.e("RESULT", "NULL");
            } else {
                Log.e("RESULT", result.toString());
            }
        } catch (Exception e) {
            Log.d("ERRORR", " " + e.getMessage());
            e.printStackTrace();
        }
    }
}

