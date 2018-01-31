import { Component, OnInit } from '@angular/core';
import { MysqlService } from '../services/mysql.service';
import { Advertisement } from '../api/advertisement';
import { User } from '../api/user';

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

  constructor(private _mysqlService: MysqlService) {
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

  ngOnInit() {
    this.currentAdvertisementId = this.getAdvertisementId(this.pathNameUrl);

    this._mysqlService.getAdvertisementById(this.currentAdvertisementId)
      .subscribe(
        res => this.advertisement = res,
        err => console.error(err.status),
        () => this._mysqlService.getUserById(this.advertisement[0].userId)
                .subscribe(
                  res => this.user = res,
                  err => console.error(err.status),
          ) /* After data is back for advertisement, execute getUserById*/
      );   
  }  
}

