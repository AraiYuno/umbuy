package project.team6.umbuy;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import project.team6.umbuy.view.ViewAdInfoActivityTest;
import project.team6.umbuy.view.AdsAdapterTest;
import project.team6.umbuy.model.AdvertisementTest;

//=========================================================================
// AllUnitTests class
//   this contains testSuite for all the unit tests
//
//=========================================================================
@RunWith(Suite.class)
@Suite.SuiteClasses({
        AdsAdapterTest.class,
        ViewAdInfoActivityTest.class,
        AdvertisementTest.class
})

public class AllUnitTests {
}
