package UnitTest.UnitTest.Presentation;

import android.content.Intent;
import android.support.test.rule.ActivityTestRule;
import android.widget.EditText;
import android.widget.ImageView;

import org.junit.Rule;
import org.junit.Test;

import java.util.Date;

import project.team6.umbuy.R;
import project.team6.umbuy.data_model.Advertisement;
import project.team6.umbuy.presentation.EditAdInfoActivity;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertNotNull;

/**
 * Created by User on 3/19/2018.
 */

public class EditAdInfoActivityTest {



    @Rule
    public ActivityTestRule<EditAdInfoActivity> rule = new ActivityTestRule<EditAdInfoActivity>(EditAdInfoActivity.class, false, false);

    @Test
    public void testEditAdInfoData() throws Exception {
        System.out.println("\nIntegration Test: testEditAdInfoData() started");
        Date date = new Date(155);


        System.out.println("Test the positive cases");
        Intent intent = new Intent(Intent.ACTION_MAIN);
        Advertisement advertisement = new Advertisement(1, "1", "iphone", "very cheap", 100.0, date, date, date, "imageurl", "5");

        intent.putExtra("imageUrl", advertisement.getImageUrl());
        intent.putExtra("title", advertisement.getTitle());
        String toParse = Double.toString(advertisement.getPrice());
        intent.putExtra("category", advertisement.getCategory());
        intent.putExtra("price", toParse);
        intent.putExtra("description", advertisement.getDescription());

        rule.launchActivity(intent);
        EditAdInfoActivity activity = rule.getActivity();

        EditText txt_title = activity.findViewById(R.id.edit_ad_info_title);
        EditText txt_price = activity.findViewById(R.id.edit_ad_info_price);
        EditText txt_description = activity.findViewById(R.id.edit_ad_info_description);
        EditText txt_category = activity.findViewById(R.id.edit_ad_info_category);
        ImageView picture = activity.findViewById(R.id.edit_ad_info_picture);

        // Test whether the data are correct or not.
        assertEquals("Title: iphone", txt_title.getHint().toString());
        assertEquals("Price: 100.0", txt_price.getHint().toString());
        assertEquals("Description: very cheap", txt_description.getHint().toString());
        assertEquals("Category: 5", txt_category.getHint().toString());
        assertNotNull(picture);

        rule.finishActivity();


        System.out.println("Test the negative cases");
        intent = new Intent(Intent.ACTION_MAIN);
        advertisement = new Advertisement(1, "1", "iii", "very cheap", 100.0, date, date, date, "imageurl", "5");
        intent.putExtra("imageUrl", advertisement.getImageUrl());
        intent.putExtra("title", advertisement.getTitle());
        toParse = Double.toString(advertisement.getPrice());
        intent.putExtra("price", toParse);
        intent.putExtra("category", advertisement.getCategory());
        intent.putExtra("description", advertisement.getDescription());
        rule.launchActivity(intent);
        activity = rule.getActivity();

        txt_title = activity.findViewById(R.id.edit_ad_info_title);
        txt_price = activity.findViewById(R.id.edit_ad_info_price);
        txt_description = activity.findViewById(R.id.edit_ad_info_description);
        txt_category = activity.findViewById(R.id.edit_ad_info_category);
        picture = activity.findViewById(R.id.edit_ad_info_picture);

        assertNotEquals("Title: iphone", txt_title.getHint().toString());

        assertNotEquals("Price: 10.0", txt_price.getHint().toString());
        assertNotEquals("Description: very expensive", txt_description.getHint().toString());
        assertNotEquals("Category: 6", txt_category.getHint().toString());

        System.out.println("\nIntegration Test: testEditAdInfoData() finished");
    }

