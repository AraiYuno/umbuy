import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Advertisement } from '../api/advertisement';
import { User } from '../api/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MysqlService{

    constructor(public http: HttpClient){
    }

    private url:string;
    private pass:{};

    getAllAdvertisements(){
        this.url = "http://localhost:3000/getAllAdvertisements";
        return this.http.get<Advertisement[]>(this.url);
    }

    getAdvertisementById(advertisementId){
        this.url = "http://localhost:3000/getAdvertisementById/"+advertisementId;
        return this.http.get<Advertisement[]>(this.url);
    }

    getUserById(userId){
        this.url = "http://localhost:3000/getUserById/"+userId;
        return this.http.get<User[]>(this.url);
    }

    createAd(advertisement){
        this.url = "http://localhost:3000/createAd";
        return this.http.post<Advertisement>(this.url, advertisement);
    }
} 
