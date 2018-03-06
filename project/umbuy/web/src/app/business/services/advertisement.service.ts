import { Injectable, isDevMode } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Advertisement } from '../../data_model/advertisement';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class AdvertisementService{
    private url:string;
    private host:string;

    // Testing purposes
    ads;
    ad;

    constructor(public http: HttpClient){
        if(isDevMode()){
            this.host = "http://localhost:3000/api";
        }
        else{
            this.host = "http://ec2-18-217-86-148.us-east-2.compute.amazonaws.com:9000/api";
        }
    }

    createAd(advertisement){
        this.url = this.host + "/createAd";
        return this.http.post<Advertisement>(this.url, advertisement);
    }

    editAdvertisement(advertisement){
        this.url = this.host + "/editAd";
        return this.http.post<Advertisement>(this.url, advertisement);
    }

    getAllAdvertisements(){
        this.url = this.host + "/ads";
        this.ads = this.http.get<Advertisement[]>(this.url);
        return this.http.get<Advertisement[]>(this.url);
    }

    getAdvertisementsByUserId(userId){
        this.url = this.host + "/ads/user/" + userId;
        this.ads = this.http.get<Advertisement[]>(this.url);
        return this.http.get<Advertisement[]>(this.url);
    }

    getAdvertisementById(advertisementId){
        this.url = this.host + "/ads/" + advertisementId;
        this.ad = this.http.get<Advertisement>(this.url);
        return this.http.get<Advertisement>(this.url);
    }
}
