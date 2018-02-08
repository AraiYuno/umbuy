import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../services/advertisement.service';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser/src/browser/title';
import { Advertisement } from '../api/advertisement';
import { FilterResultService } from '../services/filterResult.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AllResultService } from '../services/allResult.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query = '';
  allAds: Advertisement[] = [];
  filteredAds: Advertisement[]= [];
  message;

  constructor(private _advertisementService: AdvertisementService, private _filterResultService : FilterResultService, private _allResultService : AllResultService) { }

  filter(){
    if(this.allAds !== null){
      this.filteredAds = this.allAds;
      this.filteredAds = (this.query) ?
      this.filteredAds.filter(p => p.title.toLowerCase().includes(this.query.toLowerCase())) :
      this.filteredAds;
      this.shareMessage();
    }
  }

  ngOnInit() {
    this._filterResultService.currentMessage.subscribe(filteredAds => this.filteredAds = filteredAds);
    this._allResultService.currentMessage.subscribe(allAds => this.allAds = allAds);
  }

  shareMessage(){
    this._filterResultService.changeMessage(this.filteredAds);
  }

}

