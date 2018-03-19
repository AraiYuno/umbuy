import { Component, OnInit, ElementRef, ViewChild, isDevMode } from '@angular/core';
import { AdvertisementService } from '../services/advertisement.service';
import { Advertisement } from '../../data_model/advertisement';
import { Router } from '@angular/router';
import * as AWS from 'aws-sdk';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-ad',
  templateUrl: '../../presentation/html/create-ad.component.html',
  styleUrls: ['../../presentation/css/create-ad.component.scss']
})
export class CreateAdComponent implements OnInit {

  userId: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;

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

  @ViewChild('fileInput') fileInput: ElementRef;
  fileDataUri = '';
  errorMsg = '';
  hasImage = false;

  validAdMsg;

  //button switches
  createAdSuccess = false;
  postSuccess = false;

  constructor(private _advertisementService : AdvertisementService, private _router: Router, public auth: AuthService) { }

  ngOnInit() {
    this.auth.getProfile((err, profile) => {
      this.userId = profile.sub;
    });
  }
  
  createAd(){

    // TODO: change so that we take userid from logged in user
    this.newAd.userId = this.userId;
    this.newAd.title = this.title;
    this.newAd.description = this.description;
    this.newAd.price = this.price;
    this.newAd.last_updated = null;
    // TODO: Users should be able to upload multiple images.
    
    if(this.hasImage == true)
      this.newAd.imageUrl = 'https://s3.amazonaws.com/kyleteam6best/' + this.image.name; // reference to S3
    else if(!this.hasImage)
      this.newAd.imageUrl = 'https://s3.amazonaws.com/kyleteam6best/default.jpg';
    this.newAd.category = this.category;
    
    this._advertisementService.createAd(this.newAd).subscribe(
      res => this.res = res,
      err => this.error = err,
      () => this.backToHomePage()
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
    window.location.reload(); //so newly created ad displays on page
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
      this.errorMsg = 'File must be jpg, png, or gif and cannot exceed 500 KB in size';
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
