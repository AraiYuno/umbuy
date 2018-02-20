"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");

var advertisement_service_1 = require("./services/advertisement.service");
var user_service_1 = require("./services/user.service");

var view_ads_component_1 = require("./view-ads/view-ads.component");
var view_ad_information_component_1 = require("./view-ad-info/view-ad-information.component");
var home_component_1 = require("./home/home.component");
var createAd_component_1 = require("./create-ad/create-ad.component");

var nativeScriptFormsModule_component_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var http_client_1 = require("nativescript-angular/http-client");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                http_1.NativeScriptHttpModule,
                http_client_1.NativeScriptHttpClientModule,
                nativeScriptFormsModule_component_1.NativeScriptFormsModule

            ],
            declarations: [
                app_component_1.AppComponent,
                view_ads_component_1.ViewAdsComponent,
                view_ad_information_component_1.ViewAdInformationComponent,
                home_component_1.HomeComponent,
                createAd_component_1.CreateAdComponent
            ],
            providers: [
                advertisement_service_1.AdvertisementService,
                user_service_1.UserService,
                http_1.NativeScriptHttpModule,
                http_client_1.NativeScriptHttpClientModule
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;