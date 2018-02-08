import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../services/advertisement.service';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser/src/browser/title';
import { Advertisement } from '../api/advertisement';
import { SearchService } from '../services/search.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  title : string = '';
  result: any[]= [];
  message;

  constructor(private _advertisementService: AdvertisementService, private _shareSearchResultService : SearchService) { }

  onKey(event : any){
    this.title = event.target.value;
  }
  getData(){
    this.result = [];
    console.log(this.title+">>>");
    this._advertisementService.getSearchResultByTitle(this.title).subscribe(
      
      res => {for (let entry of res) {
        this.result.push(entry); 
      }},
      err => this.message = err);
      this.shareMessage();
    
  }

  ngOnInit() {
    this._shareSearchResultService.currentMessage.subscribe(result => this.result = result);
  }

  shareMessage(){
    this._shareSearchResultService.changeMessage(this.result);
  }

}

