import { Component, OnInit } from '@angular/core';
import { MysqlService } from './services/mysql.service';
//import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Demo';

  constructor( private mysqlService: MysqlService){
  }

  ngOnInit(){
  }
  
}



