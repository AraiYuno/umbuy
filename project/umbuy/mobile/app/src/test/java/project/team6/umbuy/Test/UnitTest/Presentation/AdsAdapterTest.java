package project.team6.umbuy.Test.UnitTest.Presentation;

import android.content.Context;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import project.team6.umbuy.data_model.Advertisement;
import project.team6.umbuy.presentation.AdsAdapter;

import static org.junit.Assert.*;

/**
 * Created by Kyle on 2/27/2018.
 */
public class AdsAdapterTest {
    private AdsAdapter adsAdapter;
    private List<Advertisement> ads;

    @Mock
    Context mContext;

    // set up the mock list of ads and mock context and a mock adsAdapter
    @Before
    public void setUp(){
        this.ads = new ArrayList<Advertisement>();
        ads.add(new Advertisement(1, "user1", "Title1", "desc1", 1.3,new Date(), new Date(), new Date(),"exampe.com","category"));
        ads.add(new Advertisement(1, "user1", "Title2", "desc1", 1.3,new Date(), new Date(), new Date(),"exampe.com","category"));
        ads.add(new Advertisement(1, "user1", "Title3", "desc1", 1.3,new Date(), new Date(), new Date(),"exampe.com","category"));
        ads.add(new Advertisement(1, "user1", "Batman", "desc1", 1.3,new Date(), new Date(), new Date(),"exampe.com","category"));
        ads.add(new Advertisement(1, "user1", "Book", "desc1", 1.3,new Date(), new Date(), new Date(),"exampe.com","category"));
        this.adsAdapter = new AdsAdapter(this.ads, this.mContext);
    }

    //===================================================================
    // getItemCount
    //   tests getItemCount counts a right size of the list of ads.
    //===================================================================
    @Test
    public void getItemCount() throws Exception {
        assertEquals( this.adsAdapter.getItemCount(), 5);
    }

}