package project.team6.umbuy.presentation;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;


import project.team6.umbuy.R;


import com.auth0.android.Auth0;
import com.auth0.android.authentication.AuthenticationAPIClient;
import com.auth0.android.authentication.AuthenticationException;
import com.auth0.android.callback.BaseCallback;
import com.auth0.android.lock.AuthenticationCallback;
import com.auth0.android.lock.Lock;
import com.auth0.android.lock.LockCallback;
import com.auth0.android.lock.utils.LockException;
import com.auth0.android.management.ManagementException;
import com.auth0.android.management.UsersAPIClient;
import com.auth0.android.result.Credentials;
import com.auth0.android.result.UserProfile;
import com.auth0.android.lock.utils.CustomField;
import com.google.gson.JsonObject;
import com.google.gson.internal.LinkedTreeMap;


import java.sql.Array;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import project.team6.umbuy.bussiness.CredentialsManager;

import static java.sql.DriverManager.println;


public class ProfilePageActivity  extends AppCompatActivity {

    private Auth0 auth0;
    private UserProfile userProfile;
    private TextView userEmailTextView;
    private TextView FNameTextView;
    private TextView LNameTextView;
    private TextView PhoneTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
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


        FNameTextView = (TextView) findViewById(R.id.user_FName);
        LNameTextView = (TextView) findViewById(R.id.user_LName);
        userEmailTextView = (TextView) findViewById(R.id.user_Email);
        PhoneTextView = (TextView) findViewById(R.id.user_phone);

    }

    private void refreshScreenInformation() {

        LinkedTreeMap metaData = (LinkedTreeMap) userProfile.getExtraInfo().get("https://metadata/user_metadata");

        String firstName = (String) metaData.get("FirstName");
        String lastName = (String) metaData.get("LastName");
        String phone = (String) metaData.get("phone");

        Log.d("FirstName",firstName);
        Log.d("LastName",lastName);
        Log.d("FirstName",firstName);

        FNameTextView.setText(String.format("Fist Name: %1$s", firstName));
        LNameTextView.setText(String.format("Last Name: %1$s", lastName));
        userEmailTextView.setText(String.format(getString(R.string.useremail), userProfile.getEmail()));
        PhoneTextView.setText(String.format("Phone: %1$s ", phone));
    }
}