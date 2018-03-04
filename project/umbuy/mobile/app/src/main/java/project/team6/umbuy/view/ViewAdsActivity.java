package project.team6.umbuy.view;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.NavigationView;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.EditText;

import java.util.ArrayList;
import java.util.List;

import project.team6.umbuy.R;
import project.team6.umbuy.controller.AdvertisementService;
import project.team6.umbuy.controller.CredentialsManager;
import project.team6.umbuy.controller.SearchHelper;
import project.team6.umbuy.model.Advertisement;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ViewAdsActivity extends AppCompatActivity {

    private RecyclerView mRecyclerView;
    private Button createAd;
    private Button logoutButton;
    private NavigationView logoutView;
    private AdsAdapter mAdapter;
    private LinearLayoutManager mLayoutManager;
    private List<Advertisement> list;
    private Context context;
    private DrawerLayout mDrawerLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        list = new ArrayList<Advertisement>();
        context = this;
        getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_STATE_HIDDEN);
        EditText searchText = findViewById(R.id.search_bar);
        Button searchButton = findViewById(R.id.search_button);
        mDrawerLayout = findViewById(R.id.drawer_layout);
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

        createAd = (Button) findViewById(R.id.main_create_ad);
        logoutButton = (Button) findViewById(R.id.main_logout);
        logoutView = (NavigationView) findViewById(R.id.nav_logout);

        mRecyclerView = (RecyclerView) findViewById(R.id.listViewAds);
        mRecyclerView.setHasFixedSize(true);

        mLayoutManager = new LinearLayoutManager(this);
        mRecyclerView.setLayoutManager(mLayoutManager);

        mAdapter = new AdsAdapter(list, context);
        mRecyclerView.setAdapter(mAdapter);

        AdvertisementService adService = new AdvertisementService();

        Call<List<Advertisement>> call = adService.getAllAdvertisements();
        call.enqueue(new Callback<List<Advertisement>>() {
            @Override
            public void onResponse(Call<List<Advertisement>> call, Response<List<Advertisement>> response) {
                list.clear();
                list.addAll(response.body());
                mRecyclerView.getAdapter().notifyDataSetChanged();
            }

            @Override
            public void onFailure(Call<List<Advertisement>> call, Throwable t) {
                Log.d("=================error", "Retrofit connection failed ================");
            }
        });

        // button for createAd Activity
        createAd.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent createAdIntent = new Intent(context,CreateAdActivity.class);
                context.startActivity(createAdIntent);
            }
        });

        logoutButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
            logout();
            }
        });

        NavigationView navigationView = findViewById(R.id.nav_view);

        navigationView.setNavigationItemSelectedListener(
                new NavigationView.OnNavigationItemSelectedListener() {
                    @Override
                    public boolean onNavigationItemSelected(MenuItem menuItem) {

                        // Add code here to update the UI based on the item selected
                        // For example, swap UI fragments here
                        switch (menuItem.getItemId()) {
                            case R.id.nav_logout :
                                menuItem.setChecked(true);
                                mDrawerLayout.closeDrawers();
                                menuItem.setChecked(false);
                                logout();


                            case R.id.nav_home :
                                menuItem.setChecked(true);
                                mDrawerLayout.closeDrawers();

                            default:
                                menuItem.setChecked(true);
                                int navItemIndex = 0;
                                return true;
                        }

                    }
                });

    }

    private void filterAds(String s) {
        ArrayList<Advertisement> filteredList = new ArrayList<>();
        for (Advertisement advertisement: list){
            if(advertisement.getTitle().toLowerCase().contains(s.toLowerCase())){
                filteredList.add(advertisement);
            }
        }
        mAdapter.filterList(filteredList);
    }

    private void logout() {
        CredentialsManager.deleteCredentials(this);
        startActivity(new Intent(this, LoginActivity.class));
        finish();
    }

    public void testAdd(Advertisement ad){
        this.list.add(ad);
    }

}

