package project.team6.umbuy.view;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.AsyncTask;
import android.widget.ImageView;

import java.net.URL;

import project.team6.umbuy.R;

//===========================================================================
// Author: Ye
//    this method allows imageUrl to be rendered in ImageView
//===========================================================================
class LoadImage extends AsyncTask<Object, Void, Bitmap> {

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
        imv.setImageBitmap(result);
    }

}