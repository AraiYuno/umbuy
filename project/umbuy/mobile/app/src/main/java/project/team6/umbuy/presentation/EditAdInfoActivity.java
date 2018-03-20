package project.team6.umbuy.presentation;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;



import project.team6.umbuy.R;
import project.team6.umbuy.data_model.Advertisement;
import project.team6.umbuy.shared.AdvertisementService;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class EditAdInfoActivity extends AppCompatActivity {
    ImageView picture;
    EditText txt_title, txt_price, txt_category, txt_description;
    Button btn_edit_ad, btn_edit_cancel;
    String title, imageUrl, price, category, description;
    int adId;
    double priceDouble;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_edit_ad);
        picture = findViewById(R.id.edit_ad_info_picture);
        txt_title = findViewById(R.id.edit_ad_info_title);
        txt_price = findViewById(R.id.edit_ad_info_price);
        txt_category = findViewById(R.id.edit_ad_info_category);
        txt_description = findViewById(R.id.edit_ad_info_description);

        btn_edit_ad = findViewById(R.id.edit_ad_submit);
        btn_edit_cancel = findViewById(R.id.edit_cancel);

        btn_edit_ad.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                editAd();
            }
        });
        btn_edit_cancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getApplicationContext(), ViewAdsActivity.class));
            }
        });

        adId = getIntent().getIntExtra("adId",0);
        imageUrl = getIntent().getStringExtra("imageUrl");
        title = getIntent().getStringExtra("title");
        category = getIntent().getStringExtra("category");
        price = getIntent().getStringExtra("price");
        description = getIntent().getStringExtra("description");

        new LoadImage(picture, imageUrl).execute();
        txt_title.setHint("Title: " + title);
        txt_price.setHint("Price: " + price);
        txt_category.setHint("Category: " + category);
        txt_description.setHint("Description: " + description);

    }

    private void editAd(){
        AdvertisementService adService = new AdvertisementService();

        if(!txt_title.getText().toString().trim().isEmpty()){
            title = txt_title.getText().toString().trim();
        }
        if(txt_price.getText().toString().trim().equals(".") || txt_price.getText().toString().trim().equals(",")){
            Toast.makeText(this, "Please input a valid price", Toast.LENGTH_SHORT).show();
        }
        else {
            if (!txt_price.getText().toString().trim().isEmpty()) {
                priceDouble = Double.parseDouble(txt_price.getText().toString());
            } else {
                priceDouble = Double.parseDouble(price);
            }
            if (!txt_category.getText().toString().trim().isEmpty()) {
                category = txt_category.getText().toString().trim();
            }
            if (!txt_category.getText().toString().trim().isEmpty()) {
                description = txt_category.getText().toString().trim();
            }

            adService.editAd(adId, title, description, priceDouble, imageUrl, category).enqueue(new Callback<Advertisement>() {
                @Override
                public void onResponse(Call<Advertisement> call, Response<Advertisement> response) {
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            Toast.makeText(EditAdInfoActivity.this, "Editted Successfully!", Toast.LENGTH_LONG).show();
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
                            Toast.makeText(EditAdInfoActivity.this, "Edit Failed!", Toast.LENGTH_LONG).show();
                        }
                    });
                }
            });
        }



    }
}
