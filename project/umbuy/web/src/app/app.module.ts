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
import { routingComponents } from './app-routing.module';
import { routing } from './app-routing.module';
import { AdvertisementService } from './services/advertisement.service';
import { UserService } from './services/user.service';
import { SearchComponent } from './search/search.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './home/home.component';
import { SearchService } from './services/search.service';
import { ViewAdInformationComponent } from './view-ad-information/view-ad-information.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SearchComponent
  ],
  imports: [
    AngularFontAwesomeModule,
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
    MatTabsModule,
    routing
  ],
  providers: [UserService, AdvertisementService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
