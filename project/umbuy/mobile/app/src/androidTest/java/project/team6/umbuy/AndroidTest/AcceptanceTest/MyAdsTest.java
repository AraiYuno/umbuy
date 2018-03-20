package project.team6.umbuy.AndroidTest.AcceptanceTest;

import android.support.v7.widget.RecyclerView;
import android.test.ActivityInstrumentationTestCase2;
import android.view.View;

import com.robotium.solo.Solo;

import project.team6.umbuy.R;
import project.team6.umbuy.presentation.CreateAdActivity;
import project.team6.umbuy.presentation.LoginActivity;
import project.team6.umbuy.presentation.MyAds;
import project.team6.umbuy.presentation.ViewAdsActivity;

/**
 * Created by yuanding on 2018-03-20.
 */

public class MyAdsTest extends ActivityInstrumentationTestCase2<LoginActivity> {
    private Solo solo;

    public  MyAdsTest() {
        super(LoginActivity.class);
    }

    public void setUp() throws Exception {
        solo = new Solo(getInstrumentation(), getActivity());
    }

    @Override
    public void tearDown() throws Exception {
        solo.finishOpenedActivities();
    }


    public void testMyAds() throws InterruptedException {

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

        solo.clickOnActionBarHomeButton();
        solo.clickOnText("My Ads");
        assertTrue(solo.waitForActivity(MyAds.class));
        solo.assertCurrentActivity("Expected MyAds", MyAds.class);
        assertTrue(solo.waitForView(RecyclerView.class));
        View viewMyAdsView=solo.getCurrentActivity().findViewById(R.id.listViewAds);
        assertEquals("Check viewads view not null", true, viewMyAdsView!=null);
        assertEquals("Check RecylerView exists in viewAds page", true,viewMyAdsView instanceof RecyclerView);
        assertTrue(solo.getView(R.id.search_bar) != null);
        assertTrue(solo.getView(R.id.search_button) != null);
        assertTrue(solo.getView(R.id.main_create_ad) != null);
        assertTrue(solo.getView(R.id.main_logout) != null);

        //test for search in myAds

        solo.enterText(0, "Acc");
        assertTrue(solo.searchText("Acc"));
        solo.clickOnButton(0);
        assertTrue(solo.searchText("AcceptanceTest"));
        assertTrue(solo.searchText("100"));

        //test for create in my Ads
        solo.clickOnButton(1);
        assertTrue(solo.waitForActivity(CreateAdActivity.class));
        solo.assertCurrentActivity("Expected CreatedAdsActivity", CreateAdActivity.class);
        solo.sleep(1000);
        solo.enterText(0, "Group6");
        assertTrue(solo.searchText("Group6"));

        solo.enterText(1, "1100000");
        assertTrue(solo.searchText("1100000"));

        solo.enterText(2, "best");
        assertTrue(solo.searchText("best"));

        solo.enterText(3, "best team");
        assertTrue(solo.searchText("best team"));

        solo.clickOnText("Submit Advertisement");

        //also search in the viewAdsList
        assertTrue(solo.waitForActivity(ViewAdsActivity.class));

        solo.assertCurrentActivity("Expected ViewAdsActivity", ViewAdsActivity.class);
        solo.sleep(1000);

        solo.enterText(0, "Gr");
        solo.clickOnButton(0);
        solo.clearEditText(0);
        assertTrue(solo.searchText("Group6"));
        assertTrue(solo.searchText("best team"));

        //check in the myAds list
        solo.clickOnActionBarHomeButton();
        solo.clickOnText("My Ads");
        assertTrue(solo.waitForActivity(MyAds.class));
        solo.assertCurrentActivity("Expected MyAds", MyAds.class);
        solo.enterText(0, "6");
        assertTrue(solo.searchText("6"));
        solo.clickOnButton(0);
        assertTrue(solo.searchText("Group6"));
        assertTrue(solo.searchText("1100000"));

        //test the logout button in navigationDrawer
        solo.clickOnActionBarHomeButton();
        solo.clickOnText("Log out");
        assertTrue(solo.waitForActivity(LoginActivity.class));
        solo.assertCurrentActivity("Login activity", LoginActivity.class);

    }

}
