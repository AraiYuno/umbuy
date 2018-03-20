package project.team6.umbuy.AndroidTest.AcceptanceTest;

import android.test.ActivityInstrumentationTestCase2;

import com.robotium.solo.Solo;

import project.team6.umbuy.presentation.LoginActivity;

/**
 * Created by yuanding on 2018-03-20.
 */

public class LoginTest extends ActivityInstrumentationTestCase2<LoginActivity> {
    private Solo solo;

    public LoginTest() {
        super(LoginActivity.class);
    }

    public void setUp() throws Exception {
        solo = new Solo(getInstrumentation(), getActivity());
    }

    @Override
    public void tearDown() throws Exception {
        solo.finishOpenedActivities();
    }

    public void testLoginInValid () throws InterruptedException {
        // **********************test login without correct credential ***************************
        // make sure everything is completely layout
        solo.assertCurrentActivity("Login activity", LoginActivity.class);
        assertTrue(solo.waitForText("Log In"));
        assertTrue(solo.waitForText("Sign Up"));
        assertTrue(solo.waitForText("Email"));
        assertTrue(solo.waitForText("Password"));
        assertTrue(solo.waitForText("Don't remember your password?"));

        //  start testing login without a email or password
        solo.clickOnText("LOG IN");
        assertTrue(solo.searchText("Invalid Email Address"));
        assertTrue(solo.searchText("Invalid Password"));

        //start testing type wrong format email
        solo.enterText(0, "1@.com");
        assertTrue(solo.searchText("1@.com"));
        assertTrue(solo.searchText("Invalid Email Address"));
        solo.clearEditText(0);
        // start testing login with wrong email or password
        solo.enterText(0, "1@1.com");
        assertTrue(solo.searchText("1@1.com"));
        solo.enterText(1, "123");
        assertTrue(solo.searchText("123"));
        solo.clickOnText("LOG IN");
        assertTrue(solo.searchText("THERE WAS AN ERROR PROCESSING THE SIGN IN"));


        // start with valid email and password

//        Sign Up section
        solo.clickOnText("Sign Up");

//        search everything
        assertTrue(solo.searchText("Email"));
        assertTrue(solo.searchText("Password"));
        assertTrue(solo.searchText("By signing up, you agree to our terms of"));
        assertTrue(solo.searchText("service and privacy policy"));
        assertTrue(solo.searchText("SIGN UP"));

        //start testing type wrong format email
        solo.clearEditText(0);
        solo.enterText(0, "qq@.com");
        assertTrue(solo.searchText("qq@.com"));
        assertTrue(solo.searchText("Invalid Email Address"));
        solo.clearEditText(0);
        // start testing login with valid email and  password
        solo.enterText(0, "wow@umanitoba.ca");
        assertTrue(solo.searchText("wow@umanitoba.ca"));
        solo.enterText(1, "123");
        assertTrue(solo.searchText("123"));
        solo.clickOnText("SIGN UP");


        // search for correct text when sign up with valid email and password

        assertTrue(solo.searchText("FirstName"));
        assertTrue(solo.searchText("LastName"));
        assertTrue(solo.searchText("phone"));
        assertTrue(solo.searchText("SIGN UP"));

        //  testing register without fillout the name field and phone number
        solo.clickOnText("SIGN UP");
        assertTrue(solo.searchText("The value cannot be empty"));


        // enter certain in register field and go to the viewAdsActivity

        solo.enterText(0, "Franklin");
        assertTrue(solo.searchText("Franklin"));
        solo.enterText(1, "Bristow");
        assertTrue(solo.searchText("Bristow"));
        solo.enterText(2, "204-110110");
        assertTrue(solo.searchText("204-110110"));
        solo.clickOnText("SIGN UP");

        //should go to loginActivity
        // assertTrue(solo.waitForActivity(ViewAdsActivity.class));
        solo.goBack();
        solo.clickOnText("Log In");
        solo.clearEditText(0);

    }
    public void testLoginValid () throws InterruptedException {
        //  ***************Testing login with correct credential*****************************

        solo.searchEditText("Email");
        solo.enterText(0, "1@1.com");
        assertTrue(solo.searchText("1@1.com"));
        solo.searchEditText("Password");
        solo.enterText(1, "1");
        assertTrue(solo.searchText("1"));
        solo.clickOnText("LOG IN");

    }

}
