package project.team6.umbuy;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import project.team6.umbuy.view.ViewAdInfoActivityTest;
import project.team6.umbuy.view.AdsAdapterTest;

//=========================================================================
// AllUnitTests class
//   this contains testSuite for all the unit tests
//
//=========================================================================
@RunWith(Suite.class)
@Suite.SuiteClasses({
        AdsAdapterTest.class,
        ViewAdInfoActivityTest.class
})

public class AllUnitTests {
}
