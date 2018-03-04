package project.team6.umbuy.IntegrationTest;

import android.content.Intent;
import android.support.test.rule.ActivityTestRule;
import android.widget.ImageView;
import android.widget.TextView;

import org.junit.Rule;
import org.junit.Test;

import java.util.Date;

import project.team6.umbuy.R;
import project.team6.umbuy.data_model.Advertisement;
import project.team6.umbuy.presentation.ViewAdInfoActivity;

import static org.junit.Assert.*;

/**
 * Created by Kyle on 2/28/2018.
 */
public class ViewAdInfo_IntegrationTest {
    // Set up the exact same environment for the ViewAdInfoActivity intent when user clicks on
    // a single ad on ViewAds page.
    @Rule
    public ActivityTestRule<ViewAdInfoActivity> rule = new ActivityTestRule<ViewAdInfoActivity>(ViewAdInfoActivity.class, false, false);

    //====================================================================================
    // Author: Kyle
    //   this method simply checks if the data is passed correctly to the ViewAdInfo intent
    //   and assert that we have an expected data passed on.
    //====================================================================================
    @Test
    public void testViewAdInfoData() throws Exception {
        System.out.println("\nIntegration Tedst: testViewAdInfoData() started");
        Date date = new Date(155);


        //////////////// positive case ////////////////

        System.out.println("Test the positive cases");
        Intent intent = new Intent(Intent.ACTION_MAIN);
        Advertisement advertisement = new Advertisement(1, "1", "iphone", "very cheap", 100.0, date, date, date, "imageurl", "5");

        intent.putExtra("imageUrl", advertisement.getImageUrl());
        intent.putExtra("title", advertisement.getTitle());
        String toParse = Double.toString(advertisement.getPrice());
        intent.putExtra("price", toParse);
        intent.putExtra("description", advertisement.getDescription());

        rule.launchActivity(intent);
        ViewAdInfoActivity activity = rule.getActivity();

        // Retrieve the data just like the ViewAdInfo Activity
        TextView txt_title = activity.findViewById(R.id.view_ad_info_title);
        TextView txt_price = activity.findViewById(R.id.view_ad_info_price);
        TextView txt_description = activity.findViewById(R.id.view_ad_info_description);
        ImageView picture = activity.findViewById(R.id.view_ad_info_picture);

        // Test whether the data are correct or not.
        assertEquals("Title: iphone", txt_title.getText().toString());
        assertEquals("Price: £100.0", txt_price.getText().toString());
        assertEquals("Description: very cheap", txt_description.getText().toString());
        assertNotNull(picture);

        rule.finishActivity();


        System.out.println("Test the negative cases");
        /////////// negative case ///////////////
        intent = new Intent(Intent.ACTION_MAIN);
        advertisement = new Advertisement(1, "1", "iii", "very cheap", 100.0, date, date, date, "imageurl", "5");
        intent.putExtra("imageUrl", advertisement.getImageUrl());
        intent.putExtra("title", advertisement.getTitle());
        toParse = Double.toString(advertisement.getPrice());
        intent.putExtra("price", toParse);
        intent.putExtra("description", advertisement.getDescription());
        rule.launchActivity(intent);
        activity = rule.getActivity();

        // Retrieve the data just like the ViewAdInfo Activity
         txt_title = activity.findViewById(R.id.view_ad_info_title);
         txt_price = activity.findViewById(R.id.view_ad_info_price);
         txt_description = activity.findViewById(R.id.view_ad_info_description);
         picture = activity.findViewById(R.id.view_ad_info_picture);

        assertNotEquals("Title: iphone", txt_title.getText().toString());

        assertNotEquals("Price: £10.0", txt_price.getText().toString());
        assertNotEquals("Description: very expensive", txt_description.getText().toString());

        /////////// edge case ///////////////

        System.out.println("\nIntegration Test: testViewAdInfoData() finished");
    }

