package project.team6.umbuy.api;

import java.util.ArrayList;
import java.util.List;

import project.team6.umbuy.model.Advertisement;
import project.team6.umbuy.model.User;
import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;

/*fill the () after @GET @POST @DELETE with corresponding path after host url*/
public interface ApiInterface {
    @GET("/ads")
    Call<List<Advertisement>> getAllAdvertisements();
    @GET("/users/{user}")
    Call<List<User>> getAllUsers(@Path("user") int id);
}
