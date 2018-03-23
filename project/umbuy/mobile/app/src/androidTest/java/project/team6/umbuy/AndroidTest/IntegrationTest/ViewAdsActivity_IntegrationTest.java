package project.team6.umbuy.AndroidTest.IntegrationTest;

/**
 * Created by yuanding on 2018-03-04.
 */
import android.support.test.rule.ActivityTestRule;
import android.support.test.runner.AndroidJUnit4;
import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import junit.framework.TestCase;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import project.team6.umbuy.R;

import project.team6.umbuy.presentation.ViewAdsActivity;

import static org.hamcrest.Matchers.instanceOf;
import static org.hamcrest.Matchers.notNullValue;
import static org.junit.Assert.assertThat;

@RunWith(AndroidJUnit4.class)
public class ViewAdsActivity_IntegrationTest extends TestCase {

    @Rule
    public ActivityTestRule<ViewAdsActivity> rule = new ActivityTestRule<ViewAdsActivity>(ViewAdsActivity.class);



    @Test
    public void TestViewAdsActivity() throws Exception
    {
        System.out.println("\n Test: ViewAdsActivity started");
        final ViewAdsActivity viewAdsActivity = rule.getActivity();

        final View searchText = viewAdsActivity.findViewById(R.id.search_bar);
        final View searchButton = viewAdsActivity.findViewById(R.id.search_button);

        assertThat(searchText, notNullValue());
        assertThat(searchText, instanceOf(EditText.class));

        assertThat(searchButton, notNullValue());
        assertThat(searchButton, instanceOf(Button.class));


        final View createAdsButton = viewAdsActivity.findViewById(R.id.main_create_ad);
        final View logoutButton = viewAdsActivity.findViewById(R.id.main_logout);

        assertThat(createAdsButton, notNullValue());
        assertThat(createAdsButton, instanceOf(Button.class));

        assertThat(logoutButton, notNullValue());
        assertThat(logoutButton, instanceOf(Button.class));



        //RecycleView list check
        View viewAdsList = viewAdsActivity.findViewById(R.id.listViewAds);


        assertEquals("viewAdsList not null", true, viewAdsList != null);

        assertEquals("viewAdslist is recyclerView", true, viewAdsList instanceof RecyclerView);


    }
}
