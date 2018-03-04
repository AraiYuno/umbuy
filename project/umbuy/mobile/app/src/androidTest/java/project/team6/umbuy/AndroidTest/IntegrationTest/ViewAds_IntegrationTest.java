package project.team6.umbuy.AndroidTest.IntegrationTest;

import android.content.Context;
import android.content.Intent;
import android.support.test.InstrumentationRegistry;
import android.support.test.rule.ActivityTestRule;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.widget.Button;
import android.widget.EditText;

import org.junit.Rule;
import org.junit.Test;
import org.mockito.*;

import java.util.Date;
import java.util.List;

//import project.team6.umbuy.IntegrationTest.TestData;
import project.team6.umbuy.R;
import project.team6.umbuy.controller.AdvertisementService;
import project.team6.umbuy.model.Advertisement;
import project.team6.umbuy.view.AdsAdapter;
import project.team6.umbuy.view.ViewAdsActivity;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import static org.junit.Assert.*;

/**
 * Created by Kyle on 2/28/2018.
 */
public class ViewAds_IntegrationTest {
    private RecyclerView mRecyclerView;
    private List<Advertisement> ads;
    private ViewAdsActivity activity2;
    private int numAds;

    @Mock
    private AdvertisementService adService;
    private Context context;
    private RecyclerView testRecyclerView;


    @Rule
    public ActivityTestRule<ViewAdsActivity> rule = new ActivityTestRule<ViewAdsActivity>(ViewAdsActivity.class) {
        @Override
        protected Intent getActivityIntent() {
            InstrumentationRegistry.getTargetContext();
            Intent intent = new Intent(Intent.ACTION_MAIN);
            return intent;
        }
    };


    // Test the initial setup for ViewAds
    @Test
    public void testViewAdsPresent() throws Exception {
        System.out.println("\nIntegration Test: testViewAdsPresent() started");
        ViewAdsActivity activity = rule.getActivity();
        // check RecyclerView are initiated
        mRecyclerView = activity.findViewById(R.id.listViewAds);
        assertNotNull(mRecyclerView);

        // Check searchText and searchButtons are initiated
        EditText searchText = activity.findViewById(R.id.search_bar);
        Button searchButton = activity.findViewById(R.id.search_button);
        assertNotNull(searchText);
        assertNotNull(searchButton);

        // make a mock adapter and assert that it successfully contains the ads.
        AdsAdapter adsAdapter = new AdsAdapter(this.ads, this.context);
        assertEquals(adsAdapter.getItemCount(), 2);
        System.out.println("\nIntegration Test: testViewAdsPresent() successfully finished");
    }

    // Test loading in ads
    @Test
    public void testUpdatedDataInRecyclerView() throws Exception {
        System.out.println("\nIntegration Test: testUpdatedDataInRecyclerView() started");
        // Set up the ViewAdActivity
        activity2 = rule.getActivity();
        this.testRecyclerView = activity2.findViewById(R.id.listViewAds);
        //count the number of ads currently.
        this.numAds = this.testRecyclerView.getAdapter().getItemCount();

        // create mock service for advertisements
        adService = new AdvertisementService();
        Call<List<Advertisement>> call = adService.getAllAdvertisements();
        call.enqueue(new Callback<List<Advertisement>>() {
            @Override // In this case, the recyclerView took a new ad and made the changes
            public void onResponse(Call<List<Advertisement>> call, Response<List<Advertisement>> response) {
                // add 1 advertisement and see if it ads in the recyclerView
                activity2.testAdd( new Advertisement(9999, "KyleAhnbest", "LG", "A great LG for a great price", 55.99,
                        new Date(), new Date(), new Date(), "www.alink.com", "Electronics"));
                testRecyclerView.getAdapter().notifyDataSetChanged();
                assertEquals( numAds+1, testRecyclerView.getAdapter().getItemCount());
            }

            @Override
            public void onFailure(Call<List<Advertisement>> call, Throwable t) {
                Log.d("=================error", "Retrofit connection failed ================");
                assertEquals(1, 2); // In this case, we fail the test by force.
            }
        });
        System.out.println("\nIntegration Test: testUpdatedDataInRecyclerView() finished");
    }
}