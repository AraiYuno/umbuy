"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");

var view_ad_information_component_1 = require("./view-ad-info/view-ad-information.component");
var view_ads_component_1 = require("./view-ads/view-ads.component");
var home_component_1 = require("./home/home.component");
var createAd_component_1 = require("./create-ad/createAd.component");

var routes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "createAd", component: createAd_component_1.CreateAdComponent },
    { path: 'view/ads', component: view_ads_component_1.ViewAdsComponent },
    { path: "view/ads/:id", component: view_ad_information_component_1.ViewAdInformationComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;