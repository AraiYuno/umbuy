package project.team6.umbuy.controller;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;


import java.util.ArrayList;
import java.util.List;

import project.team6.umbuy.R;
import project.team6.umbuy.api.ApiClient;
import project.team6.umbuy.api.ApiInterface;
import project.team6.umbuy.model.Advertisement;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;

public class MainActivity extends AppCompatActivity {

    private RecyclerView mRecyclerView;
    private AdsAdapter mAdapter;
    private LinearLayoutManager mLayoutManager;
    private List<Advertisement> list;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        list = new ArrayList<Advertisement>();
        list.add(new Advertisement());

        mRecyclerView = (RecyclerView) findViewById(R.id.listViewAds);
        mRecyclerView.setHasFixedSize(true);

        // use a linear layout manager
        mLayoutManager = new LinearLayoutManager(this);
        mRecyclerView.setLayoutManager(mLayoutManager);

//        // specify an adapter (see also next example)
        mAdapter = new AdsAdapter(list);
        mRecyclerView.setAdapter(mAdapter);

        Retrofit retrofit = ApiClient.getApiClient();
        ApiInterface apiClient = retrofit.create(ApiInterface.class);

        Call<List<Advertisement>> call = apiClient.getAllAdvertisements();
        call.enqueue(new Callback<List<Advertisement>>() {
            @Override
            public void onResponse(Call<List<Advertisement>> call, Response<List<Advertisement>> response) {
                list.clear();
                list.addAll(response.body());
                mRecyclerView.getAdapter().notifyDataSetChanged();


            }

            @Override
            public void onFailure(Call<List<Advertisement>> call, Throwable t) {
                Log.d("errororororororoorororo", "sfdafdsafasdfasddfasdfasddfasdf");
            }
        });
    }


}
