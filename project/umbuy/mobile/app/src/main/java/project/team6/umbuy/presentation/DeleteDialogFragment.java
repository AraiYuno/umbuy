package project.team6.umbuy.presentation;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.app.DialogFragment;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;

import project.team6.umbuy.R;

/**
 * Created by Vital on 2018-03-17.
 */

public class DeleteDialogFragment extends DialogFragment {

    /* The activity that creates an instance of this dialog fragment must
     * implement this interface in order to receive event callbacks.
     * Each method passes the DialogFragment in case the host needs to query it. */
    public interface DeleteDialogListener{
        void onDialogPositiveClick(DialogFragment dialog);
        void onDialogNegativeClick(DialogFragment dialog);
    }

    // Use this instance of the interface to deliver action events
    DeleteDialogListener deleteDialogListener;

    @Override
    public void onAttach(Context context){
        super.onAttach(context);

        Activity activity;

        if (context instanceof Activity){
            activity = (Activity) context;

            // verify that the host activity implements the callback interface
            try {
                // instantiate the listener so we can send events to the host
                deleteDialogListener = (DeleteDialogListener) activity;
            } catch (ClassCastException e) {
                // The activity doesn't implement the interface
                throw new ClassCastException(activity.toString()
                    + " must implement DeleteDialogListener");
            }
        }
    }


    @Override
    public Dialog onCreateDialog(Bundle savedInstanceState) {
        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
        builder.setMessage(R.string.delete_ad_dialog)
                .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        deleteDialogListener.onDialogPositiveClick(DeleteDialogFragment.this);

                    }
                })
                .setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        // User cancelled dialog
                        deleteDialogListener.onDialogNegativeClick(DeleteDialogFragment.this);
                    }
                });

        return builder.create();
    }
}
