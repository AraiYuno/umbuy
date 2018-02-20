import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../../api/advertisement';
import { AdvertisementService } from "../../services/advertisement.service";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FilterResultService } from '../../services/filterResult.service';
import { AllResultService } from '../../services/allResult.service';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchPhrase:string = '';
  allAds: Advertisement[] =[];
  filteredAds: Advertisement[]=[];

  constructor(private _filterResultService : FilterResultService, private _allResultService : AllResultService) {  }

  filter(){
    if(this.allAds !== null ){
      this.filteredAds = this.allAds;
      this.filteredAds = (this.searchPhrase) ?
      this.filteredAds.filter(p => p.title.toLowerCase().includes(this.searchPhrase.toLowerCase())) :
      this.filteredAds;
      this.shareMessage();
    }
  }

  onClear(){
    this.filteredAds = this.allAds;
    this.shareMessage();
  }


  ngOnInit() {
    this._filterResultService.currentMessage.subscribe(filteredAds => this.filteredAds = filteredAds);
    this._allResultService.currentMessage.subscribe(allAds => this.allAds = allAds);
  }

  shareMessage(){
    this._filterResultService.changeMessage(this.filteredAds);
  }

}
