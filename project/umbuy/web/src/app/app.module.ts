import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatMenuModule, MatCardModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { GetUsersComponent } from './get-users/get-users.component';
import { PostUsersComponent } from './post-users/post-users.component';

// import MysqlService class here to use it globally
import { MysqlService } from './services/mysql.service';

@NgModule({
  declarations: [
    AppComponent,
    GetUsersComponent,
    PostUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [MysqlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
