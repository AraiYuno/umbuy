import { Injectable, isDevMode } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { HttpParams } from '@angular/common/http';
import { User } from '../api/user';

@Injectable()
export class UserService{

    private url:string;
    private host:string;

    constructor(public http: HttpClient){
        if(isDevMode()){
            this.host = "http://localhost:3000";
            // this.host = "http://ec2-18-217-86-148.us-east-2.compute.amazonaws.com:8000";
        }
        else{
            this.host = "http://ec2-18-217-86-148.us-east-2.compute.amazonaws.com:9000";
        }
    }

    getUserById(userId){
        this.url = this.host + "/users/"+userId;
        return this.http.get<User>(this.url);
    }

    getUserIdByEmail(email){
        this.url = this.host + "/users/"+email;
        return this.http.get<number>(this.url);
    }

    
}
