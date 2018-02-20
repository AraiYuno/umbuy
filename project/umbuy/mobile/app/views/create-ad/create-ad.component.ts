import { Component, OnInit, ViewChild } from "@angular/core";
import { Advertisement } from "../../api/advertisement"
import { AdvertisementService } from '../../services/advertisement.service';
import { Router } from '@angular/router';
import * as AWS from 'aws-sdk';

@Component({
    selector: "mobile-createAd",
    moduleId: module.id,
    templateUrl: "./create-ad.component.html",
    styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

    userId: number = 1;
    title: string;
    description: string;
    price: number; 
    category: string;
    imageUrl: string;
    newAd : Advertisement = new Advertisement();
    res : any;
    error: any;

    // Adding picture to S3
    image;    // this is to store the current image file.
    acceptedMimeTypes = [ // currently allowd types of images
    'image/gif',
    'image/jpeg',
    'image/png'
    ];

  @ViewChild('fileInput') fileInput: any;
  fileDataUri = '';
  errorMsg = '';
  hasImage = false;

  validAdMsg;
  
    constructor(private _advertisementService : AdvertisementService, private _router: Router) { }

    ngOnInit() { }

    postAdvertisement(args){
        var isValid;
    
        isValid = this.validate();

        if(isValid){
            this.createAd();
            this.backToHomePage();
        }
    }

    validate(){
        var isValid = true;
        var title;
        var category;
        var description;

        if(this.title == null || this.title.replace(/\s+/, "").length <= 0){ 
            alert("Please enter a title");
            isValid = false;
        }
        else if(this.price == null){ 
            alert("Please enter a price");
            isValid = false;
        }
        else if(this.category == null || this.category.replace(/\s+/, "").length <= 0){ 
            alert("Please enter a category");
            isValid = false;
        }
        else if(this.description == null || this.description.replace(/\s+/, "").length <= 0){ 
            alert("Please enter a description");
            isValid = false;
        }
        
        return isValid;
    }//end validate

    createAd(){
        // TODO: change so that we take userid from logged in user
        this.newAd.userId = 1;
        this.newAd.title = this.title;
        this.newAd.description = this.description;
        this.newAd.price = this.price;
        this.newAd.category = this.category;
        
        // TODO: Users should be able to upload multiple images.
        if( this.hasImage == true )
          this.newAd.imageUrl = 'https://s3.amazonaws.com/kyleteam6best/' + this.image.name; // reference to S3
        else
          this.newAd.imageUrl = 'https://s3.amazonaws.com/kyleteam6best/default.jpg';
    
        
        // To validate the new advertisement
        this._advertisementService.createAd(this.newAd).subscribe(
          res => this.res = res,
          err => this.error = err,
        )
      }

      backToHomePage(){
        this._router.navigate([""]);
      }

      uploadFile() {
        const AWSService = AWS;
        const region = 'us-east-1';
        const bucketName = 'kyleteam6best';
        const IdentityPoolId = 'us-east-1:76f4b57f-b1aa-4d3a-9212-dc2dd92e10aa';
        const file = this.image;
      //Configures the AWS service and initial authorization
        AWSService.config.update({
          region: region,
          credentials: new AWSService.CognitoIdentityCredentials({
            IdentityPoolId: IdentityPoolId
          })
        });
      //adds the S3 service, make sure the api version and bucket are correct
        const s3 = new AWSService.S3({
          apiVersion: '2006-03-01',
          params: { Bucket: bucketName}
        });
      //I store this in a variable for retrieval later
        s3.upload({ Key: file.name, Bucket: bucketName, Body: file, ACL: 'public-read'}, function (err, data) {
         if (err) {
           console.log(err, 'there was an error uploading your file');
         }
       });
      }
    
      previewFile() {
        // activate the submit button
        const file = this.fileInput.nativeElement.files[0];
        this.image = file;
        if (file && this.validateFile(file)) {
          this.hasImage = true;
          const reader = new FileReader();
          reader.readAsDataURL(this.fileInput.nativeElement.files[0]);
          reader.onload = () => {
            this.fileDataUri = reader.result;
          }
          this.errorMsg = '';
        } else {
          this.errorMsg = 'File must be jpg, png, or gif and cannot be exceed 500 KB in size';
        }
      }
    
      validateFile(file) {
        return this.acceptedMimeTypes.includes(file.type) && file.size < 5000000;
      }

}
