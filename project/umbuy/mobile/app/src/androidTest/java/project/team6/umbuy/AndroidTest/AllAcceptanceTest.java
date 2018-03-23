package project.team6.umbuy.AndroidTest;

import junit.framework.Test;
import junit.framework.TestSuite;

import project.team6.umbuy.AndroidTest.AcceptanceTest.CreateAdTest;
import project.team6.umbuy.AndroidTest.AcceptanceTest.DelteAdsTest;
import project.team6.umbuy.AndroidTest.AcceptanceTest.EditAdsTest;
import project.team6.umbuy.AndroidTest.AcceptanceTest.LoginTest;
import project.team6.umbuy.AndroidTest.AcceptanceTest.MyAdsTest;
import project.team6.umbuy.AndroidTest.AcceptanceTest.ProfilePageTest;
import project.team6.umbuy.AndroidTest.AcceptanceTest.ViewAdInfoTest;
import project.team6.umbuy.AndroidTest.AcceptanceTest.ViewAdsTest;

/**
 * Created by yuanding on 2018-03-17.
 */

public class AllAcceptanceTest {

    public static TestSuite suite;

    public static Test suite()
    {
        suite = new TestSuite("Acceptance tests");
        suite.addTestSuite(LoginTest.class);
        suite.addTestSuite(ViewAdsTest.class);
        suite.addTestSuite(ViewAdInfoTest.class);
        suite.addTestSuite(CreateAdTest.class);
        suite.addTestSuite(ProfilePageTest.class);
        suite.addTestSuite(MyAdsTest.class);
        suite.addTestSuite(DelteAdsTest.class);
        suite.addTestSuite(EditAdsTest.class);


        return suite;
    }
}
