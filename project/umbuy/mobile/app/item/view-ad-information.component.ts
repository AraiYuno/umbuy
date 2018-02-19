import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Advertisement } from '../api/advertisement';
import { User } from '../api/user';
import { UserService } from "../services/user.service";
import { AdvertisementService } from "../services/advertisement.service";

@Component({
    selector: "mobile-view-ad-information",
    moduleId: module.id,
    templateUrl: "./view-ad-information.component.html",
    providers: [UserService, AdvertisementService]
})
export class ViewAdInformationComponent implements OnInit {

    advertisement: Advertisement;

    user: User;
    pathNameUrl: string;
    currentAdvertisementId: number;
    created_on: string;
    last_updated: string;
    deleted_on: string;
    isDeleted: boolean;
    message: string;



    constructor(
        private _advertisementService: AdvertisementService,
        private _userService: UserService,
        private route: ActivatedRoute
    ) { }

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

  /* Takes in a string date (string_date) in formate YYYY-MM-DD and convert to MM DD, YYYY such as May 1, 2018 */
  convertToTextDate(string_date){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August",
                  "September", "October", "November", "December"];
    var stringDate;
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

    ngOnInit() {
        const id = +this.route.snapshot.params["id"];
        this._advertisementService.getAdvertisementById(id)
      .subscribe(
        res => this.advertisement = res[0],
        err => this.message = err,
        () => this._userService.getUserById(this.advertisement.userId)
                .subscribe(
                  res => this.user = res[0],
                  err => console.error(err.status),
                  () => this.convertDatesToText(this.advertisement)
                )
      ) /* After data is back for advertisement, execute getUserById*/  
    }
}
