package project.team6.umbuy.AndroidTest;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import project.team6.umbuy.AndroidTest.IntegrationTest.ViewAds_IntegrationTest;
import project.team6.umbuy.AndroidTest.UnitTest.UnitTest.Presentation.ViewAdInfoTest;
import project.team6.umbuy.AndroidTest.UnitTest.UnitTest.Presentation.ViewAdsActivityTest;

/**
 * Created by ye on 2018-02-28.
 */
@RunWith(Suite.class)
@Suite.SuiteClasses({
        ViewAdInfoTest.class,
        ViewAds_IntegrationTest.class,
        ViewAdsActivityTest.class,
})

public class AllUnitTest {
}
