package project.team6.umbuy.AndroidTest.AcceptanceTest;

import android.test.ActivityInstrumentationTestCase2;

import com.robotium.solo.Solo;

import project.team6.umbuy.R;
import project.team6.umbuy.presentation.CreateAdActivity;
import project.team6.umbuy.presentation.LoginActivity;
import project.team6.umbuy.presentation.ViewAdsActivity;

/**
 * Created by yuanding on 2018-03-20.
 */

public class CreateAdTest extends ActivityInstrumentationTestCase2<LoginActivity> {
    private Solo solo;

    public CreateAdTest() {
        super(LoginActivity.class);
    }

    public void setUp() throws Exception {
        solo = new Solo(getInstrumentation(), getActivity());
    }

    @Override
    public void tearDown() throws Exception {
        solo.finishOpenedActivities();
    }


    public void testCreateAdsWithIncompletedForm() throws InterruptedException {
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
        solo.clearEditText(0);
        solo.clickOnButton(0);


        solo.clickOnButton(1);
        assertTrue(solo.waitForActivity(CreateAdActivity.class));
        solo.assertCurrentActivity("Expected CreatedAdsActivity", CreateAdActivity.class);
        assertTrue(solo.getView(R.id.create_ad_title_field) != null);
        assertTrue(solo.getView(R.id.create_ad_description_field) != null);
        assertTrue(solo.getView(R.id.create_ad_category_field) != null);
        assertTrue(solo.getView(R.id.create_ad_price_field) != null);
        assertTrue(solo.getView(R.id.create_ad_picture) != null);
        assertTrue(solo.getView(R.id.create_ad_upload) != null);
        assertTrue(solo.getView(R.id.create_ad_submit) != null);

        assertTrue(solo.waitForText("Title*"));
        assertTrue(solo.waitForText("Category"));
        assertTrue(solo.waitForText("Price*"));
        assertTrue(solo.waitForText("Description"));
        assertTrue(solo.searchText("Upload"));
        assertTrue(solo.searchText("Submit Advertisement"));



        //Submit the newAds without edit anything
        solo.clickOnText("Submit Advertisement");
        assertTrue(solo.searchText("Please fill in all required field (*)"));

        //submit with only title
        solo.enterText(0, "AcceptanceTest");
        solo.clickOnText("Submit Advertisement");
        assertTrue(solo.searchText("Please input a valid price"));

        //sumbit with only title and price
        solo.enterText(1, "100");
        solo.clickOnText("Submit Advertisement");
        assertTrue(solo.waitForActivity(ViewAdsActivity.class));
        solo.assertCurrentActivity("Expected ViewAdsActivity", ViewAdsActivity.class);
        solo.sleep(1000);
        solo.enterText(0, "AcceptanceTest");
        solo.clickOnButton(0);

        solo.clearEditText(0);
        assertTrue(solo.searchText("AcceptanceTest"));
        assertTrue(solo.searchText("100"));



        //submit with  completed form then sumbit

        solo.clickOnButton(1);
        assertTrue(solo.waitForActivity(CreateAdActivity.class));
        solo.assertCurrentActivity("Expected CreatedAdsActivity", CreateAdActivity.class);
        solo.sleep(1000);
        solo.enterText(0, "RobotiumTest");
        assertTrue(solo.searchText("RobotiumTest"));

        solo.enterText(1, "500");
        assertTrue(solo.searchText("500"));

        solo.enterText(2, "test");
        assertTrue(solo.searchText("test"));

        solo.enterText(3, "best test");
        assertTrue(solo.searchText("best test"));

        solo.clickOnText("Submit Advertisement");

        assertTrue(solo.waitForActivity(ViewAdsActivity.class));
        solo.assertCurrentActivity("Expected ViewAdsActivity", ViewAdsActivity.class);
        solo.sleep(1000);
        solo.enterText(0, "RobotiumTest");
        solo.clickOnButton(0);
        solo.clearEditText(0);
        assertTrue(solo.searchText("RobotiumTest"));
        assertTrue(solo.searchText("500"));

        //test for logout
        solo.clickOnButton(2);
        assertTrue(solo.waitForActivity(LoginActivity.class));
        solo.assertCurrentActivity("Login activity", LoginActivity.class);

    }
}