    @Test
    public void testViewAdInfoDataNegativeCase() throws Exception {
        System.out.println("Test the negative cases");
        /////////// negative case ///////////////

        Date date = new Date();
        Intent intent = new Intent(Intent.ACTION_MAIN);
        Advertisement advertisement = new Advertisement(1, "1", "iii", "very cheap", 100.0, date, date, date, "imageurl", "5");
        intent.putExtra("imageUrl", advertisement.getImageUrl());
        intent.putExtra("title", advertisement.getTitle());
        String toParse = Double.toString(advertisement.getPrice());
        intent.putExtra("price", toParse);
        intent.putExtra("description", advertisement.getDescription());
        rule.launchActivity(intent);
        ViewAdInfoActivity activity = rule.getActivity();


        // Retrieve the data just like the ViewAdInfo Activity
        TextView txt_title = activity.findViewById(R.id.view_ad_info_title);
        TextView txt_price = activity.findViewById(R.id.view_ad_info_price);
        TextView txt_description = activity.findViewById(R.id.view_ad_info_description);
        ImageView picture = activity.findViewById(R.id.view_ad_info_picture);

        assertNotEquals("Title: iphone", txt_title.getText().toString());

        assertNotEquals("Price: £10.0", txt_price.getText().toString());
        assertNotEquals("Description: very expensive", txt_description.getText().toString());
    }

    @Test
    public void testViewAdInfoDataEdgeCase() throws Exception {
        System.out.println("Test the Edge cases");
        /////////// negative case ///////////////

        Date date = new Date();
        Intent intent = new Intent(Intent.ACTION_MAIN);
        Advertisement advertisement = new Advertisement(1, "1", "", "", 1000000000000.0, date, date, date, "imageurl", "5");
        intent.putExtra("imageUrl", advertisement.getImageUrl());
        intent.putExtra("title", advertisement.getTitle());
        String toParse = Double.toString(advertisement.getPrice());
        intent.putExtra("price", toParse);
        intent.putExtra("description", advertisement.getDescription());
        rule.launchActivity(intent);
        ViewAdInfoActivity activity = rule.getActivity();


        // Retrieve the data just like the ViewAdInfo Activity
        TextView txt_title = activity.findViewById(R.id.view_ad_info_title);
        TextView txt_price = activity.findViewById(R.id.view_ad_info_price);
        TextView txt_description = activity.findViewById(R.id.view_ad_info_description);
        ImageView picture = activity.findViewById(R.id.view_ad_info_picture);

        //
        assertEquals( "Title: ", txt_title.getText().toString());

        assertNotEquals("Price: £1000000000000.0", txt_price.getText().toString());
        assertNotEquals("", txt_description.getText().toString());
    }

    @Test
    public void testViewAdInfoDataNULLCase() throws Exception {
        System.out.println("Test the NULL cases");
        /////////// negative case ///////////////

        Date date = new Date();
        Intent intent = new Intent(Intent.ACTION_MAIN);
        Advertisement advertisement = new Advertisement(1, "1", null, null, 110, date, date, date, "imageurl", "5");
        intent.putExtra("imageUrl", advertisement.getImageUrl());
        intent.putExtra("title", advertisement.getTitle());
        String toParse = Double.toString(advertisement.getPrice());
        intent.putExtra("price", toParse);
        intent.putExtra("description", advertisement.getDescription());
        rule.launchActivity(intent);
        ViewAdInfoActivity activity = rule.getActivity();


        // Retrieve the data just like the ViewAdInfo Activity
        TextView txt_title = activity.findViewById(R.id.view_ad_info_title);
        TextView txt_price = activity.findViewById(R.id.view_ad_info_price);
        TextView txt_description = activity.findViewById(R.id.view_ad_info_description);
        ImageView picture = activity.findViewById(R.id.view_ad_info_picture);

        //
        assertEquals( "Title: null", txt_title.getText().toString());
        assertEquals("Description: null", txt_description.getText().toString());
    }


}