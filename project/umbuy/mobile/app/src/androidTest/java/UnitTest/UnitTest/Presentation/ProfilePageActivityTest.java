package UnitTest.UnitTest.Presentation;


import android.support.test.rule.ActivityTestRule;
import android.support.test.runner.AndroidJUnit4;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import junit.framework.TestCase;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import project.team6.umbuy.R;

import project.team6.umbuy.presentation.ProfilePageActivity;


import static org.hamcrest.Matchers.instanceOf;
import static org.hamcrest.Matchers.notNullValue;
import static org.junit.Assert.assertThat;

@RunWith(AndroidJUnit4.class)



public class ProfilePageActivityTest extends TestCase{

    @Rule
    public ActivityTestRule<ProfilePageActivity> rule = new ActivityTestRule<ProfilePageActivity>(ProfilePageActivity.class);


    @Test
    public void TestViewAdsActivity() throws Exception
    {
        System.out.println("\n Test: ProfilePageActivity started");
        final ProfilePageActivity profilePageActivity = rule.getActivity();

        final View Fname = profilePageActivity.findViewById(R.id.user_FName);
        final View Lname = profilePageActivity.findViewById(R.id.user_LName);
        final View email = profilePageActivity.findViewById(R.id.user_Email);
        final View phone = profilePageActivity.findViewById(R.id.user_phone);
        final View goHomeButton = profilePageActivity.findViewById(R.id.goHome);

        assertThat(Fname, notNullValue());
        assertThat(Fname, instanceOf(TextView.class));

        assertThat(Lname, notNullValue());
        assertThat(Lname, instanceOf(TextView.class));

        assertThat(email, notNullValue());
        assertThat(email, instanceOf(TextView.class));

        assertThat(phone, notNullValue());
        assertThat(phone, instanceOf(TextView.class));

        assertThat(goHomeButton, notNullValue());
        assertThat(goHomeButton, instanceOf(Button.class));

    }

}