    @Test
    public void testEditAdInfoDataNegativeCase() throws Exception {
        System.out.println("Test the negative cases");

        Date date = new Date();
        Intent intent = new Intent(Intent.ACTION_MAIN);
        Advertisement advertisement = new Advertisement(1, "1", "iii", "very cheap", 100.0, date, date, date, "imageurl", "5");
        intent.putExtra("imageUrl", advertisement.getImageUrl());
        intent.putExtra("title", advertisement.getTitle());
        String toParse = Double.toString(advertisement.getPrice());
        intent.putExtra("price", toParse);
        intent.putExtra("category", advertisement.getCategory());
        intent.putExtra("description", advertisement.getDescription());
        rule.launchActivity(intent);
        EditAdInfoActivity activity = rule.getActivity();


        EditText txt_title = activity.findViewById(R.id.edit_ad_info_title);
        EditText txt_price = activity.findViewById(R.id.edit_ad_info_price);
        EditText txt_description = activity.findViewById(R.id.edit_ad_info_description);
        EditText txt_category = activity.findViewById(R.id.edit_ad_info_category);
        ImageView picture = activity.findViewById(R.id.edit_ad_info_picture);

        assertNotEquals("Title: iphone", txt_title.getHint().toString());

        assertNotEquals("Price: 10.0", txt_price.getHint().toString());
        assertNotEquals("Description: very expensive", txt_description.getHint().toString());
        assertNotEquals("Category: 6", txt_category.getHint().toString());
    }

    @Test
    public void testEditAdInfoDataEdgeCase() throws Exception {
        System.out.println("Test the Edge cases");

        Date date = new Date();
        Intent intent = new Intent(Intent.ACTION_MAIN);
        Advertisement advertisement = new Advertisement(1, "1", "", "", 1000000000000.0, date, date, date, "imageurl", "5");
        intent.putExtra("imageUrl", advertisement.getImageUrl());
        intent.putExtra("title", advertisement.getTitle());
        String toParse = Double.toString(advertisement.getPrice());
        intent.putExtra("price", toParse);
        intent.putExtra("category", advertisement.getCategory());
        intent.putExtra("description", advertisement.getDescription());
        rule.launchActivity(intent);
        EditAdInfoActivity activity = rule.getActivity();


        EditText txt_title = activity.findViewById(R.id.edit_ad_info_title);
        EditText txt_price = activity.findViewById(R.id.edit_ad_info_price);
        EditText txt_description = activity.findViewById(R.id.edit_ad_info_description);
        EditText txt_category = activity.findViewById(R.id.edit_ad_info_category);
        ImageView picture = activity.findViewById(R.id.edit_ad_info_picture);

        //
        assertEquals( "Title: ", txt_title.getHint().toString());

        assertNotEquals("Price: $1000000000000.0", txt_price.getHint().toString());
        assertNotEquals("", txt_description.getHint().toString());
        assertNotEquals("Category: 6", txt_category.getHint().toString());
    }

    @Test
    public void testEditAdInfoDataNULLCase() throws Exception {
        System.out.println("Test the NULL cases");

        Date date = new Date();
        Intent intent = new Intent(Intent.ACTION_MAIN);
        Advertisement advertisement = new Advertisement(1, "1", null, null, 110, date, date, date, "imageurl", null);
        intent.putExtra("imageUrl", advertisement.getImageUrl());
        intent.putExtra("title", advertisement.getTitle());
        String toParse = Double.toString(advertisement.getPrice());
        intent.putExtra("price", toParse);
        intent.putExtra("category", advertisement.getCategory());
        intent.putExtra("description", advertisement.getDescription());
        rule.launchActivity(intent);
        EditAdInfoActivity activity = rule.getActivity();


        EditText txt_title = activity.findViewById(R.id.edit_ad_info_title);
        EditText txt_price = activity.findViewById(R.id.edit_ad_info_price);
        EditText txt_description = activity.findViewById(R.id.edit_ad_info_description);
        EditText txt_category = activity.findViewById(R.id.edit_ad_info_category);
        ImageView picture = activity.findViewById(R.id.edit_ad_info_picture);


        assertEquals( "Title: null", txt_title.getHint().toString());
        assertEquals("Description: null", txt_description.getHint().toString());
    }



}
