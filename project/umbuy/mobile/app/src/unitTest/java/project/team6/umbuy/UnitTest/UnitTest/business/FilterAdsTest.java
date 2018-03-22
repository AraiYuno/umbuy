package UnitTest.UnitTest.business;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import project.team6.umbuy.bussiness.FilterAds;
import project.team6.umbuy.data_model.Advertisement;

import static junit.framework.Assert.assertEquals;


@RunWith(JUnit4.class)
public class FilterAdsTest {
    private ArrayList<Advertisement> filteredList;
    private List<Advertisement> adsList;

    @Before
    public void setup(){
        adsList = new ArrayList<Advertisement>();
        adsList.add(new Advertisement(1, "user1", "Title1", "desc1", 1.3,new Date(), new Date(), new Date(),"exampe.com","category"));
        adsList.add(new Advertisement(1, "user1", "Title2", "desc1", 1.3,new Date(), new Date(), new Date(),"exampe.com","category"));
        adsList.add(new Advertisement(1, "user1", "Title3", "desc1", 1.3,new Date(), new Date(), new Date(),"exampe.com","category"));
        adsList.add(new Advertisement(1, "user1", "Batman", "desc1", 1.3,new Date(), new Date(), new Date(),"exampe.com","category"));
        adsList.add(new Advertisement(1, "user1", "Book", "desc1", 1.3,new Date(), new Date(), new Date(),"exampe.com","category"));


    }

    @Test
    public void testSearchEmpty(){
        filteredList = FilterAds.filterAdsByTitle("",adsList);
        assertEquals("filteredAds must include everything in the adsList", adsList.size(), filteredList.size());
    }

    @Test
    public void testSearchMultiple() {
        filteredList = FilterAds.filterAdsByTitle("title", adsList);
        assertEquals("3 ads must be filtered", 3, filteredList.size());
        assertEquals("Checking if the retrieval of ad is correct", "user1", filteredList.get(0).getUserId());
    }

    @Test
    public void testSearchSingle() {
        filteredList = FilterAds.filterAdsByTitle("Batman", adsList);
        assertEquals("1 ad must be filtered", 1, filteredList.size());
    }

}
