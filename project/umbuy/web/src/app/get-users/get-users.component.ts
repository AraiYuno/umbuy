import { Component, OnInit } from '@angular/core';

// we gotta import these two, especially MysqlService class. MysqlService class should have handled receiving data from 
// our MySql database and parse it into json.
import { User } from '../api/user';
import { MysqlService } from '../services/mysql.service';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.scss']
})
export class GetUsersComponent implements OnInit {
  usersMysql: User[];
  usersLocal = [];
  textLocal: string;

  constructor(private _mysqlService: MysqlService) { }

  ngOnInit() {
   // this.getTextLocal();
   // this.getUsersMysql();
  // this.getUsersMysql();
  }
/*
  private getUsersMysql(){
    this._mysqlService.getUserData()
      .subscribe(
        res => this.usersMysql = res,
        err => console.error(err.status)
      );
  }

  private getUsersLocal(){
    this._mysqlService.getLocalUsersData()
      .subscribe(
        res => this.usersLocal = res,
        err => console.error(err.status)
      );
  }

  private getTextLocal(){
    this._mysqlService.getLocalTextDatas()
      .subscribe(
        res => this.textLocal = res,
        err => console.error(err.status)
      );
  }*/

}
