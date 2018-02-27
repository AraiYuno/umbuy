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

    public Advertisement(){
        this.advertisementId = 1;
        this.userId = 1;
        this.title = "lap";
        this.description="sd";
        this.price = 1;
        this.created_on = new Date();
        this.last_updated = new Date();
        this.deleted_on = new Date();
        this.imageUrl = "https://www.google.ca/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
        this.category = "sda";
    }
}

