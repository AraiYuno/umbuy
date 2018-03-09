import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AdvertisementService } from '../services/advertisement.service';
import { Advertisement } from '../../data_model/advertisement';
import { NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: '../../presentation/html/delete.component.html',
  styleUrls: ['../../presentation/css/delete.component.scss']
})
export class DeleteComponent implements OnInit {
  advertisement: Advertisement;
  pathNameUrl: string;
  isDeleted: boolean;
  message: string;
  currentAdvertisementId: number;
  
  constructor(private _advertisementService: AdvertisementService, public auth: AuthService, private _router: Router ) {
    this.pathNameUrl = window.location.pathname;
   }
  
   ngOnInit() {
    this.currentAdvertisementId = parseInt(this._advertisementService.getAdvertisementId(this.pathNameUrl));
    
    //if ads appears in url, it means we are deleting an ad
    if(this.pathNameUrl.indexOf("ads") != -1){
      this.deleteAdvertisement(this.currentAdvertisementId);
    }
    
  }

  deleteAdvertisement(advertisementId){
    this._advertisementService.deleteAdvertisementById(this.currentAdvertisementId)
      .subscribe(
        res => this.advertisement = res[0],
        err => this.message = err,
        () => this.backToHomePage()
        // () => this._userService.getUserById(this.advertisement.userId) TODO: might need for test
      )
  }

  backToHomePage(){
    this._router.navigate([""]);
  }
}