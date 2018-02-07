import { Component, OnInit } from '@angular/core';
import { User } from '../api/user';
import { MysqlService } from '../services/mysql.service';
import { Advertisement } from '../api/advertisement';

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

  constructor(private _mysqlService : MysqlService) { }

  ngOnInit() {
  }

  createAd(){

    // TODO: change so that we take userid from logged in user
    this.newAd.userId = 1;
    this.newAd.title = this.title;
    this.newAd.description = this.description;
    this.newAd.price = this.price;
    this.newAd.last_updated = null;

    // TODO: change so that users can add photos from their own file. 
    this.newAd.imageUrl = 'https://myanimelist.cdn-dena.com/images/characters/9/310307.jpg'; //default
    this.newAd.category = this.category;

    console.log(this.newAd);
    this._mysqlService.createAd(this.newAd).subscribe(
      
      res => this.res = res,
      err => console.error(err.status)
    )
  }
}
