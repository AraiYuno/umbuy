package project.team6.umbuy.Test;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import project.team6.umbuy.Test.UnitTest.Presentation.AdsAdapterTest;
import project.team6.umbuy.Test.UnitTest.business.FilterAdsTest;
import project.team6.umbuy.Test.UnitTest.data_model.AdvertisementTest;

//import project.team6.umbuy.AndroidTest.IntegrationTest.ViewAds_IntegrationTest;

/**
 * Created by Kyle on 2018-02-28.
 */
@RunWith(Suite.class)
@Suite.SuiteClasses({
        AdsAdapterTest.class,
        AdvertisementTest.class,
        FilterAdsTest.class,

})

public class AllUnitTest {
}
