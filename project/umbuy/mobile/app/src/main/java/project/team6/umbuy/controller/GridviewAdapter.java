package project.team6.umbuy.controller;

import android.app.Activity;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import project.team6.umbuy.R;
import project.team6.umbuy.model.Advertisement;


public class GridviewAdapter extends BaseAdapter {

    Context context;

    List<Advertisement> ads = new ArrayList<Advertisement>();


    public GridviewAdapter(Context context, List<Advertisement> ads) {
        this.ads = ads;
        this.context = context;
    }

    @Override
    public int getCount() {
        return ads.size();
    }

    @Override
    public Object getItem(int position) {
        return ads.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        ViewHolder viewHolder = null;

        if (convertView == null) {
            LayoutInflater layoutInflater = (LayoutInflater) context.getSystemService(Activity.LAYOUT_INFLATER_SERVICE);
            convertView = layoutInflater.inflate(R.layout.gridview, null);

            viewHolder = new ViewHolder();

            viewHolder.image1 = (ImageView) convertView.findViewById(R.id.image1);
            viewHolder.title1 = (TextView) convertView.findViewById(R.id.title1);
            viewHolder.discription1 = (TextView) convertView.findViewById(R.id.description1);
            viewHolder.date1 = (TextView) convertView.findViewById(R.id.date1);

            convertView.setTag(viewHolder);


        } else {

            viewHolder = (ViewHolder) convertView.getTag();
        }


        Advertisement ad = (Advertisement) getItem(position);
        Bitmap imageBitmap = imageConverter(ad.getImageUrl());
        viewHolder.image1.setImageBitmap(imageBitmap);
        viewHolder.title1.setText(ad.getTitle());
        viewHolder.discription1.setText(ad.getDescription());
        viewHolder.date1.setText(ad.getCreated_on());


        return convertView;
    }

    private class ViewHolder {
        ImageView image1;
        TextView title1;
        TextView discription1;
        TextView date1;

    }

    private Bitmap imageConverter(String url){
        Bitmap bitmap = null;
        try {
            bitmap = BitmapFactory.decodeStream((InputStream)new URL(url).getContent());
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return bitmap;
    }
}



