import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class MysqlService{

    constructor(public http: Http){
    }

    private url:string = "http://localhost:3000/getusers";

    getUserData(){
        return this.http.get(this.url).map((response: Response) => response.json());
    }

    /*
    public addMysqlUserDatas( _firstname: string, _lastname: string ){
        const url = 'http://local:4000/post_users.php';
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(url, {id: '', firstname: _firstname, lastname: _lastname}, {headers: headers})
            .map((res: Response) => res.text())
            .subscribe( res => { console.log(res.toString());
            });
    }

    public getMysqlUsersDatas(){
        return this._http.get('http://localhost:3000/getusers')
            .map( rep => rep.json() );
    }

    public getLocalUsersData() {
        return this._http.get('./assets/users.json')
            .map( rep => rep.json() );
    }

    public getLocalTextDatas() {
        return this._http.get('./assets/read.txt')
            .map( rep => rep.text() );
    }*/
}