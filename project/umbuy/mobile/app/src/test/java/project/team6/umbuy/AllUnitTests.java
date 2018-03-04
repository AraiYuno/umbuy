package project.team6.umbuy;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import project.team6.umbuy.presentation.ViewAdInfoActivityTest;
import project.team6.umbuy.presentation.AdsAdapterTest;
import project.team6.umbuy.data_model.AdvertisementTest;

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
