//package project.team6.umbuy.view;
//
////=========================================================================
//// Author: Kyle
////   this is an example test for everyone to look at before starting their
////   testing. Follow the similar syntax.
////=========================================================================
//
//import org.junit.Before;
//import org.junit.Test;
//import org.mockito.Mock;
//
//import project.team6.umbuy.TestData;
//import project.team6.umbuy.model.Advertisement;
//
//import static org.junit.Assert.*;
//
///**
// * Created by Owner on 2/27/2018.
// */
//public class ViewAdInfoActivityTest {
//    @Mock
//    ViewAdInfoActivity viewAdInfoActivity;
//
//    private Advertisement advertisement;
//    private TestData testData;
//    //======================================================================
//    // Author: Kyle
//    //   here, you need to set up whatever data that are required in order
//    //   to initiate the current context. In this case, I need txt_title,
//    //   txt_description, picture and txt_price
//    //======================================================================
//    @Before
//    public void setUp() throws Exception {
//        this.testData = new TestData(); // Once you have this, you have access to mock database
//        this.advertisement = testData.getAdvertisement();  // set up a single advertisement for testing
//    }
//
//    @Test
//    public void onCreate() throws Exception {
//        System.out.println("\nStarting ViewAdInfoActivityTest: onCreate()");
//
//        // Since ViewAdInfoActivity only contains assignment, you only need to check equals.
//        assertEquals(this.advertisement.getTitle(), "iphone");
//        assertEquals(Double.toString(this.advertisement.getPrice()), "75.99");
//        assertEquals(this.advertisement.getDescription(), "A great iphone for a great price");
//        System.out.println("Finished ViewAdInfoActivityTest: onCreate()");
//    }
//
//}