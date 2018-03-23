package project.team6.umbuy.AndroidTest.AcceptanceTest;

/**
 * Created by yuanding on 2018-03-23.
 */


import com.robotium.solo.Solo;

import project.team6.umbuy.presentation.LoginActivity;
import project.team6.umbuy.presentation.ViewAdsActivity;

import static junit.framework.Assert.assertTrue;


public class AcceptanceTestHelper {
    public static void login(Solo solo) {
        solo.assertCurrentActivity("Login activity", LoginActivity.class);
        assertTrue(solo.waitForText("Log In"));
        assertTrue(solo.waitForText("Sign Up"));
        assertTrue(solo.waitForText("Email"));
        assertTrue(solo.waitForText("Password"));

        solo.searchEditText("Email");
        solo.enterText(0, "1@1.com");
        assertTrue(solo.searchText("1@1.com"));
        solo.searchEditText("Password");
        solo.enterText(1, "1");
        assertTrue(solo.searchText("1"));
        solo.clickOnText("LOG IN");


        solo.waitForActivity(ViewAdsActivity.class);
        solo.sleep(1000);
        solo.assertCurrentActivity("Expected ViewAdsActivity", ViewAdsActivity.class);
    }
}




