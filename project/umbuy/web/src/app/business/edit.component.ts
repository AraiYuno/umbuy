import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UserService } from '../persistence/user.service';
import { AdvertisementService } from '../persistence/advertisement.service';
import { Advertisement } from '../data_model/advertisement';
import { User } from '../data_model/user';
import { NgIf } from '@angular/common';
import { AuthService } from '../shared/auth.service';
import * as AWS from 'aws-sdk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../presentation/html/edit.component.html',
  styleUrls: ['../presentation/css/edit.component.scss']
})
export class EditComponent implements OnInit {
  advertisement: Advertisement;
  user: User;
  userId: string;
  pathNameUrl: string;
  isDeleted: boolean;
  message: string;
  editable: boolean = false;
  
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  newAd : Advertisement = new Advertisement();
  res : any;
  error: any;
  currentAdvertisementId: number;
  created_on: string;
  last_updated: string;
  deleted_on: string;
  
  // Adding picture to S3
  image;    // this is to store the current image file.
  acceptedMimeTypes = [ // currently allowd types of images
    'image/gif',
    'image/jpeg',
    'image/png'
  ];

  @ViewChild('fileInput') fileInput: ElementRef;
  errorMsg = '';
  hasImage = false;

  validAdMsg;

  //button switches
  createAdSuccess = false;
  postSuccess = false;

  constructor(private _advertisementService: AdvertisementService, private _userService: UserService, private auth: AuthService, private _router: Router ) {
    this.pathNameUrl = window.location.pathname;
   }
  
   ngOnInit() {
    this.currentAdvertisementId = parseInt(this.getAdvertisementId(this.pathNameUrl));

    this._advertisementService.getAdvertisementById(this.currentAdvertisementId)
      .subscribe(
        res => this.advertisement = res[0],
        err => this.message = err,
        () => {this.initializeFields(this.advertisement); this.convertDatesToText(this.advertisement);
              this._userService.getUserById(this.advertisement.userId)
              .subscribe(
                res => this.user = res,
                err => this.error = err,
                () => this.auth.getProfile((err, profile) => {
                    this.userId = profile.sub;

                    //if current user made the ad, they can edit it
                    if(this.userId === this.advertisement.userId){
                      this.editable = true;
                    }   
                })
              )}
      )  

  }

  /* Given the path name of the url (everything in url after port number or host name (if port is not there))
   * will return the advertisement id from the path name of the url.
   * Input: Will look something like /view/ads/:id
   * Output: id
   */
  getAdvertisementId(pathnameUrl: string){
    var splittedParts;
    var splittedParts_length: number;
    var id: string;
   
    splittedParts = pathnameUrl.split("/");
    splittedParts_length = splittedParts.length;
    
    id = splittedParts[splittedParts_length-1];

    return id;
  }

  convertDatesToText(advertisement){
    this.created_on = this.convertToTextDate(advertisement.created_on);
    this.last_updated = this.convertToTextDate(advertisement.last_updated);

    if(advertisement.deleted_on != null){
      this.deleted_on = this.convertToTextDate(advertisement.deleted_on);
      this.isDeleted = true;
    }
    else{
      this.isDeleted = false;
    }

  }

  /* Takes in a string date (string_date) in format YYYY-MM-DD and convert to MM DD, YYYY such as May 1, 2018 */
  convertToTextDate(string_date){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August",
                  "September", "October", "November", "December"];
    var stringDate="";
    var day;
    var month;
    var year;

    var date = new Date(string_date);
    day = date.getUTCDate();
    month = date.getUTCMonth();
    year = date.getUTCFullYear();
    
    month = months[month];
    stringDate = month + " " + day + ", " + year;
    
    return stringDate;
  }

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

  backToMyAdsPage(){
    this._router.navigate(["/view/ads/user/" + this.userId ]);
  }

  editAdvertisement(){
    this.newAd.advertisementId = this.currentAdvertisementId;
    this.newAd.title = this.title;
    this.newAd.description = this.description;
    this.newAd.price = this.price;
    this.newAd.category = this.category;
    
    if( this.hasImage == true )
      this.newAd.imageUrl = 'https://s3.amazonaws.com/kyleteam6best/' + this.image.name; // reference to S3
    else
      this.newAd.imageUrl = this.imageUrl; //if the user didn't change picture, keep the same
    
    this._advertisementService.editAdvertisement(this.newAd).subscribe(
      res => this.res = res,
      err => this.error = err,
      ()=> this.backToMyAdsPage()
    )

  }

  initializeFields(advertisement){
    this.title = advertisement.title;
    this.price = advertisement.price;
    this.description = advertisement.description;
    this.category = advertisement.category;
    this.imageUrl = advertisement.imageUrl;
  }

  //===========================================================================================
  // Author: Kyle
  //   this function checks if the input file is valid or invalid.
  //===========================================================================================
  validateFile(file) {
    return this.acceptedMimeTypes.includes(file.type) && file.size < 5000000;
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
        this.imageUrl = reader.result;
      }
      this.errorMsg = '';
    } else {
      this.errorMsg = 'File must be jpg, png, or gif and cannot exceed 500 KB in size';
    }
  }

}