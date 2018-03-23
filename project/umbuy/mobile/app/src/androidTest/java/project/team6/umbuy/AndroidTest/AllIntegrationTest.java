package project.team6.umbuy.AndroidTest;


import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import project.team6.umbuy.AndroidTest.IntegrationTest.CreateAdActivity_IntegrationTest;
import project.team6.umbuy.AndroidTest.IntegrationTest.EditAdInfoActivity_IntegrationTest;
import project.team6.umbuy.AndroidTest.IntegrationTest.MyAds_IntegrationTest;
import project.team6.umbuy.AndroidTest.IntegrationTest.ProfilePageActivity_IntegrationTest;
import project.team6.umbuy.AndroidTest.IntegrationTest.ViewAdInfoActivity_IntegrationTest;
import project.team6.umbuy.AndroidTest.IntegrationTest.ViewAdsActivity_IntegrationTest;
import project.team6.umbuy.AndroidTest.IntegrationTest.ViewAds_IntegrationTest;

/**
 * Created by Kyle on 2018-02-28.
 */
@RunWith(Suite.class)
@Suite.SuiteClasses({
        EditAdInfoActivity_IntegrationTest.class,
        MyAds_IntegrationTest.class,
        CreateAdActivity_IntegrationTest.class,
        ViewAds_IntegrationTest.class,
        ProfilePageActivity_IntegrationTest.class,
        ViewAdInfoActivity_IntegrationTest.class,
        ViewAdsActivity_IntegrationTest.class
})

public class AllIntegrationTest {
}
