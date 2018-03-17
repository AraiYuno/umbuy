package project.team6.umbuy.presentation;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.auth0.android.Auth0;
import com.auth0.android.authentication.AuthenticationAPIClient;
import com.auth0.android.authentication.AuthenticationException;
import com.auth0.android.callback.BaseCallback;
import com.auth0.android.result.UserProfile;

import project.team6.umbuy.R;
import project.team6.umbuy.bussiness.CredentialsManager;

public class ProfilePageActivity extends AppCompatActivity {
//    UserProfile userProfile;
//    String profile_name;
//    String profile_email;
//    private Auth0 auth0;

//
//    @Override
//    protected void onCreate(Bundle savedInstanceState) {
//        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_profile_page);
//
//        Credentials credentials = CredentialsManager.getCredentials(this);



        private Auth0 auth0;
        private UserProfile userProfile;
        private Button editProfileButton;
        private Button cancelEditionButton;
        private TextView userNameTextView;
        private TextView userEmailTextView;
        private TextView userCountryTextView;
        private EditText updateCountryEditText;
        private TextView FNameTextView;
        private TextView LNameTextView;
        private TextView PhoneTextView;


    private TextView email ;
        @Override
        protected void onCreate (Bundle savedInstanceState){
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_profile_page);

            auth0 = new Auth0(this);
            auth0.setOIDCConformant(true);

            // The process to reclaim the User Information is preceded by an Authentication call.
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


            email = (TextView) findViewById(R.id.profilePageEmail);
//
//            FNameTextView = (TextView) findViewById(R.id.user_FName);
//            LNameTextView = (TextView) findViewById(R.id.user_LName);
//            userEmailTextView = (TextView) findViewById(R.id.user_Email);
//            PhoneTextView = (TextView) findViewById(R.id.user_phone);

        }

    private void refreshScreenInformation() {
//          FNameTextView.setText(String.format("Fist Name: ", userProfile.getUserMetadata().get("FirstName")));
//        LNameTextView.setText(String.format("Last Name: ", userProfile.getUserMetadata().get("LastName")));
            email.setText(String.format(getString(R.string.useremail), userProfile.getEmail()));
//        PhoneTextView.setText(String.format("Phone: ", userProfile.getUserMetadata().get("phone")));

    }


}
