package project.team6.umbuy.bussiness;

import java.util.ArrayList;
import java.util.List;

import project.team6.umbuy.data_model.Advertisement;

public class FilterAds {

    public static ArrayList<Advertisement> filterAdsByTitle(String filterWord, List<Advertisement> list) {
        ArrayList<Advertisement> filteredList = new ArrayList<>();
        for (Advertisement advertisement: list){
            if(advertisement.getTitle().toLowerCase().contains(filterWord.toLowerCase())){
                filteredList.add(advertisement);
            }
        }
        return filteredList;
    }
}
