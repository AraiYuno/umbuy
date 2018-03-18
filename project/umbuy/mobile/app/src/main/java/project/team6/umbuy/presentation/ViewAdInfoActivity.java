//====================================================================
// Author: Kyle
//   this class is for ViewAdInfo which is responsible for displaying
//   one single advertisement upon click on ViewAdsActivity
//====================================================================
package project.team6.umbuy.presentation;

import android.app.DialogFragment;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.auth0.android.Auth0;
import com.auth0.android.authentication.AuthenticationAPIClient;
import com.auth0.android.authentication.AuthenticationException;
import com.auth0.android.callback.BaseCallback;
import com.auth0.android.result.UserProfile;

import project.team6.umbuy.R;
import project.team6.umbuy.data_model.Advertisement;
import project.team6.umbuy.shared.AdvertisementService;
import project.team6.umbuy.shared.CredentialsManager;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ViewAdInfoActivity extends FragmentActivity implements DeleteDialogFragment.DeleteDialogListener{
    ImageView picture;
    TextView txt_title, txt_price, txt_category, txt_description;
    Button btn_delete_ad, btn_edit_ad;
    String userId, currentUser;
    int advertisementId;
    UserProfile userProfile;
    Auth0 auth0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_view_ad_info);
        picture = findViewById(R.id.view_ad_info_picture);
        txt_title = findViewById(R.id.view_ad_info_title);
        txt_price = findViewById(R.id.view_ad_info_price);
        txt_category = findViewById(R.id.view_ad_info_category);
        txt_description = findViewById(R.id.view_ad_info_description);

        btn_delete_ad = findViewById(R.id.view_ad_info_delete_btn);
        btn_edit_ad = findViewById(R.id.view_ad_info_edit_btn);

        userId = getIntent().getStringExtra("userId");
        advertisementId = getIntent().getIntExtra("adId", 0);

        // hide delete button first
        btn_delete_ad.setVisibility(View.INVISIBLE);
        getUserInfo();

        btn_delete_ad.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                // show message dialog to continue with the deletion of the advertisment
                showDeleteDialog();
            }
        });

        btn_edit_ad.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(ViewAdInfoActivity.this, "This feature is coming soon...", Toast.LENGTH_LONG).show();

            }
        });

        new LoadImage(picture, getIntent().getStringExtra("imageUrl")).execute();
        txt_title.setText("Title: " + getIntent().getStringExtra("title"));
        txt_category.setText("Category: " + getIntent().getStringExtra("category"));
        txt_price.setText("Price: $" + getIntent().getStringExtra("price"));
        txt_description.setText("Description: " + getIntent().getStringExtra("description"));
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
                                deleteAd();
                            }
                        });
                    }

                    @Override
                    public void onFailure(AuthenticationException error) {
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                Toast.makeText(ViewAdInfoActivity.this, "User Profile Request Failed", Toast.LENGTH_SHORT).show();
                            }
                        });

                    }
                });
    }

    public void deleteAd(){
        currentUser = userProfile.getId();

        // show delete button if current user is the creator of the add
        if (currentUser.equals(userId)){
            btn_delete_ad.setVisibility(View.VISIBLE);
        }
    }

    public void showDeleteDialog(){
        DialogFragment dialog = new DeleteDialogFragment();
        dialog.show(getFragmentManager(), "delete");
    }

    // if yes is clicked, delete ad using the api service
    @Override
    public void onDialogPositiveClick(DialogFragment dialog) {
        AdvertisementService advertisementService = new AdvertisementService();

        advertisementService.deleteItem(advertisementId).enqueue(new Callback<Advertisement>() {
            @Override
            public void onResponse(Call<Advertisement> call, Response<Advertisement> response) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        Toast.makeText(ViewAdInfoActivity.this, "Advertisement successfully deleted!", Toast.LENGTH_LONG).show();
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
                        Toast.makeText(ViewAdInfoActivity.this, "Unable to delete ad", Toast.LENGTH_LONG).show();
                    }
                });
            }
        });
    }

    // if no, do nothing ~~ the dialog window closes at default
    @Override
    public void onDialogNegativeClick(DialogFragment dialog) {

    }
}
