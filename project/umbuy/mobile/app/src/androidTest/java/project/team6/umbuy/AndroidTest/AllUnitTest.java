package project.team6.umbuy.AndroidTest;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import project.team6.umbuy.AndroidTest.UnitTest.Presentation.AdsAdapterTest;
import project.team6.umbuy.AndroidTest.UnitTest.Presentation.CreateAdActivityTest;
import project.team6.umbuy.AndroidTest.UnitTest.Presentation.ViewAdInfoActivityTest;
import project.team6.umbuy.AndroidTest.UnitTest.Presentation.ViewAdsActivityTest;
import project.team6.umbuy.AndroidTest.UnitTest.Presentation.ProfilePageActivityTest;
import project.team6.umbuy.AndroidTest.UnitTest.business.FilterAdsTest;
import project.team6.umbuy.AndroidTest.UnitTest.data_model.AdvertisementTest;

//import project.team6.umbuy.AndroidTest.IntegrationTest.ViewAds_IntegrationTest;

/**
 * Created by Kyle on 2018-02-28.
 */
@RunWith(Suite.class)
@Suite.SuiteClasses({
        ViewAdInfoActivityTest.class,
        ViewAdsActivityTest.class,
        AdsAdapterTest.class,
        AdvertisementTest.class,
        CreateAdActivityTest.class,
        AdvertisementTest.class,
        FilterAdsTest.class,
        ProfilePageActivityTest.class

})

public class AllUnitTest {
}
