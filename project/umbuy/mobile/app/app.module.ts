import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { AdvertisementService } from "./services/advertisement.service";
import { UserService } from "./services/user.service";

import { ViewAdsComponent } from "./views/view-ads/view-ads.component";
import { ViewAdInformationComponent } from "./views/view-ad-info/view-ad-information.component";
import { SearchComponent } from "./views/search/search.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { FilterResultService } from './services/filterResult.service';
import { AllResultService } from './services/allResult.service'


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        ViewAdsComponent,
        ViewAdInformationComponent,
        SearchComponent
    ],
    providers: [
        AdvertisementService,
        UserService,
        NativeScriptHttpModule,
        NativeScriptHttpClientModule,
        FilterResultService,
        AllResultService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
