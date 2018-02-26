package project.team6.umbuy.controller;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import project.team6.umbuy.R;
import project.team6.umbuy.api.ApiClient;
import project.team6.umbuy.api.ApiInterface;
import project.team6.umbuy.model.Advertisement;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class TabFragment1 extends Fragment {


    private ExpandableHeightGridView gridview;
    private List<Advertisement> ads = new ArrayList<Advertisement>();
    private GridviewAdapter gridviewAdapter;
    private View view;


    private ApiInterface apiInterface;


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        view = inflater.inflate(R.layout.fragmenttab1, container, false);

        gridview = (ExpandableHeightGridView)view.findViewById(R.id.gridview);
        apiInterface = ApiClient.getApiClient().create(ApiInterface.class);

        Call<List<Advertisement>> call = apiInterface.getAllAdvertisements();
        try {
            ads = call.execute().body();
        }catch (IOException e){
            e.printStackTrace();
        }


        //Log.d(TAG, "onCreateView-------------------: "+ads.size());


        gridviewAdapter = new GridviewAdapter(getActivity(), ads);
        gridview.setExpanded(true);

        gridview.setAdapter(gridviewAdapter);
        return view;

    }
//

//    private void fetchAllAds(){
//        ArrayList<Advertisement> result = new ArrayList<>();
//        apiInterface = ApiClient.getApiClient().create(ApiInterface.class);
//
//        Call<List<Advertisement>> call = apiInterface.getAllAdvertisements();
//
//        call.enqueue(new Callback<List<Advertisement>>() {
//            @Override
//            public void onResponse(Call<List<Advertisement>> call, Response<List<Advertisement>> response) {
//                ads = response.body();
//
//                Log.d("Connection established", "Reponse Reverived~~~~~~~~~~~~~~~~~~~~~");
//            }
//
//            @Override
//            public void onFailure(Call<List<Advertisement>> ArrayList, Throwable t) {
//                Log.d("Connection Error", "No response received");
//            }
//        });
//        Log.d(TAG, "fetchAllAds~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~: "+ads.size());
//        //return result;
//    }

}