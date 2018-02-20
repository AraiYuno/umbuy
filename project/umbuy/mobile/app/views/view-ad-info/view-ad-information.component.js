"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../../services/user.service");
var advertisement_service_1 = require("../../services/advertisement.service");
var ViewAdInformationComponent = /** @class */ (function () {
    function ViewAdInformationComponent(_advertisementService, _userService, route) {
        this._advertisementService = _advertisementService;
        this._userService = _userService;
        this.route = route;
    }
    ViewAdInformationComponent.prototype.convertDatesToText = function (advertisement) {
        this.created_on = this.convertToTextDate(advertisement.created_on);
        this.last_updated = this.convertToTextDate(advertisement.last_updated);
        if (advertisement.deleted_on != null) {
            this.deleted_on = this.convertToTextDate(advertisement.deleted_on);
            this.isDeleted = true;
        }
        else {
            this.isDeleted = false;
        }
    };
    /* Takes in a string date (string_date) in formate YYYY-MM-DD and convert to MM DD, YYYY such as May 1, 2018 */
    ViewAdInformationComponent.prototype.convertToTextDate = function (string_date) {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August",
            "September", "October", "November", "December"];
        var stringDate;
        var day;
        var month;
        var year;
        var date = new Date(string_date);
        day = date.getUTCDate();
        month = date.getUTCMonth();
        year = date.getUTCFullYear();
        month = months[month];
        stringDate = month + " " + day + ", " + year;
        return stringDate;
    };
    ViewAdInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params["id"];
        this._advertisementService.getAdvertisementById(id)
            .subscribe(function (res) { return _this.advertisement = res[0]; }, function (err) { return _this.message = err; }, function () { return _this._userService.getUserById(_this.advertisement.userId)
            .subscribe(function (res) { return _this.user = res[0]; }, function (err) { return console.error(err.status); }, function () { return _this.convertDatesToText(_this.advertisement); }); }); /* After data is back for advertisement, execute getUserById*/
    };
    ViewAdInformationComponent = __decorate([
        core_1.Component({
            selector: "mobile-view-ad-information",
            moduleId: module.id,
            templateUrl: "./view-ad-information.component.html",
            providers: [user_service_1.UserService, advertisement_service_1.AdvertisementService]
        }),
        __metadata("design:paramtypes", [advertisement_service_1.AdvertisementService,
            user_service_1.UserService,
            router_1.ActivatedRoute])
    ], ViewAdInformationComponent);
    return ViewAdInformationComponent;
}());
exports.ViewAdInformationComponent = ViewAdInformationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hZC1pbmZvcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LWFkLWluZm9ybWF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFJakQsNERBQTBEO0FBQzFELDhFQUE0RTtBQVE1RTtJQWVJLG9DQUNZLHFCQUEyQyxFQUMzQyxZQUF5QixFQUN6QixLQUFxQjtRQUZyQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCO1FBQzNDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQzdCLENBQUM7SUFFTCx1REFBa0IsR0FBbEIsVUFBbUIsYUFBYTtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXZFLEVBQUUsQ0FBQSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQztJQUVILENBQUM7SUFFRCwrR0FBK0c7SUFDL0csc0RBQWlCLEdBQWpCLFVBQWtCLFdBQVc7UUFDM0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUTtZQUN4RSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM5RCxJQUFJLFVBQVUsQ0FBQztRQUNmLElBQUksR0FBRyxDQUFDO1FBQ1IsSUFBSSxLQUFLLENBQUM7UUFDVixJQUFJLElBQUksQ0FBQztRQUVULElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDeEIsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQixJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTdCLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsVUFBVSxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7UUFFN0MsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUMsNkNBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkcsSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQzthQUNwRCxTQUFTLENBQ1IsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBM0IsQ0FBMkIsRUFDbEMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBbEIsQ0FBa0IsRUFDekIsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2FBQ3JELFNBQVMsQ0FDUixVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFsQixDQUFrQixFQUN6QixVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUF6QixDQUF5QixFQUNoQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBM0MsQ0FBMkMsQ0FDbEQsRUFMSCxDQUtHLENBQ1YsQ0FBQSxDQUFDLDhEQUE4RDtJQUNsRSxDQUFDO0lBcEVRLDBCQUEwQjtRQU50QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNDQUFzQztZQUNuRCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLDRDQUFvQixDQUFDO1NBQ2pELENBQUM7eUNBaUJxQyw0Q0FBb0I7WUFDN0IsMEJBQVc7WUFDbEIsdUJBQWM7T0FsQnhCLDBCQUEwQixDQXFFdEM7SUFBRCxpQ0FBQztDQUFBLEFBckVELElBcUVDO0FBckVZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBBZHZlcnRpc2VtZW50IH0gZnJvbSAnLi4vLi4vYXBpL2FkdmVydGlzZW1lbnQnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vYXBpL3VzZXInO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWR2ZXJ0aXNlbWVudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYWR2ZXJ0aXNlbWVudC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm1vYmlsZS12aWV3LWFkLWluZm9ybWF0aW9uXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi92aWV3LWFkLWluZm9ybWF0aW9uLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZSwgQWR2ZXJ0aXNlbWVudFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaWV3QWRJbmZvcm1hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgYWR2ZXJ0aXNlbWVudDogQWR2ZXJ0aXNlbWVudDtcclxuXHJcbiAgICB1c2VyOiBVc2VyO1xyXG4gICAgcGF0aE5hbWVVcmw6IHN0cmluZztcclxuICAgIGN1cnJlbnRBZHZlcnRpc2VtZW50SWQ6IG51bWJlcjtcclxuICAgIGNyZWF0ZWRfb246IHN0cmluZztcclxuICAgIGxhc3RfdXBkYXRlZDogc3RyaW5nO1xyXG4gICAgZGVsZXRlZF9vbjogc3RyaW5nO1xyXG4gICAgaXNEZWxldGVkOiBib29sZWFuO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfYWR2ZXJ0aXNlbWVudFNlcnZpY2U6IEFkdmVydGlzZW1lbnRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBjb252ZXJ0RGF0ZXNUb1RleHQoYWR2ZXJ0aXNlbWVudCl7XHJcbiAgICB0aGlzLmNyZWF0ZWRfb24gPSB0aGlzLmNvbnZlcnRUb1RleHREYXRlKGFkdmVydGlzZW1lbnQuY3JlYXRlZF9vbik7XHJcbiAgICB0aGlzLmxhc3RfdXBkYXRlZCA9IHRoaXMuY29udmVydFRvVGV4dERhdGUoYWR2ZXJ0aXNlbWVudC5sYXN0X3VwZGF0ZWQpO1xyXG5cclxuICAgIGlmKGFkdmVydGlzZW1lbnQuZGVsZXRlZF9vbiAhPSBudWxsKXtcclxuICAgICAgdGhpcy5kZWxldGVkX29uID0gdGhpcy5jb252ZXJ0VG9UZXh0RGF0ZShhZHZlcnRpc2VtZW50LmRlbGV0ZWRfb24pO1xyXG4gICAgICB0aGlzLmlzRGVsZXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICB0aGlzLmlzRGVsZXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8qIFRha2VzIGluIGEgc3RyaW5nIGRhdGUgKHN0cmluZ19kYXRlKSBpbiBmb3JtYXRlIFlZWVktTU0tREQgYW5kIGNvbnZlcnQgdG8gTU0gREQsIFlZWVkgc3VjaCBhcyBNYXkgMSwgMjAxOCAqL1xyXG4gIGNvbnZlcnRUb1RleHREYXRlKHN0cmluZ19kYXRlKXtcclxuICAgIHZhciBtb250aHMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIixcclxuICAgICAgICAgICAgICAgICAgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXTtcclxuICAgIHZhciBzdHJpbmdEYXRlO1xyXG4gICAgdmFyIGRheTtcclxuICAgIHZhciBtb250aDtcclxuICAgIHZhciB5ZWFyO1xyXG5cclxuICAgIHZhciBkYXRlID0gbmV3IERhdGUoc3RyaW5nX2RhdGUpO1xyXG4gICAgZGF5ID0gZGF0ZS5nZXRVVENEYXRlKCk7XHJcbiAgICBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcclxuICAgIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XHJcbiAgICBcclxuICAgIG1vbnRoID0gbW9udGhzW21vbnRoXTtcclxuICAgIHN0cmluZ0RhdGUgPSBtb250aCArIFwiIFwiICsgZGF5ICsgXCIsIFwiICsgeWVhcjtcclxuICAgIFxyXG4gICAgcmV0dXJuIHN0cmluZ0RhdGU7XHJcbiAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgdGhpcy5fYWR2ZXJ0aXNlbWVudFNlcnZpY2UuZ2V0QWR2ZXJ0aXNlbWVudEJ5SWQoaWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgcmVzID0+IHRoaXMuYWR2ZXJ0aXNlbWVudCA9IHJlc1swXSxcclxuICAgICAgICBlcnIgPT4gdGhpcy5tZXNzYWdlID0gZXJyLFxyXG4gICAgICAgICgpID0+IHRoaXMuX3VzZXJTZXJ2aWNlLmdldFVzZXJCeUlkKHRoaXMuYWR2ZXJ0aXNlbWVudC51c2VySWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICByZXMgPT4gdGhpcy51c2VyID0gcmVzWzBdLFxyXG4gICAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIuc3RhdHVzKSxcclxuICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5jb252ZXJ0RGF0ZXNUb1RleHQodGhpcy5hZHZlcnRpc2VtZW50KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICApIC8qIEFmdGVyIGRhdGEgaXMgYmFjayBmb3IgYWR2ZXJ0aXNlbWVudCwgZXhlY3V0ZSBnZXRVc2VyQnlJZCovICBcclxuICAgIH1cclxufVxyXG4iXX0=