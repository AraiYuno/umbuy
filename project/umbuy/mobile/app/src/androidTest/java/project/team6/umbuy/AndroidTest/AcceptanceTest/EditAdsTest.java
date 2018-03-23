package project.team6.umbuy.AndroidTest.AcceptanceTest;

import android.support.v7.widget.RecyclerView;
import android.test.ActivityInstrumentationTestCase2;

import com.robotium.solo.Solo;

import project.team6.umbuy.presentation.EditAdInfoActivity;
import project.team6.umbuy.presentation.LoginActivity;
import project.team6.umbuy.presentation.MyAds;
import project.team6.umbuy.presentation.ViewAdInfoActivity;
import project.team6.umbuy.presentation.ViewAdsActivity;

/**
 * Created by yuanding on 2018-03-20.
 */

public class EditAdsTest  extends ActivityInstrumentationTestCase2<LoginActivity> {
    private Solo solo;

    public  EditAdsTest() {
        super(LoginActivity.class);
    }

    public void setUp() throws Exception {
        solo = new Solo(getInstrumentation(), getActivity());
    }

    @Override
    public void tearDown() throws Exception {
        solo.finishOpenedActivities();
    }


    public void testEditAds() throws InterruptedException {
        AcceptanceTestHelper.login(solo);
        solo.clickOnActionBarHomeButton();
        solo.clickOnText("My Ads");
        assertTrue(solo.waitForActivity(MyAds.class));

        //click on Robotium test info
        solo.enterText(0, "RobotiumTest");
        assertTrue(solo.searchText("RobotiumTest"));
        solo.clickOnButton(0);
        solo.clearEditText(0);
        solo.clickOnText("RobotiumTest");
        solo.waitForActivity(ViewAdInfoActivity.class);
        solo.sleep(500);
        assertTrue(solo.waitForText("Title"));
        assertTrue(solo.waitForText("Price"));
        solo.clickOnText("Edit");

        //test for cancel button
        assertTrue(solo.waitForActivity(EditAdInfoActivity.class));
        solo.assertCurrentActivity("Expected EditAds page", EditAdInfoActivity.class);

        assertTrue(solo.waitForText("Title: RobotiumTest"));
        assertTrue(solo.waitForText("Category: test"));
        assertTrue(solo.waitForText("Price: 500.0"));
        assertTrue(solo.waitForText("Description: best test"));

        assertTrue(solo.searchText("Description: best test"));
        assertTrue(solo.searchText("Edit Advertisement"));
        assertTrue(solo.searchText("Cancel"));
        solo.clickOnText("Cancel");

        //should go to viewAdsList
        solo.waitForActivity(ViewAdsActivity.class);
        solo.sleep(500);
        solo.assertCurrentActivity("Expected ViewAdsActivity", ViewAdsActivity.class);
        assertTrue(solo.waitForView(RecyclerView.class));


        //should go back to editActivity
        solo.goBack();
        solo.sleep(500);
        assertTrue(solo.waitForText("Title: RobotiumTest"));
        assertTrue(solo.waitForText("Category: test"));
        assertTrue(solo.waitForText("Price: 500.0"));
        assertTrue(solo.waitForText("Description: best test"));
        assertTrue(solo.searchText("Price: 500.0"));
        assertTrue(solo.searchText("Edit Advertisement"));

        //start edit ads
        solo.enterText(0, "abcd");
        assertTrue(solo.searchText("abcd"));

        solo.enterText(1, "xyz");
        assertTrue(solo.searchText("xyz"));

        solo.enterText(2, "100");
        assertTrue(solo.searchText("100"));

        solo.clickOnText("Edit Advertisement");

        //check the edited ads in the viewadslist
        solo.waitForActivity(ViewAdsActivity.class);
        solo.sleep(500);
        solo.assertCurrentActivity("Expected ViewAdsActivity", ViewAdsActivity.class);
        assertTrue(solo.waitForView(RecyclerView.class));

        solo.enterText(0, "abcd");
        solo.clickOnButton(0);
        solo.clearEditText(0);
        assertTrue(solo.searchText("abcd"));
        assertTrue(solo.searchText("xyz"));

        //check in myAds
        solo.clickOnActionBarHomeButton();
        solo.clickOnText("My Ads");
        assertTrue(solo.waitForActivity(MyAds.class));
        solo.assertCurrentActivity("Expected MyAds", MyAds.class);
        solo.enterText(0, "abcd");
        solo.clickOnButton(0);
        solo.clearEditText(0);

        assertTrue(solo.searchText("abcd"));


        solo.clickOnText("abcd");
        solo.waitForActivity(ViewAdInfoActivity.class);
        assertTrue(solo.waitForText("Title: abcd"));
        assertTrue(solo.waitForText("Category: xyz"));
        solo.clickOnText("Delete");
        assertTrue(solo.searchText("Are you sure you want to delete this advertisement?"));
        solo.clickOnButton("Yes");

        solo.sleep(500);
        assertTrue(solo.waitForActivity(ViewAdsActivity.class));
        solo.assertCurrentActivity("Expected ViewAdsActivity", ViewAdsActivity.class);


        //edit the Group6 and delete
        solo.clickOnActionBarHomeButton();
        solo.clickOnText("My Ads");
        assertTrue(solo.waitForActivity(MyAds.class));
        solo.assertCurrentActivity("Expected MyAds", MyAds.class);

        solo.enterText(0, "Gro");
        solo.clickOnButton(0);
        solo.clickOnText("Group6");
        solo.waitForActivity(ViewAdInfoActivity.class);
        solo.sleep(500);
        assertTrue(solo.waitForText("Title"));
        assertTrue(solo.waitForText("Price"));
        solo.clickOnText("Edit");

        assertTrue(solo.waitForActivity(EditAdInfoActivity.class));
        solo.assertCurrentActivity("Expected EditAds page", EditAdInfoActivity.class);
        solo.sleep(500);

        solo.enterText(0, "AcceptanceDone");
        assertTrue(solo.searchText("AcceptanceDone"));

        solo.enterText(1, "wow");
        assertTrue(solo.searchText("wow"));

        solo.enterText(2, "10000000");
        assertTrue(solo.searchText("1000000"));

        solo.enterText(3, "Nice Job");
        assertTrue(solo.searchText("Nice Job"));

        solo.clickOnText("Edit Advertisement");

        solo.waitForActivity(ViewAdsActivity.class);
        solo.sleep(500);
        solo.assertCurrentActivity("Expected ViewAdsActivity", ViewAdsActivity.class);
        assertTrue(solo.waitForView(RecyclerView.class));

        solo.enterText(0, "AcceptanceDone");
        solo.clickOnButton(0);
        solo.clearEditText(0);
        assertTrue(solo.searchText("AcceptanceDone"));
        solo.sleep(200);
        solo.clickOnText("AcceptanceDone");
        solo.sleep(500);
        solo.waitForActivity(ViewAdInfoActivity.class);
        solo.assertCurrentActivity("Expected ViewAdInfoActivity", ViewAdInfoActivity.class);

        assertTrue(solo.searchText("Title: AcceptanceDone"));
        assertTrue(solo.searchText("Category: wow"));

        solo.goBack();
        solo.waitForActivity(ViewAdsActivity.class);
        solo.sleep(500);
        solo.assertCurrentActivity("Expected ViewAdsActivity", ViewAdsActivity.class);
        assertTrue(solo.waitForView(RecyclerView.class));
        solo.clickOnActionBarHomeButton();
        solo.clickOnText("My Ads");
        assertTrue(solo.waitForActivity(MyAds.class));
        solo.assertCurrentActivity("Expected MyAds", MyAds.class);
        solo.sleep(400);
        solo.enterText(0, "Accep");
        solo.clickOnButton(0);

        assertTrue(solo.searchText("AcceptanceDone"));
        solo.clickOnText("AcceptanceDone");
        solo.waitForActivity(ViewAdInfoActivity.class);
        assertTrue(solo.waitForText("Title: AcceptanceDone"));
        assertTrue(solo.waitForText("Category: wow"));
        solo.clickOnText("Delete");
        assertTrue(solo.searchText("Are you sure you want to delete this advertisement?"));
        solo.clickOnButton("Yes");

        solo.sleep(500);
        //test for logout
        solo.clickOnButton(2);
        assertTrue(solo.waitForActivity(LoginActivity.class));
        solo.assertCurrentActivity("Login activity", LoginActivity.class);


    }
}
