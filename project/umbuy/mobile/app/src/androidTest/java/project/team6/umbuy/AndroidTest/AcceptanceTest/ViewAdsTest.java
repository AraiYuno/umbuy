package project.team6.umbuy.AndroidTest.AcceptanceTest;

import android.support.v7.widget.RecyclerView;
import android.test.ActivityInstrumentationTestCase2;
import android.view.View;

import com.robotium.solo.Solo;

import project.team6.umbuy.R;
import project.team6.umbuy.presentation.ViewAdsActivity;

/**
 * Created by yuanding on 2018-03-20.
 */

public class ViewAdsTest extends ActivityInstrumentationTestCase2<ViewAdsActivity> {

    private Solo solo;

    public ViewAdsTest() {
        super(ViewAdsActivity.class);
    }

    public void setUp() throws Exception {
        solo = new Solo(getInstrumentation(), getActivity());
    }

    @Override
    public void tearDown() throws Exception {
        solo.finishOpenedActivities();
    }


    public void testViewAds() throws InterruptedException {
        solo.waitForActivity(ViewAdsActivity.class);
        solo.sleep(1000);
        solo.assertCurrentActivity("Expected ViewAdsActivity", ViewAdsActivity.class);
        assertTrue(solo.waitForView(RecyclerView.class));
        View viewAdsView = solo.getCurrentActivity().findViewById(R.id.listViewAds);
        assertEquals("Check viewads view not null", true, viewAdsView != null);
        assertEquals("Check RecylerView exists in viewAds page", true, viewAdsView instanceof RecyclerView);
        assertTrue(solo.getView(R.id.toolbar) != null);
        assertTrue(solo.getView(R.id.search_bar) != null);
        assertTrue(solo.getView(R.id.search_button) != null);
        assertTrue(solo.getView(R.id.main_create_ad) != null);
        assertTrue(solo.getView(R.id.main_logout) != null);


        // ********** testing on search**************
        solo.scrollDown();
        solo.scrollDown();
        solo.scrollToTop();


        //list the ads with matched title
        solo.enterText(0, "Batman");
        solo.clickOnButton(0);
        solo.clearEditText(0);
        assertTrue(solo.searchText("Batman"));

        //test on empty input, show all the list
        solo.enterText(0, "");
        solo.clickOnButton(0);
        solo.scrollToBottom();

        //test for title not match
        solo.clearEditText(0);
        solo.enterText(0, "assertw");
        solo.clickOnButton(0);
        solo.clearEditText(0);
        assertFalse(solo.searchText("assertw"));
    }

}
