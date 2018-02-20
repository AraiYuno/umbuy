import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ViewAdInformationComponent } from "./views/view-ad-info/view-ad-information.component";
import { ViewAdsComponent } from "./views/view-ads/view-ads.component";
import { HomeComponent } from "./views/home/home.component";
import { CreateAdComponent } from "./views/create-ad/create-ad.component"

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "createAd", component: CreateAdComponent },
    { path: 'view/ads', component: ViewAdsComponent },
    { path: "view/ads/:id", component: ViewAdInformationComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }