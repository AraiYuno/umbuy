package project.team6.umbuy;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import project.team6.umbuy.data_model.Advertisement;

/**
 *
 * Created by Kyle on 2/27/2018.
 */

public class TestData {

    private Advertisement advertisement;
    private List<Advertisement> ads = new ArrayList<Advertisement>();

    //Declaration of mock data access
    public TestData() {

        // single ad
        this.advertisement = new Advertisement(1, "bbc", "iphone", "A great iphone for a great price", 75.99,
                new Date(), new Date(), new Date(), "www.alink.com", "Electronics");
        // arrayList ads
        ads.add(this.advertisement);
        ads.add(new Advertisement(2, "abc", "Galaxy", "A great samsung for a great price", 65.99,
                new Date(), new Date(), new Date(), "www.alink.com", "Electronics"));

    }

    private String txt_title = "iPhone";
    private String txt_description = "A great iphone for a great price";
    private double txt_price = 75.99;
    private String imageUrl = "https://www.google.ca/imgres?imgurl=https%3A%2F%2Flh4.ggpht.com%2FmJDgTDUOtIyHcrb69WM0cpaxFwCNW6f0VQ2ExA7dMKpMDrZ0A6ta64OCX3H-NMdRd20%3Dw300&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dnet.wizmy.url2notification&docid=lSTXvj19EX5vmM&tbnid=fsn4XhkjfyLhlM%3A&vet=10ahUKEwi-qI2o6MfZAhUJzGMKHd9tD9AQMwhIKAAwAA..i&w=300&h=300&bih=600&biw=1177&q=image%20url&ved=0ahUKEwi-qI2o6MfZAhUJzGMKHd9tD9AQMwhIKAAwAA&iact=mrc&uact=8";


    public Advertisement getAdvertisement(){ return this.advertisement; }
    public List<Advertisement> getAdsList(){ return this.ads; }


}
