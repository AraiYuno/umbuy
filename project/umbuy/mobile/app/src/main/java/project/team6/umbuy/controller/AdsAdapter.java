package project.team6.umbuy.controller;

import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.AsyncTask;
import android.support.v7.widget.CardView;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;


import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import project.team6.umbuy.R;
import project.team6.umbuy.model.Advertisement;



public class AdsAdapter extends RecyclerView.Adapter<AdsAdapter.AdsViewHolder>{

    private List<Advertisement> ads;
    private Context context;

    AdsAdapter(List<Advertisement> ads, Context context){
        this.ads = ads;
        this.context = context;
    }


    @Override
    public AdsViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View viewItem = LayoutInflater.from(parent.getContext()).inflate(R.layout.ads_card, parent, false);
        AdsViewHolder adsViewHolder = new AdsViewHolder(viewItem, context, ads);
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




    @Override
    public void onAttachedToRecyclerView(RecyclerView recyclerView) {
        super.onAttachedToRecyclerView(recyclerView);
    }


    public static class AdsViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {
        private CardView cv;
        private ImageView picture;
        private TextView title;
        private TextView price;
        private TextView description;
        private List<Advertisement> ads;
        private Context context;

        AdsViewHolder(View itemView, Context context, List<Advertisement> ads) {
            super(itemView);
            cv = (CardView)itemView.findViewById(R.id.card_view);
            picture = (ImageView) itemView.findViewById(R.id.picture);
            title = (TextView)itemView.findViewById(R.id.title);
            price = (TextView)itemView.findViewById(R.id.price);
            description = (TextView)itemView.findViewById(R.id.description);

            itemView.setOnClickListener(this);
            // Added by Kyle for viewAdInfo
            this.ads = ads;
            this.context = context;
        }


        //============================================================================
        // TODO: User's information is also required on viewAdInfo
        // Author: Kyle
        //   this method takes you to viewAdInfo onClick with all the data necessary
        //   to display on a single advertisement
        //=============================================================================
        @Override
        public void onClick(View view) {
            int position = getAdapterPosition();
            Advertisement advertisement = this.ads.get(position);
            Intent intent = new Intent(this.context, ViewAdInfoActivity.class);
            intent.putExtra("imageUrl", advertisement.getImageUrl());
            intent.putExtra("title", advertisement.getTitle());
            String toParse = Double.toString(advertisement.getPrice());
            intent.putExtra("price", toParse);
            intent.putExtra("description", advertisement.getDescription());
            this.context.startActivity(intent);
        }
    }


}


//===========================================================================
// Author: Ye
//    this method allows imageUrl to be rendered in ImageView
//===========================================================================
class LoadImage extends AsyncTask<Object, Void, Bitmap>{

    private ImageView imv;
    private String path;

    public LoadImage(ImageView imv, String url) {
        this.imv = imv;
        this.path = url;
    }

    @Override
    protected Bitmap doInBackground(Object... params) {
        try {
            URL url = new URL(path);
            Bitmap bmp = BitmapFactory.decodeStream(url.openConnection().getInputStream());
            return bmp;

        } catch (Exception e) {
            e.printStackTrace();
            Bitmap bmp = BitmapFactory.decodeResource(null, R.drawable.arrow);
            return bmp;
        }

    }
    @Override
    protected void onPostExecute(Bitmap result) {
//        if (!imv.getTag().toString().equals(path)) {
//               /* The path is not same. This means that this
//                  image view is handled by some other async task.
//                  We don't do anything and return. */
//            return;
//        }
//
//        if(result != null && imv != null){
//            imv.setVisibility(View.VISIBLE);
//            imv.setImageBitmap(result);
//        }else{
//            imv.setVisibility(View.GONE);
//        }
        imv.setImageBitmap(result);
    }

}

