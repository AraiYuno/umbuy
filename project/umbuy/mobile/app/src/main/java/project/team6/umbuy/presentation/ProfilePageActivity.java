package project.team6.umbuy.presentation;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.auth0.android.Auth0;
import com.auth0.android.authentication.AuthenticationAPIClient;
import com.auth0.android.authentication.AuthenticationException;
import com.auth0.android.callback.BaseCallback;
import com.auth0.android.result.UserProfile;
import com.google.gson.internal.LinkedTreeMap;
import com.squareup.picasso.Picasso;

import project.team6.umbuy.R;
import project.team6.umbuy.bussiness.CredentialsManager;


public class ProfilePageActivity extends AppCompatActivity {



    private Auth0 auth0;
    private UserProfile userProfile;
    private TextView userEmailTextView;
    private TextView FNameTextView;
    private TextView LNameTextView;
    private TextView PhoneTextView;
    private Button homeBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile_page);

        auth0 = new Auth0(this);
        auth0.setOIDCConformant(true);

        AuthenticationAPIClient authenticationClient = new AuthenticationAPIClient(auth0);
        authenticationClient.userInfo(CredentialsManager.getCredentials(this).getAccessToken())
                .start(new BaseCallback<UserProfile, AuthenticationException>() {
                    @Override
                    public void onSuccess(final UserProfile profile) {
                        userProfile = profile;
                        runOnUiThread(new Runnable() {
                            public void run() {
                                refreshScreenInformation();
                            }
                        });
                    }
                    @Override
                    public void onFailure(AuthenticationException error) {

                    }
                });

        FNameTextView = findViewById(R.id.user_FName);
        LNameTextView = findViewById(R.id.user_LName);
        userEmailTextView = findViewById(R.id.user_Email);
        PhoneTextView = findViewById(R.id.user_phone);

        homeBtn = (Button) findViewById(R.id.goHome);
        homeBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                goHome();
            }
        });


    }

    private void refreshScreenInformation() {

        ImageView userPicture =findViewById(R.id.user_image);

        if (userProfile.getPictureURL() != null) {
            Picasso.with(this)
                    .load(userProfile.getPictureURL())
                    .fit().centerCrop()
                    .into(userPicture);
        }

        LinkedTreeMap metaData = (LinkedTreeMap) userProfile.getExtraInfo().get("https://metadata/user_metadata");

        String firstName = (String) metaData.get("FirstName");
        String lastName = (String) metaData.get("LastName");
        String phone = (String) metaData.get("phone");

        FNameTextView.setText(String.format("First Name: %1$s", firstName));
        LNameTextView.setText(String.format("Last Name: %1$s", lastName));
        userEmailTextView.setText(String.format(getString(R.string.useremail), userProfile.getEmail()));
        PhoneTextView.setText(String.format("Phone: %1$s ", phone));
    }

    public void goHome(){
        onBackPressed();
        finish();
    }
}
