import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AdvertisementService } from '../services/advertisement.service';
import { Advertisement } from '../api/advertisement';
import { User } from '../api/user';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-view-ad-information',
  templateUrl: './view-ad-information.component.html',
  styleUrls: ['./view-ad-information.component.scss']
})
export class ViewAdInformationComponent implements OnInit {

  advertisement: Advertisement[];
  user: User[];
  pathNameUrl: string;
  currentAdvertisementId: number;
  created_on: string;
  last_updated: string;
  deleted_on: string;
  isDeleted: boolean;

  // Testing Purposes
  message; 
  test_created_on: string;
  test_last_updated: string;
  test_deleted_on: string;
  test_isDeleted: string;
  testDate: string;
  constructor(private _advertisementService: AdvertisementService, private _userService: UserService) {
    this.pathNameUrl = window.location.pathname;
   }
  
  /* Given the path name of the url (everything in url after port number or host name (if port is not there))
   * will return the advertisement id from the path name of the url.
   * Input: Will look something like /viewAdvertisement/:id
   * Output: id
   */
  getAdvertisementId(pathnameUrl: string){
    var splittedParts;
    var splittedParts_length: number;
    var id: number;
   
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
    this.test_created_on = this.created_on;
    this.test_deleted_on = this.deleted_on;
    this.test_isDeleted = this.deleted_on;
    this.test_last_updated = this.last_updated;
  }

  /* Will date in a date in the format YYYY-MM-DD and convert to MM DD, YYYY such as May 1, 2018 */

  //TODO: Why are you passing data object as a parameter but create a new Data object again, Stefan?
  convertToTextDate(date){
    var tempDate = new Date(date);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August",
                  "September", "October", "November", "December"];
    var stringDate;
    var day;
    var month;
    var year;

    day = tempDate.getDate();
    month = tempDate.getMonth();
    year = tempDate.getFullYear();
    
    month = months[month];
    
    stringDate = month + " " + day + ", " + year;
    this.testDate = stringDate;
    return stringDate;
  }

  ngOnInit() {
    this.currentAdvertisementId = this.getAdvertisementId(this.pathNameUrl);

    this._advertisementService.getAdvertisementById(this.currentAdvertisementId)
      .subscribe(
        res => this.advertisement = res,
        err => this.message = err,
        () => this._userService.getUserById(this.advertisement[0].userId)
                .subscribe(
                  res => this.user = res,
                  err => console.error(err.status),
                  () => this.convertDatesToText(this.advertisement[0])
                )
      ) /* After data is back for advertisement, execute getUserById*/  
  }
}