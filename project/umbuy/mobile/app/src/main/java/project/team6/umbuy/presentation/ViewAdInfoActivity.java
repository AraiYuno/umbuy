//====================================================================
// Author: Kyle
//   this class is for ViewAdInfo which is responsible for displaying
//   one single advertisement upon click on ViewAdsActivity
//====================================================================
package project.team6.umbuy.presentation;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;
import project.team6.umbuy.R;

public class ViewAdInfoActivity extends AppCompatActivity {
    ImageView picture;
    TextView txt_title, txt_price, txt_description;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_view_ad_info);
        picture = findViewById(R.id.view_ad_info_picture);
        txt_title = findViewById(R.id.view_ad_info_title);
        txt_price = findViewById(R.id.view_ad_info_price);
        txt_description = findViewById(R.id.view_ad_info_description);

        new LoadImage(picture, getIntent().getStringExtra("imageUrl")).execute();
        txt_title.setText("Title: " + getIntent().getStringExtra("title"));
        txt_price.setText("Price: £" + getIntent().getStringExtra("price"));
        txt_description.setText("Description: " + getIntent().getStringExtra("description"));
    }


}
