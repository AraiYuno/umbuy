package project.team6.umbuy.AndroidTest.UnitTest.data_model;

import org.junit.Test;

import java.util.Date;

import project.team6.umbuy.data_model.Advertisement;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

/**
 * Created by ye on 2018-02-27.
 * This class is used to test all of the behaviours of a
 * Advertisement object.
 */
public class AdvertisementTest {

    @Test
    public void testConstructor() {
        System.out.println("\nStarting Advertisement Test: constructor");
        Date date = new Date();
        Advertisement ad = new Advertisement(1, "user1", "laptop", "good laptop", 1099.99, date, date, date, "www.google.com","laptop");

        assertNotNull(ad);
        assertEquals("advertisement ID was assigned incorrectly", 1, ad.getAdvertisementId());
        assertEquals("userID was assigned incorrectly", "user1", ad.getUserId());
        assertEquals("title was assigned incorrectly", "laptop", ad.getTitle());
        assertEquals("description was assigned incorrectly", "good laptop", ad.getDescription());
        assertEquals("price was assigned incorrectly", 1099.99, ad.getPrice(), 0);
        assertEquals("Date created_on was assigned incorrectly", date.toString(), ad.getCreated_on());
        assertEquals("Date last_updated was assigned incorrectly", date, ad.getLast_updated());
        assertEquals("imageUrl was assigned incorrectly", "www.google.com", ad.getImageUrl());
        assertEquals("categoty was assigned incorrectly", "laptop", ad.getCategory());


        System.out.println("Finished Advertisement Test: constructor");
    }

}
