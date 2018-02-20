"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var advertisement_service_1 = require("../../services/advertisement.service");
var ViewAdsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ViewAdsComponent(_advertisementService) {
        this._advertisementService = _advertisementService;
    }
    // TODO: Once advertisements is defined, every time we go back to the /view/ads routing,
    // it says that advertisements is undefined, but we can access the data (?)
    ViewAdsComponent.prototype.ngOnInit = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmlldy1hZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELDhFQUE0RTtBQVE1RTtJQUlJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsMEJBQW9CLHFCQUEyQztRQUEzQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCO0lBQUksQ0FBQztJQUVwRSx3RkFBd0Y7SUFDeEYsMkVBQTJFO0lBQzNFLG1DQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxvQkFBb0IsRUFBRTthQUM1QyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2QsS0FBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBZlEsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDRDQUFvQixDQUFDO1NBQ3BDLENBQUM7eUNBTzZDLDRDQUFvQjtPQU50RCxnQkFBZ0IsQ0FnQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBBZHZlcnRpc2VtZW50IH0gZnJvbSAnLi4vLi4vYXBpL2FkdmVydGlzZW1lbnQnO1xyXG5pbXBvcnQgeyBBZHZlcnRpc2VtZW50U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hZHZlcnRpc2VtZW50LnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibW9iaWxlLXZpZXctYWRzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi92aWV3LWFkcy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbQWR2ZXJ0aXNlbWVudFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaWV3QWRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGFkdmVydGlzZW1lbnRzOiBBZHZlcnRpc2VtZW50W107XHJcbiAgICBtZXNzYWdlO1xyXG5cclxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXHJcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hZHZlcnRpc2VtZW50U2VydmljZTogQWR2ZXJ0aXNlbWVudFNlcnZpY2UpIHsgfVxyXG5cclxuICAgIC8vIFRPRE86IE9uY2UgYWR2ZXJ0aXNlbWVudHMgaXMgZGVmaW5lZCwgZXZlcnkgdGltZSB3ZSBnbyBiYWNrIHRvIHRoZSAvdmlldy9hZHMgcm91dGluZyxcclxuICAgIC8vIGl0IHNheXMgdGhhdCBhZHZlcnRpc2VtZW50cyBpcyB1bmRlZmluZWQsIGJ1dCB3ZSBjYW4gYWNjZXNzIHRoZSBkYXRhICg/KVxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLl9hZHZlcnRpc2VtZW50U2VydmljZS5nZXRBbGxBZHZlcnRpc2VtZW50cygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZHZlcnRpc2VtZW50cyA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=