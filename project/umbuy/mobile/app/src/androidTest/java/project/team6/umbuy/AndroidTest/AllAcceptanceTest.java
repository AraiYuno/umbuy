package project.team6.umbuy.AndroidTest;

import junit.framework.Test;
import junit.framework.TestSuite;

import project.team6.umbuy.AndroidTest.AcceptanceTest.AcceptanceTest;

/**
 * Created by yuanding on 2018-03-17.
 */

public class AllAcceptanceTest {

    public static TestSuite suite;

    public static Test suite()
    {
        suite = new TestSuite("Acceptance tests");
        suite.addTestSuite(AcceptanceTest.class);
        return suite;
    }
}