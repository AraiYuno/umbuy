package project.team6.umbuy.presentation;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.auth0.android.Auth0;
import com.auth0.android.authentication.AuthenticationAPIClient;
import com.auth0.android.authentication.AuthenticationException;
import com.auth0.android.callback.BaseCallback;
import com.auth0.android.result.UserProfile;

import java.util.Date;

import project.team6.umbuy.R;

import project.team6.umbuy.shared.AdvertisementService;
import project.team6.umbuy.bussiness.CredentialsManager;
import project.team6.umbuy.data_model.Advertisement;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class CreateAdActivity extends AppCompatActivity {

    private EditText create_ad_title;
    private EditText create_ad_description;
    private EditText create_ad_category;
    private EditText create_ad_price;
    private Button btn_upload;
    private Button submit;
    private Auth0 auth0;
    private UserProfile userProfile;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_create_ad);

        // initialize layout variables
        create_ad_title = (EditText) this.findViewById(R.id.create_ad_title_field);
        create_ad_description = (EditText) this.findViewById(R.id.create_ad_description_field);
        create_ad_category = (EditText) this.findViewById(R.id.create_ad_category_field);
        create_ad_price = (EditText) this.findViewById(R.id.create_ad_price_field);
        btn_upload = (Button) this.findViewById(R.id.create_ad_upload);
        submit = (Button) this.findViewById(R.id.create_ad_submit);

        submit.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                getUserInfo();
            }
        });

        btn_upload.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(CreateAdActivity.this, "This feature is coming soon...", Toast.LENGTH_LONG).show();

            }
        });
    }


    public void getUserInfo(){

        auth0 = new Auth0(this);
        auth0.setOIDCConformant(true);

        AuthenticationAPIClient authenticationAPIClient = new AuthenticationAPIClient(auth0);
        authenticationAPIClient.userInfo(CredentialsManager.getCredentials(this).getAccessToken())
                .start(new BaseCallback<UserProfile, AuthenticationException>() {
                    @Override
                    public void onSuccess(UserProfile payload) {
                        userProfile = payload;
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                sendAd();
                            }
                        });
                    }

                    @Override
                    public void onFailure(AuthenticationException error) {
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                Toast.makeText(CreateAdActivity.this, "User Profile Request Failed", Toast.LENGTH_LONG).show();
                            }
                        });

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
        userId = userProfile.getId();

        advertisementId = 0;
        title = create_ad_title.getText().toString().trim();
        description = create_ad_description.getText().toString().trim();
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

}

