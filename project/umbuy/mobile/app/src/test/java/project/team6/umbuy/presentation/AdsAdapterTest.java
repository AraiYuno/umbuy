package project.team6.umbuy.presentation;

import android.content.Context;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;

import java.util.List;

import project.team6.umbuy.TestData;
import project.team6.umbuy.data_model.Advertisement;

import static org.junit.Assert.*;

/**
 * Created by Kyle on 2/27/2018.
 */
public class AdsAdapterTest {
    private AdsAdapter adsAdapter;
    private TestData testData;
    private List<Advertisement> ads;

    @Mock
    Context mContext;

    // set up the mock list of ads and mock context and a mock adsAdapter
    @Before
    public void setUp(){
        this.testData = new TestData();
        this.ads = this.testData.getAdsList();
        this.adsAdapter = new AdsAdapter(this.ads, this.mContext);
    }

    @Test
    public void onBindViewHolder() throws Exception {

    }


    //===================================================================
    // getItemCount
    //   tests getItemCount counts a right size of the list of ads.
    //===================================================================
    @Test
    public void getItemCount() throws Exception {
        assertEquals( this.adsAdapter.getItemCount(), 2);
    }

    @Test
    public void onAttachedToRecyclerView() throws Exception {
    }

}