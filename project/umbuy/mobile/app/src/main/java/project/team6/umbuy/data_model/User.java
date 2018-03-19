package project.team6.umbuy.data_model;

import com.auth0.android.Auth0;
import com.auth0.android.authentication.AuthenticationAPIClient;
import com.auth0.android.authentication.AuthenticationException;
import com.auth0.android.callback.BaseCallback;
import android.content.Context;


import project.team6.umbuy.shared.CredentialsManager;

public class User{
    private static com.auth0.android.result.UserProfile userProfile = null;
    private static Auth0 auth0;

    public static void initializeUserProfile(Context loginContext) {
        if(userProfile == null) {
            auth0 = new Auth0(loginContext);
            auth0.setOIDCConformant(true);

            AuthenticationAPIClient authenticationAPIClient = new AuthenticationAPIClient(auth0);
            authenticationAPIClient.userInfo(CredentialsManager.getCredentials(loginContext).getAccessToken())
                    .start(new BaseCallback<com.auth0.android.result.UserProfile, AuthenticationException>() {
                        @Override
                        public void onSuccess(com.auth0.android.result.UserProfile payload) {
                            userProfile = payload;
                        }

                        @Override
                        public void onFailure(AuthenticationException error) {

                        }
                    });
        }
    }
    public static void resetUserProfile(){userProfile = null;    }

    public static com.auth0.android.result.UserProfile getUserProfile(){return userProfile;}
}
