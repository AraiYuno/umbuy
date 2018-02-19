"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var advertisement_service_1 = require("../services/advertisement.service");
var ViewAdsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ViewAdsComponent(_advertisementService) {
        this._advertisementService = _advertisementService;
    }
    ViewAdsComponent.prototype.ngOnInit = function () {
        this.extractData();
    };
    ViewAdsComponent.prototype.extractData = function () {
        var _this = this;
        this._advertisementService.getAllAdvertisements()
            .subscribe(function (result) {
            _this.advertisements = result;
        });
    };
    ViewAdsComponent = __decorate([
        core_1.Component({
            selector: "mobile-view-ads",
            moduleId: module.id,
            templateUrl: "./view-ads.component.html",
            providers: [advertisement_service_1.AdvertisementService]
        }),
        __metadata("design:paramtypes", [advertisement_service_1.AdvertisementService])
    ], ViewAdsComponent);
    return ViewAdsComponent;
}());
exports.ViewAdsComponent = ViewAdsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmlldy1hZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELDJFQUF5RTtBQVF6RTtJQUlJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsMEJBQW9CLHFCQUEyQztRQUEzQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCO0lBQUksQ0FBQztJQUVwRSxtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMscUJBQXFCLENBQUMsb0JBQW9CLEVBQUU7YUFDNUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNkLEtBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQWpCUSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsNENBQW9CLENBQUM7U0FDcEMsQ0FBQzt5Q0FPNkMsNENBQW9CO09BTnRELGdCQUFnQixDQWtCNUI7SUFBRCx1QkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQWR2ZXJ0aXNlbWVudCB9IGZyb20gJy4uL2FwaS9hZHZlcnRpc2VtZW50JztcbmltcG9ydCB7IEFkdmVydGlzZW1lbnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FkdmVydGlzZW1lbnQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJtb2JpbGUtdmlldy1hZHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdmlldy1hZHMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtBZHZlcnRpc2VtZW50U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVmlld0Fkc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYWR2ZXJ0aXNlbWVudHM6IEFkdmVydGlzZW1lbnRbXTtcbiAgICBtZXNzYWdlO1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWR2ZXJ0aXNlbWVudFNlcnZpY2U6IEFkdmVydGlzZW1lbnRTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuZXh0cmFjdERhdGEoKTtcbiAgICB9XG5cbiAgICBleHRyYWN0RGF0YSgpe1xuICAgICAgICB0aGlzLl9hZHZlcnRpc2VtZW50U2VydmljZS5nZXRBbGxBZHZlcnRpc2VtZW50cygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmVydGlzZW1lbnRzID0gcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==