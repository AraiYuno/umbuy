package project.team6.umbuy.controller;

import java.util.List;

import project.team6.umbuy.api.ApiClient;
import project.team6.umbuy.api.ApiInterface;


import project.team6.umbuy.model.Advertisement;
import retrofit2.Call;
import retrofit2.Retrofit;

/**
 * Created by ye on 2018-02-28.
 */

public class AdvertisementService{

    private ApiInterface service;

    public  AdvertisementService (){
        if(service == null){
            Retrofit retrofit = ApiClient.getApiClient();
            service = retrofit.create(ApiInterface.class);
        }
    }


    public Call<List<Advertisement>> getAllAdvertisements(){
        return service.getAllAdvertisements();
    }

    public Call<Advertisement> submitAd(int advertisementId, String title, String userId, String description, double price, String imageUrl, String category){
        return service.submitAd(advertisementId, title, userId, description, price, imageUrl, category);
    }

}