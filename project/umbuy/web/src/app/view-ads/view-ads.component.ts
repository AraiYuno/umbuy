import { Component, OnInit } from '@angular/core';
import { MysqlService } from '../services/mysql.service';
import { Advertisement } from '../api/advertisement';

@Component({
  selector: 'app-view-ads-component',
  templateUrl: './view-ads.component.html',
  styleUrls: ['./view-ads.component.scss']
})
export class ViewAdsComponent implements OnInit {

  advertisements: Advertisement[];

  constructor(private _mysqlService: MysqlService) { }

  showReducedDescriptionLength(description, length){
    var reducedString;

    if(description.length < length){
      reducedString = description;
    }
    else{
      reducedString = description.substring(0, length);
      reducedString = reducedString + "...";
    }
    return reducedString;
  }
  
  ngOnInit() {
    this._mysqlService.getAllAdvertisements()
      .subscribe(
        res => this.advertisements = res,
        err => console.error(err.status)
      );  
  }

}
