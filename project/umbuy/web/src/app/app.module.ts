import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatMenuModule, MatCardModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { routingComponents } from './app-routing.module';
import { routing } from './app-routing.module';
import { AdvertisementService } from './services/advertisement.service';
import { UserService } from './services/user.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FilterResultService } from './services/filterResult.service';
import { AllResultService } from './services/allResult.service'
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
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
    MatTabsModule,
    routing
  ],
  providers: [UserService, AdvertisementService, FilterResultService, AllResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
