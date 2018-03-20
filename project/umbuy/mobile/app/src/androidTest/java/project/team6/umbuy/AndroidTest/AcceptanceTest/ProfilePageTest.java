package project.team6.umbuy.AndroidTest.AcceptanceTest;

import android.support.design.widget.NavigationView;
import android.test.ActivityInstrumentationTestCase2;

import com.robotium.solo.Solo;

import project.team6.umbuy.R;
import project.team6.umbuy.presentation.LoginActivity;
import project.team6.umbuy.presentation.ProfilePageActivity;
import project.team6.umbuy.presentation.ViewAdsActivity;

/**
 * Created by yuanding on 2018-03-20.
 */

public class ProfilePageTest extends ActivityInstrumentationTestCase2<LoginActivity> {
    private Solo solo;

    public  ProfilePageTest() {
        super(LoginActivity.class);
    }

    public void setUp() throws Exception {
        solo = new Solo(getInstrumentation(), getActivity());
    }

    @Override
    public void tearDown() throws Exception {
        solo.finishOpenedActivities();
    }


    public void testUserProfile() throws InterruptedException {

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

        // *********Testing for Navigation ******************************************
        //*******test for Home*******
        NavigationView nagView = (NavigationView)solo.getView(R.id.nav_view);
        solo.clickOnActionBarHomeButton();

        solo.waitForText("Home");
        assertTrue(solo.waitForText("Log out"));

        assertTrue(solo.searchText("Home"));
        assertTrue(solo.searchText("My Ads"));
        assertTrue(solo.searchText("My Profile"));
        assertTrue(solo.searchText("Log out"));

        solo.clickOnText("Home");

        //********************test for My Profile*************************
        solo.clickOnActionBarHomeButton();
        assertTrue( solo.waitForText("Home"));
        assertTrue(solo.waitForText("Log out"));
        solo.clickOnText("My Profile");
        assertTrue(solo.waitForActivity(ProfilePageActivity.class));
        solo.assertCurrentActivity("Expected ProfilePageActivity",ProfilePageActivity.class);
        assertTrue(solo.searchText("First Name:"));
        assertTrue(solo.searchText("Last Name:"));
        assertTrue(solo.searchText("Email:"));
        assertTrue(solo.searchText("Phone:"));
        solo.clickOnText("Go Home");
        assertTrue(solo.waitForActivity(ViewAdsActivity.class));
        solo.assertCurrentActivity("Expected ViewAdsActivity", ViewAdsActivity.class);
        //test for logout
        solo.clickOnButton(2);
        assertTrue(solo.waitForActivity(LoginActivity.class));
        solo.assertCurrentActivity("Login activity", LoginActivity.class);

    }
}
