package UnitTest;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import UnitTest.UnitTest.Presentation.AdsAdapterTest;
import UnitTest.UnitTest.Presentation.CreateAdActivityTest;
import UnitTest.UnitTest.Presentation.EditAdInfoActivityTest;
import UnitTest.UnitTest.Presentation.ViewAdInfoActivityTest;
import UnitTest.UnitTest.Presentation.ViewAdsActivityTest;
import UnitTest.UnitTest.Presentation.ProfilePageActivityTest;
import UnitTest.UnitTest.business.FilterAdsTest;
import UnitTest.UnitTest.data_model.AdvertisementTest;

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
        ProfilePageActivityTest.class,
        EditAdInfoActivityTest.class

})

public class AllUnitTest {
}
