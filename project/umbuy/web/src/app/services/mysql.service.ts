import { Injectable, isDevMode } from '@angular/core';
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
        if(isDevMode()){
            this.host = "http://localhost:3000";
        }
        else{
            this.host = "http://ec2-18-217-86-148.us-east-2.compute.amazonaws.com:9000";
        }
    }

    private url:string;
    private host:string;

    createAd(advertisement){
        this.url = this.host + "/createAd";
        return this.http.post<Advertisement>(this.url, advertisement);
    }
} 
