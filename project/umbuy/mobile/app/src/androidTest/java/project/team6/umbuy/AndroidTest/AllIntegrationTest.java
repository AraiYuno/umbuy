package project.team6.umbuy.AndroidTest;


import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import project.team6.umbuy.AndroidTest.IntegrationTest.CreateAdActivity_IntegrationTest;
import project.team6.umbuy.AndroidTest.IntegrationTest.ViewAds_IntegrationTest;

/**
 * Created by Kyle on 2018-02-28.
 */
@RunWith(Suite.class)
@Suite.SuiteClasses({
        CreateAdActivity_IntegrationTest.class,
        ViewAds_IntegrationTest.class
})

public class AllIntegrationTest {
}
