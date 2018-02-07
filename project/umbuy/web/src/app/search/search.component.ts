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
<<<<<<< HEAD
  title = '';
  result: any[]= [];
  message;
||||||| merged common ancestors
  title : string = '';
  result: SearchResult[];
=======
  title : string = '';
  result: any[]= [];
  message;
>>>>>>> ac12cb6ede3e9155c257ab8d06d8e040957891fa

  constructor(private _advertisementService: AdvertisementService) { }

  onKey(event: any) {
    this.title = event.target.value;
  }
  getData() {
    console.log(this.title + '>>>');
    this._advertisementService.getSearchResultByTitle(this.title).subscribe(
<<<<<<< HEAD
      res => this.result.push(res),
      err => this.message = err);

||||||| merged common ancestors
      res => this.result =res,
      err => console.log(err.status)
    );
=======
      res => this.result =res,
      err => this.message = err);
    
>>>>>>> ac12cb6ede3e9155c257ab8d06d8e040957891fa
    console.log(this.result);
  }
  ngOnInit() {

  }

}