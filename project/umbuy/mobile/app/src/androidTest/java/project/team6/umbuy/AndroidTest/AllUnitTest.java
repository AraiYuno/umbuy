package project.team6.umbuy.AndroidTest;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

//import project.team6.umbuy.AndroidTest.IntegrationTest.ViewAds_IntegrationTest;
import project.team6.umbuy.AndroidTest.UnitTest.Presentation.ViewAdInfoActivityTest;
import project.team6.umbuy.AndroidTest.UnitTest.Presentation.ViewAdsActivityTest;
import project.team6.umbuy.AndroidTest.UnitTest.Model.AdvertisementTest;
import project.team6.umbuy.AndroidTest.UnitTest.Presentation.AdsAdapterTest;

/**
 * Created by ye on 2018-02-28.
 */
@RunWith(Suite.class)
@Suite.SuiteClasses({
        ViewAdInfoActivityTest.class,
        // ViewAds_IntegrationTest.class,
        ViewAdsActivityTest.class,
        AdsAdapterTest.class,
        AdvertisementTest.class
})

public class AllUnitTest {
}
