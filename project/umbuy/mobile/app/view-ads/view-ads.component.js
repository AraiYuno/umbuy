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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmlldy1hZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELDJFQUF5RTtBQVF6RTtJQUlJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsMEJBQW9CLHFCQUEyQztRQUEzQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCO0lBQUksQ0FBQztJQUVwRSx3RkFBd0Y7SUFDeEYsMkVBQTJFO0lBQzNFLG1DQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxvQkFBb0IsRUFBRTthQUM1QyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2QsS0FBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBZlEsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDRDQUFvQixDQUFDO1NBQ3BDLENBQUM7eUNBTzZDLDRDQUFvQjtPQU50RCxnQkFBZ0IsQ0FnQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEFkdmVydGlzZW1lbnQgfSBmcm9tICcuLi9hcGkvYWR2ZXJ0aXNlbWVudCc7XG5pbXBvcnQgeyBBZHZlcnRpc2VtZW50U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hZHZlcnRpc2VtZW50LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibW9iaWxlLXZpZXctYWRzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3ZpZXctYWRzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgcHJvdmlkZXJzOiBbQWR2ZXJ0aXNlbWVudFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdBZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGFkdmVydGlzZW1lbnRzOiBBZHZlcnRpc2VtZW50W107XG4gICAgbWVzc2FnZTtcblxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FkdmVydGlzZW1lbnRTZXJ2aWNlOiBBZHZlcnRpc2VtZW50U2VydmljZSkgeyB9XG5cbiAgICAvLyBUT0RPOiBPbmNlIGFkdmVydGlzZW1lbnRzIGlzIGRlZmluZWQsIGV2ZXJ5IHRpbWUgd2UgZ28gYmFjayB0byB0aGUgL3ZpZXcvYWRzIHJvdXRpbmcsXG4gICAgLy8gaXQgc2F5cyB0aGF0IGFkdmVydGlzZW1lbnRzIGlzIHVuZGVmaW5lZCwgYnV0IHdlIGNhbiBhY2Nlc3MgdGhlIGRhdGEgKD8pXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5fYWR2ZXJ0aXNlbWVudFNlcnZpY2UuZ2V0QWxsQWR2ZXJ0aXNlbWVudHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZHZlcnRpc2VtZW50cyA9IHJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn0iXX0=