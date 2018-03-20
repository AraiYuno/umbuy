package project.team6.umbuy.AndroidTest;

import junit.framework.Test;
import junit.framework.TestSuite;

/**
 * Created by yuanding on 2018-03-17.
 */

public class AllAcceptanceTest {

    public static TestSuite suite;

    public static Test suite()
    {
        suite = new TestSuite("Acceptance tests");
        //suite.addTestSuite(AcceptanceTests.suite());
        return suite;

    }
}
