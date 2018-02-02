import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Advertisement } from '../api/advertisement';
import { HttpParams } from '@angular/common/http';
import { User } from '../api/user';

@Injectable()
export class MysqlService{

    constructor(public http: HttpClient){
    }

    private url:string;

    getAllAdvertisements(){
        this.url = "http://localhost:3000/ads";
        return this.http.get<Advertisement[]>(this.url);
    }

    getSearchResult(title : string){
        this.url = "http://localhost:3000/ads/";
        this.url = this.url + '?title='+title;
        console.log(this.url);
        return this.http.get<Advertisement[]>(this.url);
    }
    getAdvertisementById(advertisementId){
        this.url = "http://localhost:3000/ads/"+advertisementId;
        return this.http.get<Advertisement[]>(this.url);
    }

    getUserById(userId){
        this.url = "http://localhost:3000/users/"+userId;
        return this.http.get<User[]>(this.url);
    }
}
