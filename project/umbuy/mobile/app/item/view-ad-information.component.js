"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../services/user.service");
var advertisement_service_1 = require("../services/advertisement.service");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hZC1pbmZvcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LWFkLWluZm9ybWF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFJakQseURBQXVEO0FBQ3ZELDJFQUF5RTtBQVF6RTtJQWVJLG9DQUNZLHFCQUEyQyxFQUMzQyxZQUF5QixFQUN6QixLQUFxQjtRQUZyQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCO1FBQzNDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQzdCLENBQUM7SUFFTCx1REFBa0IsR0FBbEIsVUFBbUIsYUFBYTtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXZFLEVBQUUsQ0FBQSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQztJQUVILENBQUM7SUFFRCwrR0FBK0c7SUFDL0csc0RBQWlCLEdBQWpCLFVBQWtCLFdBQVc7UUFDM0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUTtZQUN4RSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM5RCxJQUFJLFVBQVUsQ0FBQztRQUNmLElBQUksR0FBRyxDQUFDO1FBQ1IsSUFBSSxLQUFLLENBQUM7UUFDVixJQUFJLElBQUksQ0FBQztRQUVULElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDeEIsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQixJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTdCLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsVUFBVSxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7UUFFN0MsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUMsNkNBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkcsSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQzthQUNwRCxTQUFTLENBQ1IsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBM0IsQ0FBMkIsRUFDbEMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBbEIsQ0FBa0IsRUFDekIsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2FBQ3JELFNBQVMsQ0FDUixVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFsQixDQUFrQixFQUN6QixVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUF6QixDQUF5QixFQUNoQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBM0MsQ0FBMkMsQ0FDbEQsRUFMSCxDQUtHLENBQ1YsQ0FBQSxDQUFDLDhEQUE4RDtJQUNsRSxDQUFDO0lBcEVRLDBCQUEwQjtRQU50QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNDQUFzQztZQUNuRCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLDRDQUFvQixDQUFDO1NBQ2pELENBQUM7eUNBaUJxQyw0Q0FBb0I7WUFDN0IsMEJBQVc7WUFDbEIsdUJBQWM7T0FsQnhCLDBCQUEwQixDQXFFdEM7SUFBRCxpQ0FBQztDQUFBLEFBckVELElBcUVDO0FBckVZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBBZHZlcnRpc2VtZW50IH0gZnJvbSAnLi4vYXBpL2FkdmVydGlzZW1lbnQnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2FwaS91c2VyJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgQWR2ZXJ0aXNlbWVudFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYWR2ZXJ0aXNlbWVudC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm1vYmlsZS12aWV3LWFkLWluZm9ybWF0aW9uXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3ZpZXctYWQtaW5mb3JtYXRpb24uY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZSwgQWR2ZXJ0aXNlbWVudFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdBZEluZm9ybWF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGFkdmVydGlzZW1lbnQ6IEFkdmVydGlzZW1lbnQ7XG5cbiAgICB1c2VyOiBVc2VyO1xuICAgIHBhdGhOYW1lVXJsOiBzdHJpbmc7XG4gICAgY3VycmVudEFkdmVydGlzZW1lbnRJZDogbnVtYmVyO1xuICAgIGNyZWF0ZWRfb246IHN0cmluZztcbiAgICBsYXN0X3VwZGF0ZWQ6IHN0cmluZztcbiAgICBkZWxldGVkX29uOiBzdHJpbmc7XG4gICAgaXNEZWxldGVkOiBib29sZWFuO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcblxuXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfYWR2ZXJ0aXNlbWVudFNlcnZpY2U6IEFkdmVydGlzZW1lbnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7IH1cblxuICAgIGNvbnZlcnREYXRlc1RvVGV4dChhZHZlcnRpc2VtZW50KXtcbiAgICB0aGlzLmNyZWF0ZWRfb24gPSB0aGlzLmNvbnZlcnRUb1RleHREYXRlKGFkdmVydGlzZW1lbnQuY3JlYXRlZF9vbik7XG4gICAgdGhpcy5sYXN0X3VwZGF0ZWQgPSB0aGlzLmNvbnZlcnRUb1RleHREYXRlKGFkdmVydGlzZW1lbnQubGFzdF91cGRhdGVkKTtcblxuICAgIGlmKGFkdmVydGlzZW1lbnQuZGVsZXRlZF9vbiAhPSBudWxsKXtcbiAgICAgIHRoaXMuZGVsZXRlZF9vbiA9IHRoaXMuY29udmVydFRvVGV4dERhdGUoYWR2ZXJ0aXNlbWVudC5kZWxldGVkX29uKTtcbiAgICAgIHRoaXMuaXNEZWxldGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHRoaXMuaXNEZWxldGVkID0gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICAvKiBUYWtlcyBpbiBhIHN0cmluZyBkYXRlIChzdHJpbmdfZGF0ZSkgaW4gZm9ybWF0ZSBZWVlZLU1NLUREIGFuZCBjb252ZXJ0IHRvIE1NIERELCBZWVlZIHN1Y2ggYXMgTWF5IDEsIDIwMTggKi9cbiAgY29udmVydFRvVGV4dERhdGUoc3RyaW5nX2RhdGUpe1xuICAgIHZhciBtb250aHMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIixcbiAgICAgICAgICAgICAgICAgIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XG4gICAgdmFyIHN0cmluZ0RhdGU7XG4gICAgdmFyIGRheTtcbiAgICB2YXIgbW9udGg7XG4gICAgdmFyIHllYXI7XG5cbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHN0cmluZ19kYXRlKTtcbiAgICBkYXkgPSBkYXRlLmdldFVUQ0RhdGUoKTtcbiAgICBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIFxuICAgIG1vbnRoID0gbW9udGhzW21vbnRoXTtcbiAgICBzdHJpbmdEYXRlID0gbW9udGggKyBcIiBcIiArIGRheSArIFwiLCBcIiArIHllYXI7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZ0RhdGU7XG4gIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICB0aGlzLl9hZHZlcnRpc2VtZW50U2VydmljZS5nZXRBZHZlcnRpc2VtZW50QnlJZChpZClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIHJlcyA9PiB0aGlzLmFkdmVydGlzZW1lbnQgPSByZXNbMF0sXG4gICAgICAgIGVyciA9PiB0aGlzLm1lc3NhZ2UgPSBlcnIsXG4gICAgICAgICgpID0+IHRoaXMuX3VzZXJTZXJ2aWNlLmdldFVzZXJCeUlkKHRoaXMuYWR2ZXJ0aXNlbWVudC51c2VySWQpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgIHJlcyA9PiB0aGlzLnVzZXIgPSByZXNbMF0sXG4gICAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIuc3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMuY29udmVydERhdGVzVG9UZXh0KHRoaXMuYWR2ZXJ0aXNlbWVudClcbiAgICAgICAgICAgICAgICApXG4gICAgICApIC8qIEFmdGVyIGRhdGEgaXMgYmFjayBmb3IgYWR2ZXJ0aXNlbWVudCwgZXhlY3V0ZSBnZXRVc2VyQnlJZCovICBcbiAgICB9XG59XG4iXX0=