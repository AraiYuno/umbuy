package project.team6.umbuy;

import project.team6.umbuy.model.Advertisement;
/**
 * Created by Kyle on 2/27/2018.
 */

public class TestData {
    //Declaration of mock data access
    private Advertisement advertisement;
    public TestData(){
        this.advertisement = new Advertisement();
    }

    // for testing of ViewAdInfoActivity;
    private String txt_title = "iPhone";
    private String txt_description = "A great iphone for a great price";
    private double txt_price = 75.99;
    private String imageUrl = "https://www.google.ca/imgres?imgurl=https%3A%2F%2Flh4.ggpht.com%2FmJDgTDUOtIyHcrb69WM0cpaxFwCNW6f0VQ2ExA7dMKpMDrZ0A6ta64OCX3H-NMdRd20%3Dw300&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dnet.wizmy.url2notification&docid=lSTXvj19EX5vmM&tbnid=fsn4XhkjfyLhlM%3A&vet=10ahUKEwi-qI2o6MfZAhUJzGMKHd9tD9AQMwhIKAAwAA..i&w=300&h=300&bih=600&biw=1177&q=image%20url&ved=0ahUKEwi-qI2o6MfZAhUJzGMKHd9tD9AQMwhIKAAwAA&iact=mrc&uact=8";

    public Advertisement getAdvertisement(){ return this.advertisement; }
}
