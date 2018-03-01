package project.team6.umbuy.IntegrationTest;

import android.content.Intent;
import android.support.test.InstrumentationRegistry;
import android.support.test.rule.ActivityTestRule;
import android.widget.ImageView;
import android.widget.TextView;

import org.junit.Rule;
import org.junit.Test;

import project.team6.umbuy.R;
import project.team6.umbuy.model.Advertisement;
import project.team6.umbuy.view.ViewAdInfoActivity;

import static org.junit.Assert.*;

/**
 * Created by Owner on 2/28/2018.
 */
public class ViewAdInfo_IntegrationTest {
    private TestData testData = new TestData();


    // Set up the exact same environment for the ViewAdInfoActivity intent when user clicks on
    // a single ad on ViewAds page.
    @Rule
    public ActivityTestRule<ViewAdInfoActivity> rule = new ActivityTestRule<ViewAdInfoActivity>(ViewAdInfoActivity.class) {
        @Override
        protected Intent getActivityIntent() {
            InstrumentationRegistry.getTargetContext();
            Intent intent = new Intent(Intent.ACTION_MAIN);
            Advertisement advertisement = testData.getAdvertisement();
            intent.putExtra("imageUrl", advertisement.getImageUrl());
            intent.putExtra("title", advertisement.getTitle());
            String toParse = Double.toString(advertisement.getPrice());
            intent.putExtra("price", toParse);
            intent.putExtra("description", advertisement.getDescription());
            return intent;
        }
    };

    //====================================================================================
    // Author: Kyle
    //   this method simply checks if the data is passed correctly to the ViewAdInfo intent
    //   and assert that we have an expected data passed on.
    //====================================================================================
    @Test
    public void testViewAdInfoData() throws Exception {
        System.out.println("\nIntegration Tedst: testViewAdInfoData() started");
        ViewAdInfoActivity activity = rule.getActivity();

        // Retrieve the data just like the ViewAdInfo Activity
        TextView txt_title = activity.findViewById(R.id.view_ad_info_title);
        TextView txt_price = activity.findViewById(R.id.view_ad_info_price);
        TextView txt_description = activity.findViewById(R.id.view_ad_info_description);
        ImageView picture = activity.findViewById(R.id.view_ad_info_picture);

        // Test whether the data are correct or not.
        assertEquals("Title: iphone", txt_title.getText().toString());
        assertEquals("Price: £75.99", txt_price.getText().toString());
        assertEquals("Description: A great iphone for a great price", txt_description.getText().toString());
        assertNotNull(picture);
        System.out.println("\nIntegration Tedst: testViewAdInfoData() finished");
    }

}