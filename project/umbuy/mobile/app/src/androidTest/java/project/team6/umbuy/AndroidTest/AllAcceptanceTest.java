package project.team6.umbuy.AndroidTest.AcceptanceTest;

import junit.framework.Test;
import junit.framework.TestSuite;

/**
 * Created by yuanding on 2018-03-20.
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
