package project.team6.umbuy.view;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;

import com.auth0.android.Auth0;
import com.auth0.android.authentication.AuthenticationAPIClient;
import com.auth0.android.authentication.AuthenticationException;
import com.auth0.android.callback.BaseCallback;
import com.auth0.android.lock.AuthenticationCallback;
import com.auth0.android.lock.Lock;
import com.auth0.android.lock.LockCallback;
import com.auth0.android.lock.utils.LockException;
import com.auth0.android.result.Credentials;
import com.auth0.android.result.UserProfile;

import project.team6.umbuy.controller.CredentialsManager;


public class LoginActivity extends Activity {

    private Lock mLock;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Auth0 auth0 = new Auth0(this);
        auth0.setOIDCConformant(true);
        mLock = Lock.newBuilder(auth0, mCallback)
                .withScheme("demo")
                .withAudience(String.format("https://%s/userinfo", "team6.auth0.com"))
                .withScope("openid offline_access")
                .withScope("openid profile email")
                //Add parameters to the builder
                .build(this);
        String accessToken = CredentialsManager.getCredentials(this).getAccessToken();
        if (accessToken == null) {
            doLogin();
            //return;
        }
        else{
            AuthenticationAPIClient aClient = new AuthenticationAPIClient(auth0);
            aClient.userInfo(accessToken)
                    .start(new BaseCallback<UserProfile, AuthenticationException>() {
                        @Override
                        public void onSuccess(final UserProfile payload) {
                            startActivity(new Intent(LoginActivity.this, ViewAdsActivity.class));
                            finish();
                        }

                        @Override
                        public void onFailure(AuthenticationException error) {
                            runOnUiThread(new Runnable() {

                                public void run() {
                                    doLogin();
                                    Toast.makeText(LoginActivity.this, "Session has Expired, please Log In Again", Toast.LENGTH_SHORT).show();
                                }
                            });
                            CredentialsManager.deleteCredentials(LoginActivity.this);
                        }
                    });
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mLock.onDestroy(this);
        mLock = null;
    }

    public void doLogin(){

        startActivity(mLock.newIntent(this));

    }

    private final LockCallback mCallback = new AuthenticationCallback() {
        @Override
        public void onAuthentication(Credentials credentials) {
            // Save credentials before starting new activity
            CredentialsManager.saveCredentials(LoginActivity.this, credentials);

            startActivity(new Intent(getApplicationContext(), ViewAdsActivity.class));

            finish();
        }

        @Override
        public void onCanceled() {
            Toast.makeText(getApplicationContext(), "Log In - Cancelled", Toast.LENGTH_SHORT).show();
        }

        @Override
        public void onError(LockException error) {
            Toast.makeText(getApplicationContext(), "Log In - Error Occurred", Toast.LENGTH_SHORT).show();
        }
    };

}
