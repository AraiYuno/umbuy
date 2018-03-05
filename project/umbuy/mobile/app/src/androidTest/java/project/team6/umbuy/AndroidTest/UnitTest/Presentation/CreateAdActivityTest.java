package project.team6.umbuy.AndroidTest.UnitTest.Presentation;

import android.support.test.rule.ActivityTestRule;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import org.junit.Rule;
import org.junit.Test;

import project.team6.umbuy.R;
import project.team6.umbuy.presentation.CreateAdActivity;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.instanceOf;
import static org.hamcrest.core.IsNull.notNullValue;

/**
 * Created by Vital on 2018-03-05.
 */

public class CreateAdActivityTest {

    @Rule
    public ActivityTestRule<CreateAdActivity> rule = new ActivityTestRule<CreateAdActivity>(CreateAdActivity.class);

    // test for ensuring that all input fields are created
    @Test
    public void testInputFields() throws Exception {
        System.out.println("\n Test: CreateAdTest started");

        CreateAdActivity activity = rule.getActivity();
        View ad_title = activity.findViewById(R.id.create_ad_title_field);
        assertThat(ad_title, notNullValue());
        assertThat(ad_title, instanceOf(EditText.class));

        View ad_description = activity.findViewById(R.id.create_ad_description_field);
        assertThat(ad_description, notNullValue());
        assertThat(ad_description, instanceOf(EditText.class));

        View ad_category = activity.findViewById(R.id.create_ad_category_field);
        assertThat(ad_category, notNullValue());
        assertThat(ad_category, instanceOf(EditText.class));

        View ad_price = activity.findViewById(R.id.create_ad_price_field);
        assertThat(ad_price, notNullValue());
        assertThat(ad_price, instanceOf(EditText.class));

        View ad_upload = activity.findViewById(R.id.create_ad_upload);
        assertThat(ad_upload, notNullValue());
        assertThat(ad_upload, instanceOf(Button.class));

        View ad_submit = activity.findViewById(R.id.create_ad_submit);
        assertThat(ad_submit, notNullValue());
        assertThat(ad_submit, instanceOf(Button.class));
    }
}
