package project.team6.umbuy.controller;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import project.team6.umbuy.TestData;
import project.team6.umbuy.model.Advertisement;

import static org.junit.Assert.*;

/**
 * Created by Owner on 2/27/2018.
 */
public class ViewAdInfoActivityTest {
    private Advertisement advertisement;

    //======================================================================
    // Author: Kyle
    //   here, you need to set up whatever data that are required in order
    //   to initiate the current context. In this case, I need txt_title,
    //   txt_description, picture and txt_price
    //======================================================================
    @Before
    public void setUp() throws Exception{
        TestData testData = new TestData(); // Once you have this, you have access to mock database
        this.advertisement = testData.getAdvertisement();  // set up a single advertisement for testing
    }

    @Test
    public void onCreate() throws Exception {
        System.out.println("\nStarting ViewAdInfoActivityTest: onCreate()");

        System.out.println( this.advertisement.getTitle() );


        System.out.println("Finished ViewAdInfoActivityTest: onCreate()");
    }

}