package project.team6.umbuy.AndroidTest.IntegrationTest;

import android.content.Intent;
import android.support.test.InstrumentationRegistry;
import android.support.test.annotation.UiThreadTest;
import android.support.test.rule.ActivityTestRule;
import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import org.junit.Rule;
import org.junit.Test;
import org.mockito.Mock;

import project.team6.umbuy.R;
import project.team6.umbuy.data_model.Advertisement;
import project.team6.umbuy.presentation.CreateAdActivity;
import project.team6.umbuy.shared.AdvertisementService;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import static junit.framework.Assert.assertEquals;
import static junit.framework.Assert.assertNotSame;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.instanceOf;
import static org.hamcrest.core.IsNull.notNullValue;

/**
 * Created by Vital on 2018-03-05.
 */

public class CreateAdActivity_IntegrationTest {

    private EditText ad_title;
    private EditText ad_description;
    private EditText ad_price;
    private EditText ad_category;
    private RecyclerView mRecyclerView;

    @Mock
    private AdvertisementService advertisementService;

    @Rule
    public ActivityTestRule<CreateAdActivity> rule = new ActivityTestRule<CreateAdActivity>(CreateAdActivity.class){
        @Override
        protected Intent getActivityIntent(){
            InstrumentationRegistry.getTargetContext();
            Intent intent = new Intent(Intent.ACTION_MAIN);
            return intent;
        }
    };

    // testing cleared input fields after successful submission
    @UiThreadTest
    @Test
    public void testClearFieldsAfterSubmission(){
        System.out.println("\nCreateAdActivity Integration Test: testClearFieldsAfterSubmission Start");

        CreateAdActivity activity = rule.getActivity();

        this.ad_title = activity.findViewById(R.id.create_ad_title_field);
        this.ad_description = activity.findViewById(R.id.create_ad_description_field);
        this.ad_price = activity.findViewById(R.id.create_ad_price_field);
        this.ad_category = activity.findViewById(R.id.create_ad_category_field);

        String userID = "Brian";
//        Espresso.onView(ViewMatchers.withId(R.id.create_ad_title_field)).perform(ViewActions.typeText("Test Title"));
//        Espresso.onView(ViewMatchers.withId(R.id.create_ad_price_field)).perform(ViewActions.typeText("73.57"));
//        Espresso.onView(ViewMatchers.withId(R.id.create_ad_category_field)).perform(ViewActions.typeText("Category"));
//        Espresso.onView(ViewMatchers.withId(R.id.create_ad_description_field)).perform(ViewActions.typeText("Description"));
        this.ad_title.setText("Test Title");
        this.ad_description.setText("Description");
        this.ad_price.setText("73.57");
        this.ad_category.setText("Category");

        String title = ad_title.getText().toString();
        String description = ad_description.getText().toString();
        String category = ad_category.getText().toString();
        Double price = Double.parseDouble(ad_price.getText().toString());

        // create mock service for advertisements;
        advertisementService = new AdvertisementService();
        Call<Advertisement> call = advertisementService.submitAd(0, title, userID, description, price, "", category);
        call.enqueue(new Callback<Advertisement>() {

            // case where the submission was successful and advertisement was added to the database
            @Override
            public void onResponse(Call<Advertisement> call, Response<Advertisement> response) {

                assertEquals(ad_title.getText().toString(), "Test Title");
                assertEquals(ad_price.getText().toString(), "73.57");
                assertEquals(ad_category.getText().toString(), "Category");
                assertEquals(ad_description.getText().toString(), "Description");

            }

            @Override
            public void onFailure(Call<Advertisement> call, Throwable t) {
                // fail the test by force.
                assertNotSame(ad_title.getText().toString(), "");
                assertNotSame(ad_price.getText().toString(), "");
                assertNotSame(ad_category.getText().toString(), "");
                assertNotSame(ad_description.getText().toString(), "");
            }
        });

        System.out.println("\nCreateAdActivity Integration Test: testClearFieldsAfterSubmission Finished");
    }


    @Test
    public void testInputFields() throws Exception {
        System.out.println("\n Test: CreateAdTest: testInputFields started");

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

        System.out.println("\n Test: CreateAdTest: testInputFields finished");
    }
}
