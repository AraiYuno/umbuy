package project.team6.umbuy.AndroidTest.AcceptanceTest;

import android.test.ActivityInstrumentationTestCase2;

import com.robotium.solo.Solo;

import project.team6.umbuy.presentation.LoginActivity;
import project.team6.umbuy.presentation.ViewAdsActivity;

/**
 * Created by yuanding on 2018-03-20.
 */

public class LogoutTest extends ActivityInstrumentationTestCase2<ViewAdsActivity> {
private Solo solo;

public LogoutTest() {
        super(ViewAdsActivity.class);
        }

public void setUp() throws Exception {
        solo = new Solo(getInstrumentation(), getActivity());
        }

@Override
public void tearDown() throws Exception {
        solo.finishOpenedActivities();
        }


public void testLogout() throws InterruptedException {
    solo.sleep(1000);
    assertTrue(solo.waitForActivity(ViewAdsActivity.class));
    solo.assertCurrentActivity("Expected ViewAdsActivity", ViewAdsActivity.class);



    //test for logout
    solo.clickOnButton(2);
    assertTrue(solo.waitForActivity(LoginActivity.class));
    solo.assertCurrentActivity("Login activity", LoginActivity.class);
}
}
