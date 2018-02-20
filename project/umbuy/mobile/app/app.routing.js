"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var view_ad_information_component_1 = require("./views/view-ad-info/view-ad-information.component");
var view_ads_component_1 = require("./views/view-ads/view-ads.component");
var home_component_1 = require("./views/home/home.component");
var create_ad_component_1 = require("./views/create-ad/create-ad.component");
var routes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "createAd", component: create_ad_component_1.CreateAdComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsb0dBQWdHO0FBQ2hHLDBFQUF1RTtBQUN2RSw4REFBNEQ7QUFDNUQsNkVBQXlFO0FBRXpFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUN0QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUscUNBQWdCLEVBQUU7SUFDakQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSwwREFBMEIsRUFBRTtDQUNsRSxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgVmlld0FkSW5mb3JtYXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi92aWV3cy92aWV3LWFkLWluZm8vdmlldy1hZC1pbmZvcm1hdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVmlld0Fkc0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL3ZpZXctYWRzL3ZpZXctYWRzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDcmVhdGVBZENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXdzL2NyZWF0ZS1hZC9jcmVhdGUtYWQuY29tcG9uZW50XCJcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJjcmVhdGVBZFwiLCBjb21wb25lbnQ6IENyZWF0ZUFkQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICd2aWV3L2FkcycsIGNvbXBvbmVudDogVmlld0Fkc0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcInZpZXcvYWRzLzppZFwiLCBjb21wb25lbnQ6IFZpZXdBZEluZm9ybWF0aW9uQ29tcG9uZW50IH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19