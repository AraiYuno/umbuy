package project.team6.umbuy.AndroidTest.AcceptanceTest;

import android.test.ActivityInstrumentationTestCase2;

import com.robotium.solo.Solo;

import project.team6.umbuy.presentation.LoginActivity;
import project.team6.umbuy.presentation.MyAds;
import project.team6.umbuy.presentation.ViewAdInfoActivity;
import project.team6.umbuy.presentation.ViewAdsActivity;

/**
 * Created by yuanding on 2018-03-20.
 */

public class DelteAdsTest extends ActivityInstrumentationTestCase2<LoginActivity> {
    private Solo solo;

    public  DelteAdsTest() {
        super(LoginActivity.class);
    }

    public void setUp() throws Exception {
        solo = new Solo(getInstrumentation(), getActivity());
    }

    @Override
    public void tearDown() throws Exception {
        solo.finishOpenedActivities();
    }


    public void testDeleteAds() throws InterruptedException {
        //************delete the ads in the myAds list*******************
        AcceptanceTestHelper.login(solo);
        solo.clickOnActionBarHomeButton();
        solo.clickOnText("My Ads");
        assertTrue(solo.waitForActivity(MyAds.class));
        solo.clearEditText(0);
        solo.enterText(0, "AcceptanceTest");
        solo.clickOnButton(0);
        solo.clearEditText(0);
        assertTrue(solo.searchText("AcceptanceTest"));

        solo.clickOnText("AcceptanceTest");
        solo.waitForActivity(ViewAdInfoActivity.class);
        assertTrue(solo.waitForText("Title"));
        assertTrue(solo.waitForText("Price"));
        solo.clickOnText("Delete");
        assertTrue(solo.searchText("Are you sure you want to delete this advertisement?"));
        solo.clickOnButton("Yes");

        //search for deleted ads in the viewAdsList
        assertTrue(solo.waitForActivity(ViewAdsActivity.class));
        solo.assertCurrentActivity("Expected ViewAdsActivity", ViewAdsActivity.class);
        solo.sleep(1000);
        solo.enterText(0, "AcceptanceTest");
        solo.clickOnButton(0);
        solo.clearEditText(0);
        solo.sleep(1000);

        //search for the deleted ads in the myAds

        solo.clickOnActionBarHomeButton();
        solo.clickOnText("My Ads");
        assertTrue(solo.waitForActivity(MyAds.class));
        solo.assertCurrentActivity("Expected MyAds", MyAds.class);
        solo.enterText(0, "AcceptanceTest");
        assertTrue(solo.searchText("AcceptanceTest"));
        solo.clickOnButton(0);
        solo.clearEditText(0);
        solo.sleep(500);
        //test for logout
        solo.clickOnButton(2);
        assertTrue(solo.waitForActivity(LoginActivity.class));
        solo.assertCurrentActivity("Login activity", LoginActivity.class);

    }
}

