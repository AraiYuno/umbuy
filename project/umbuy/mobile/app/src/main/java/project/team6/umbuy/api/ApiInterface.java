package project.team6.umbuy.api;

import java.util.List;

import project.team6.umbuy.model.Advertisement;
import retrofit2.Call;
import retrofit2.http.GET;

/*fill the () after @GET @POST @DELETE with corresponding path after host url*/
public interface ApiInterface {
    @GET("/ads")
    Call<List<Advertisement>> getAllAdvertisements();

}
