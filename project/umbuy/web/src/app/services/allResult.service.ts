import { Injectable } from '@angular/core';
import { Advertisement } from '../api/advertisement';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AllResultService {

  private allResult : BehaviorSubject<Advertisement[]> = new BehaviorSubject<Advertisement[]>(null);
  currentMessage = this.allResult.asObservable();

  constructor(){}

  changeMessage(message : Advertisement[]){
    this.allResult.next(message);
  }


}