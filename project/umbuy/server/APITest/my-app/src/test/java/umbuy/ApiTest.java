package umbuy;


import org.junit.Before;
import org.junit.Test;
import java.util.Date;
import java.util.HashMap;

import static org.junit.Assert.assertEquals;

import com.fasterxml.jackson.annotation.JsonProperty;
import static io.restassured.RestAssured.given;

/**
 * Unit test for simple App.
 */
public class ApiTest 
{
    HashMap<String, Object> testAd;
    @Before
    public void setup(){
        testAd= new HashMap<String,Object>();
        testAd.put("userId", 1);
        testAd.put("title", "test");
        testAd.put("description", "red");
        testAd.put("price", 99.99);
        testAd.put("imageUrl", "red.com");
        testAd.put("category", "test");

    }

    @Test
    public void testStatusCode_emptyset()
    {
        System.out.println("start testing get all ads on empty set, expected code 200");
        given().when().get("http://localhost:3000/api/ads").then().statusCode(200);
        System.out.println("finished testing get all ads on empty set\n");
    }

    @Test
    public void testGetAds_emptyset()
    {
        System.out.println("start testing get all ads on empty set, expected 0");
        Advertisement[] ads = given().when().get("http://localhost:3000/api/ads").as(Advertisement[].class);
        assertEquals(0, ads.length);
        System.out.println("finished testing get all ads on empty set\n");
    }

    @Test
    public void testInvalidApi()
    {
        System.out.println("start testing invalid api, expected code 404");
        given().when().get("http://localhost:3000/api/adsadsads").then().statusCode(404);
        System.out.println("finished testing invalid api, expected code 404\n");
    }

    @Test
    public void testCreateAds()
    {
        System.out.println("start testing create ad, expected length 1");
        given().contentType("application/json").body(testAd).when().post("http://localhost:3000/api/createAd").then().statusCode(201);
        Advertisement[] ads = given().when().get("http://localhost:3000/api/ads").as(Advertisement[].class);
        assertEquals(1, ads.length);
        given().when().delete("http://localhost:3000/api/ads/"+ads[0].advertisementId).then().statusCode(200);
        System.out.println("finished testing create ad, expected length 1\n");
    }

    @Test
    public void testDeleteFromEmpty()
    {
        System.out.println("start testing delete ad from empty set");
        given().when().delete("http://localhost:3000/api/ads/"+0).then().statusCode(200);
        System.out.println("finished testing delete ad from empty set\n");
    }

    @Test
    public void testGetAds()
    {
        System.out.println("start testing get ads from non-empty set");
        given().contentType("application/json").body(testAd).when().post("http://localhost:3000/api/createAd").then().statusCode(201);
        given().contentType("application/json").body(testAd).when().post("http://localhost:3000/api/createAd").then().statusCode(201);
        Advertisement[] ads = given().when().get("http://localhost:3000/api/ads").as(Advertisement[].class);
        assertEquals(2, ads.length);
        for(Advertisement ad : ads){
            given().when().delete("http://localhost:3000/api/ads/"+ad.advertisementId).then().statusCode(200);
        }
        System.out.println("finished testing delete ad from empty set\n");
    }

    @Test
    public void testGetAdById(){
        System.out.println("start testing for get ad by id from nonempty set");
        given().contentType("application/json").body(testAd).when().post("http://localhost:3000/api/createAd").then().statusCode(201);
        Advertisement[] ads = given().when().get("http://localhost:3000/api/ads").as(Advertisement[].class);
        Advertisement[] ads_return = given().when().get("http://localhost:3000/api/ads/"+ads[0].advertisementId).as(Advertisement[].class);
        assertEquals(1, ads_return.length);
        given().when().delete("http://localhost:3000/api/ads/"+ads_return[0].advertisementId).then().statusCode(200);
        System.out.println("finished testing for get ad by id from nonempty set");
    }

    @Test
    public void testGetAdsByUserId(){
        System.out.println("Start testing for get ads by user Id from empty set, expected 200");
        given().when().get("http://localhost:3000/api/ads/user/"+0).then().statusCode(200);
        System.out.println("finished testing for get ads by user Id from empty set");
    }

    @Test
    public void testGetAdsByUserId_nonEmpty(){
        System.out.println("Start testing for get ads by user Id from empty set, expected 200");
        given().contentType("application/json").body(testAd).when().post("http://localhost:3000/api/createAd").then().statusCode(201);
        Advertisement[] ads = given().when().get("http://localhost:3000/api/ads/user/"+1).as(Advertisement[].class);
        assertEquals(1, ads.length);
        given().when().delete("http://localhost:3000/api/ads/"+ads[0].advertisementId).then().statusCode(200);
        System.out.println("finished testing for get ads by user Id from empty set");
    }

    @Test
    public void testEditAds()
    {
        System.out.println("start testing Edit ad");
        given().contentType("application/json").body(testAd).when().post("http://localhost:3000/api/createAd").then().statusCode(201);
        Advertisement[] ads = given().when().get("http://localhost:3000/api/ads").as(Advertisement[].class);
        assertEquals(1, ads.length);
        HashMap<String, Object> editAd= new HashMap<String,Object>();
        testAd.put("advertisementId", ads[0].advertisementId);
        testAd.put("title", "test_edited");
        testAd.put("description", "red_edited");
        testAd.put("price", 100);
        testAd.put("imageUrl", "red.com");
        testAd.put("category", "test");
        given().contentType("application/json").body(testAd).when().post("http://localhost:3000/api/editAd").then().statusCode(201);
        ads = given().when().get("http://localhost:3000/api/ads").as(Advertisement[].class);
        assertEquals(1, ads.length);
        assertEquals("test_edited", ads[0].title);
        given().when().delete("http://localhost:3000/api/ads/"+ads[0].advertisementId).then().statusCode(200);
        System.out.println("finished testing create ad, expected length 1\n");
    }
    



 static class Advertisement{
        @JsonProperty(value = "advertisementId")
        private int advertisementId;
        @JsonProperty(value = "userId")
        private String userId;
        @JsonProperty(value = "title")
        private String title;
        @JsonProperty(value = "description")
        private String description;
        @JsonProperty(value = "price")
        private double price;
        @JsonProperty(value = "created_on")
        private Date created_on;
        @JsonProperty(value = "last_updated")
        private Date last_updated;
        @JsonProperty(value = "imageUrl")
        private String imageUrl;
        @JsonProperty(value = "category")
        private String category;

    }
}
