package project.team6.umbuy;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import project.team6.umbuy.controller.AdsAdapter;
import project.team6.umbuy.controller.ViewAdInfoActivityTest;
//=========================================================================
// AllUnitTests class
//   this contains testSuite for all the unit tests
//
//=========================================================================
@RunWith(Suite.class)
@Suite.SuiteClasses({
        AdsAdapter.class,
        ViewAdInfoActivityTest.class
})

public class AllUnitTests {
}
