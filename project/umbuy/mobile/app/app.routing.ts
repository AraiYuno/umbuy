import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ViewAdInformationComponent } from "./item/view-ad-information.component";
import { ViewAdsComponent } from "./item/view-ads.component";

const routes: Routes = [
    { path: "", redirectTo: "view/ads", pathMatch: "full" },
    { path: 'view/ads', component: ViewAdsComponent },
    { path: "view/ads/:id", component: ViewAdInformationComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }