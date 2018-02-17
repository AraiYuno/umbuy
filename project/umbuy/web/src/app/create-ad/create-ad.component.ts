import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { User } from '../api/user';
import { AdvertisementService } from '../services/advertisement.service';
import { Advertisement } from '../api/advertisement';
import { Router } from '@angular/router';
import * as AWS from 'aws-sdk';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss']
})
export class CreateAdComponent implements OnInit {

  userId: number = 1;
  title: string;
  description: string;
  price: number;
  created_on: Date = new Date();   
  last_updated: Date;
  deleted_on: Date;
  imageUrl: string;
  category: string;

  newAd : Advertisement = new Advertisement();
  res : any;

  // Adding picture to S3
  image;    // this is to store the current image file.
  acceptedMimeTypes = [ // currently allowd types of images
    'image/gif',
    'image/jpeg',
    'image/png'
  ];

  @ViewChild('fileInput') fileInput: ElementRef;
  fileDataUri = '';
  errorMsg = '';
  hasImage = false;

  validAdMsg;

  //button switches
  createAdSuccess = false;
  postSuccess = false;

  constructor(private _advertisementService : AdvertisementService, private _router: Router,public auth: AuthService ) { }

  ngOnInit() {
  }
  
  createAd(){

    // TODO: change so that we take userid from logged in user
    this.newAd.userId = 1;
    this.newAd.title = this.title;
    this.newAd.description = this.description;
    this.newAd.price = this.price;
    this.newAd.last_updated = null;
    // TODO: Users should be able to upload multiple images.
    if( this.hasImage == true )
      this.newAd.imageUrl = 'https://s3.amazonaws.com/kyleteam6best/' + this.image.name; // reference to S3
    else
      this.newAd.imageUrl = 'https://s3.amazonaws.com/kyleteam6best/default.jpg';
    this.newAd.category = this.category;
    // To validate the new advertisement
    this._advertisementService.createAd(this.newAd).subscribe(
      res => this.res = res,
      err => console.error(err.status)
    )

    if( this.createAdSuccess ){
      this.postSuccess = true;
      this.createAdSuccess = false;
    }
  }

  //===========================================================================================
  // Athor: Kyle Ahn
  // backToHomePage()
  //   this function routes users back to the home page
  //===========================================================================================
  backToHomePage(){
    this._router.navigate([""]);
  }

  //===========================================================================================
  // Athor: Kyle Ahn
  // activateSubmit()
  //   this function validates the new advertisement's information
  //===========================================================================================
  activateSubmit(){
    if( this.title != null && this.description != null && this.price != null && this.category != ''){
      this.createAdSuccess = true;
      this.validAdMsg = '';
    }
    else{
      this.createAdSuccess = false;
      this.validAdMsg = "Please fill in all the fields. Image is optional";
    }
  }
  
  //===========================================================================================
  // TODO: uploading multiplic pictures on snapshot 2
  // Author: Kyle Ahn
  // uploadFile(fileInput: any)
  //   this function uploads the input file to S3.
  //===========================================================================================
  uploadFile(fileInput: any) {
    const AWSService = AWS;
    const region = 'us-east-1';
    const bucketName = 'kyleteam6best';
    const IdentityPoolId = 'us-east-1:76f4b57f-b1aa-4d3a-9212-dc2dd92e10aa';
    const file = fileInput.target.files[0];
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
    this.image = file;
    s3.upload({ Key: file.name, Bucket: bucketName, Body: file, ACL: 'public-read'}, function (err, data) {
     if (err) {
       console.log(err, 'there was an error uploading your file');
     }
   });
  }

  //===========================================================================================
  // Author: Kyle
  //   this function shows you a preview of the picture selected by the user.
  //===========================================================================================
  previewFile() {
    // activate the submit button
    const file = this.fileInput.nativeElement.files[0];
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

  //===========================================================================================
  // Author: Kyle
  //   this function checks if the input file is valid or invalid.
  //===========================================================================================
  validateFile(file) {
    return this.acceptedMimeTypes.includes(file.type) && file.size < 5000000;
  }
}
