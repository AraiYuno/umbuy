package project.team6.umbuy.controller;

import android.content.Context;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.EditText;


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
    private Context context;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        list = new ArrayList<Advertisement>();
        list.add(new Advertisement());
        context = MainActivity.this;
        getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_STATE_HIDDEN);
        EditText searchText = findViewById(R.id.search_bar);
        Button searchButton = findViewById(R.id.search_button);
        final SearchHelper searchHelp = new SearchHelper(searchButton,searchText);

        searchHelp.getSearchText().addTextChangedListener(new TextWatcher() {
                @Override
                public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {

                }

                @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {

            }

            @Override
            public void afterTextChanged(Editable editable) {
                searchHelp.filterAds(editable.toString(),list,mAdapter);
            }
        });



        mRecyclerView = (RecyclerView) findViewById(R.id.listViewAds);
        mRecyclerView.setHasFixedSize(true);

        // use a linear layout manager
        mLayoutManager = new LinearLayoutManager(this);
        mRecyclerView.setLayoutManager(mLayoutManager);

//        // specify an adapter (see also next example)
        mAdapter = new AdsAdapter(list, context);
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
