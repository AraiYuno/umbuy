import { Injectable, isDevMode } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Advertisement } from '../api/advertisement';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class AdvertisementService{
    private url:string;
    private host:string;

    constructor(public http: HttpClient){
        if(isDevMode()){
            this.host = "http://ec2-18-217-86-148.us-east-2.compute.amazonaws.com:9000";
        }
        else{
            this.host = "http://ec2-18-217-86-148.us-east-2.compute.amazonaws.com:9000";
        }
    }

    createAd(advertisement){
        this.url = this.host + "/createAd";
        return this.http.post<Advertisement>(this.url, advertisement);
    }

    getAllAdvertisements(){
        this.url = this.host + "/ads";
        return this.http.get<Advertisement[]>(this.url);
    }

    getAdvertisementById(advertisementId){
        this.url = this.host + "/ads/" + advertisementId;
        return this.http.get<Advertisement>(this.url);
    }

}
