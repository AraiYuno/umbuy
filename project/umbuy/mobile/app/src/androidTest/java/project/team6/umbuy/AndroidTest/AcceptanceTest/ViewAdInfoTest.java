package project.team6.umbuy.AndroidTest.AcceptanceTest;

import android.test.ActivityInstrumentationTestCase2;

import com.robotium.solo.Solo;

import project.team6.umbuy.R;
import project.team6.umbuy.presentation.LoginActivity;
import project.team6.umbuy.presentation.ViewAdInfoActivity;
import project.team6.umbuy.presentation.ViewAdsActivity;

/**
 * Created by yuanding on 2018-03-20.
 */

public class ViewAdInfoTest extends ActivityInstrumentationTestCase2<LoginActivity> {
    private Solo solo;

    public ViewAdInfoTest() {
        super(LoginActivity.class);
    }

    public void setUp() throws Exception {
        solo = new Solo(getInstrumentation(), getActivity());
    }

    @Override
    public void tearDown() throws Exception {
        solo.finishOpenedActivities();
    }


    public void testViewAdInfo() throws InterruptedException {

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
//
//        //click the first Item in the recyclerviewList
//        solo.sleep(500);

        solo.clickInRecyclerView(0);
        solo.waitForActivity(ViewAdInfoActivity.class);
        solo.sleep(500);
        solo.assertCurrentActivity("Expected ViewAdInfoActivity", ViewAdInfoActivity.class);
        assertTrue(solo.getView(R.id.view_ad_info_title) != null);
        assertTrue(solo.getView(R.id.view_ad_info_category) != null);
        assertTrue(solo.getView(R.id.view_ad_info_price) != null);
        assertTrue(solo.getView(R.id.view_ad_info_description) != null);
        assertTrue(solo.getView(R.id.view_ad_info_edit_btn) != null);


        assertTrue(solo.waitForText("Title"));
        assertTrue(solo.waitForText("Category"));
        assertTrue(solo.waitForText("Price"));
        assertTrue(solo.waitForText("Description"));

        assertTrue(solo.searchText("Edit"));
        assertTrue(solo.searchText("Dell laptop"));
        solo.goBack();
        solo.sleep(500);
        //test for logout
        solo.clickOnButton(2);
        assertTrue(solo.waitForActivity(LoginActivity.class));
        solo.assertCurrentActivity("Login activity", LoginActivity.class);
    }
}
