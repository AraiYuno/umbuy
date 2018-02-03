import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../services/advertisement.service';
import { SearchResult } from '../api/test_search';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser/src/browser/title';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  title : string = '';
  result: SearchResult[];

  constructor(private _advertisementService: AdvertisementService) { }

  onKey(event : any){
    this.title = event.target.value;
  }
  getData(){
    console.log(this.title+">>>");
    this._advertisementService.getSearchResultByTitle(this.title).subscribe(
      res => this.result =res,
      err => console.log(err.status)
    );
    console.log(this.result);
  }
  ngOnInit() {

  }

}
