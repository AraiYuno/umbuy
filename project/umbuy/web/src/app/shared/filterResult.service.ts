import { Injectable } from '@angular/core';
import { Advertisement } from '../data_model/advertisement';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FilterResultService {

  private searchResult : BehaviorSubject<Advertisement[]> = new BehaviorSubject<Advertisement[]>(null);
  currentMessage = this.searchResult.asObservable();

  constructor(){}
  
  changeMessage(message : Advertisement[]){
    this.searchResult.next(message);
  }


}
