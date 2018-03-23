package project.team6.umbuy.AndroidTest.AcceptanceTest;

import android.test.ActivityInstrumentationTestCase2;

import com.robotium.solo.Solo;

import project.team6.umbuy.R;
import project.team6.umbuy.presentation.LoginActivity;
import project.team6.umbuy.presentation.ViewAdInfoActivity;

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

        AcceptanceTestHelper.login(solo);
        solo.clearEditText(0);
        solo.clickOnButton(0);


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
