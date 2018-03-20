package project.team6.umbuy.AndroidTest.UnitTest.Presentation;

import android.support.test.rule.ActivityTestRule;
import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import org.junit.Rule;
import org.junit.Test;

import project.team6.umbuy.R;
import project.team6.umbuy.presentation.MyAds;

import static junit.framework.Assert.assertEquals;
import static org.hamcrest.Matchers.instanceOf;
import static org.hamcrest.Matchers.notNullValue;
import static org.junit.Assert.assertThat;

/**
 * Created by bhaulikpatel on 2018-03-18.
 */
public class MyAdsTest {
    @Rule
    public ActivityTestRule<MyAds> rule = new ActivityTestRule<MyAds>(MyAds.class);

    @Test
    public void TestMyAds() throws Exception
    {
        System.out.println("\n Test: MyAds started");
        final MyAds myAds = rule.getActivity();

        final View searchText = myAds.findViewById(R.id.search_bar);
        final View searchButton = myAds.findViewById(R.id.search_button);

        assertThat(searchText, notNullValue());
        assertThat(searchText, instanceOf(EditText.class));

        assertThat(searchButton, notNullValue());
        assertThat(searchButton, instanceOf(Button.class));

        final View createAdsButtons = myAds.findViewById(R.id.main_create_ad);
        final View logoutButton = myAds.findViewById(R.id.main_logout);

        assertThat(createAdsButtons, notNullValue());
        assertThat(createAdsButtons, instanceOf(Button.class));

        assertThat(logoutButton, notNullValue());
        assertThat(logoutButton, instanceOf(Button.class));

        View myAdsList = myAds.findViewById(R.id.listViewAds);

        assertEquals("my ads is not null", true, myAdsList != null);

        assertEquals("myAdslist is a recycler view", true, myAdsList instanceof RecyclerView);
    }

}