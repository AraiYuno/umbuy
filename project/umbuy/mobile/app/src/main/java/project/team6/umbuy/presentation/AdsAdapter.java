package project.team6.umbuy.presentation;

import android.content.Context;
import android.content.Intent;
import android.support.v7.widget.CardView;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;


import java.util.ArrayList;
import java.util.List;

import project.team6.umbuy.R;
import project.team6.umbuy.data_model.Advertisement;



public class AdsAdapter extends RecyclerView.Adapter<AdsAdapter.AdsViewHolder>{

    private List<Advertisement> ads;
    private Context context;

    public AdsAdapter(List<Advertisement> ads, Context context){
        this.ads = ads;
        this.context = context;
    }

    @Override
    public AdsViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View viewItem = LayoutInflater.from(parent.getContext()).inflate(R.layout.ads_card, parent, false);
        AdsViewHolder adsViewHolder = new AdsViewHolder(viewItem, this.context, this);
        return adsViewHolder;
    }

    @Override
    public void onBindViewHolder(AdsViewHolder adsViewHolder, int position) {

        adsViewHolder.description.setText(ads.get(position).getDescription());
        adsViewHolder.price.setText("$ " + ads.get(position).getPrice());
        adsViewHolder.title.setText(ads.get(position).getTitle());
        new LoadImage(adsViewHolder.picture, ads.get(position).getImageUrl()).execute();

    }

    @Override
    public int getItemCount() {
        return ads.size();
    }

    public List<Advertisement> getAds(){return this.ads;}




    @Override
    public void onAttachedToRecyclerView(RecyclerView recyclerView) {
        super.onAttachedToRecyclerView(recyclerView);
    }

    public void updateList(ArrayList<Advertisement> filteredList){
        this.ads = filteredList;
        this.notifyDataSetChanged();
    }


    public static class AdsViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {
        private CardView cv;
        private ImageView picture;
        private TextView title;
        private TextView price;
        private TextView description;
        private Context context;
        private AdsAdapter mAdapter;

        AdsViewHolder(View itemView, Context context ,AdsAdapter mAdapter) {
            super(itemView);
            cv = (CardView)itemView.findViewById(R.id.card_view);
            picture = (ImageView) itemView.findViewById(R.id.picture);
            title = (TextView)itemView.findViewById(R.id.title);
            price = (TextView)itemView.findViewById(R.id.price);
            description = (TextView)itemView.findViewById(R.id.description);
            this.mAdapter = mAdapter;

            itemView.setOnClickListener(this);
            // Added by Kyle for viewAdInfo
            this.context = context;
        }


        //============================================================================
        // Author: Kyle
        //   this method takes you to viewAdInfo onClick with all the data necessary
        //   to display on a single advertisement
        //=============================================================================
        @Override
        public void onClick(View view) {
            int position = getAdapterPosition();
            Advertisement advertisement = mAdapter.getAds().get(position);
            Intent intent = new Intent(this.context, ViewAdInfoActivity.class);
            intent.putExtra("userId", advertisement.getUserId());
            intent.putExtra("adId", advertisement.getAdvertisementId());
            intent.putExtra("imageUrl", advertisement.getImageUrl());
            intent.putExtra("title", advertisement.getTitle());
            String toParse = Double.toString(advertisement.getPrice());
            intent.putExtra("price", toParse);
            intent.putExtra("category", advertisement.getCategory());
            intent.putExtra("description", advertisement.getDescription());
            this.context.startActivity(intent);
        }
    }
}




