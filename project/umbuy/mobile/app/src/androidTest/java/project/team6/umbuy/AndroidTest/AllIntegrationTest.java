package project.team6.umbuy.AndroidTest;

/**
 * Created by yuanding on 2018-03-04.
 */

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import project.team6.umbuy.AndroidTest.IntegrationTest.CreateAdActivity_IntegrationTest;

/**
 * Created by ye on 2018-02-28.
 */
@RunWith(Suite.class)
@Suite.SuiteClasses({
        CreateAdActivity_IntegrationTest.class
})

public class AllIntegrationTest {
}
