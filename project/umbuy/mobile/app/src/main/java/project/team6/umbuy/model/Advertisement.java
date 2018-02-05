package project.team6.umbuy.model;

import com.google.gson.annotations.SerializedName;

import java.util.Date;

public class Advertisement {

    @SerializedName("advertisementId")
    private int advertisementId;
    @SerializedName("userId")
    private int userId;
    @SerializedName("title")
    private String title;
    @SerializedName("description")
    private String description;
    @SerializedName("price")
    private double price;
    @SerializedName("created_on")
    private Date created_on;
    @SerializedName("last_updated")
    private Date last_updated;
    @SerializedName("deleted_on")
    private Date deleted_on;
    @SerializedName("imageUrl")
    private String imageUrl;
    @SerializedName("category")
    private String category;

    public int getAdvertisementId() {
        return advertisementId;
    }

    public int getUserId() {
        return userId;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public double getPrice() {
        return price;
    }

    public String getCreated_on() {
        return created_on.toString();
    }

    public Date getLast_updated() {
        return last_updated;
    }

    public Date getDeleted_on() {
        return deleted_on;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getCategory() {
        return category;
    }
}

