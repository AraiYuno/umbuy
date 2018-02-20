"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        if (core_1.isDevMode()) {
            this.host = "http://ec2-18-217-86-148.us-east-2.compute.amazonaws.com:9000";
        }
        else {
            this.host = "http://ec2-18-217-86-148.us-east-2.compute.amazonaws.com:9000";
        }
    }
    UserService.prototype.getUserById = function (userId) {
        this.url = this.host + "/users/" + userId;
        return this.http.get(this.url);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNEO0FBQ3RELDZDQUFpRDtBQUNqRCxtQ0FBaUM7QUFDakMsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUs5QjtJQUtJLHFCQUFtQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQy9CLEVBQUUsQ0FBQSxDQUFDLGdCQUFTLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLCtEQUErRCxDQUFDO1FBQ2hGLENBQUM7UUFDRCxJQUFJLENBQUEsQ0FBQztZQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsK0RBQStELENBQUM7UUFDaEYsQ0FBQztJQUNMLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUMsTUFBTSxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQWpCUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBTWdCLGlCQUFVO09BTDFCLFdBQVcsQ0FrQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vYXBpL3VzZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2V7XG5cbiAgICBwcml2YXRlIHVybDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBob3N0OnN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50KXtcbiAgICAgICAgaWYoaXNEZXZNb2RlKCkpe1xuICAgICAgICAgICAgdGhpcy5ob3N0ID0gXCJodHRwOi8vZWMyLTE4LTIxNy04Ni0xNDgudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo5MDAwXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuaG9zdCA9IFwiaHR0cDovL2VjMi0xOC0yMTctODYtMTQ4LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206OTAwMFwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VXNlckJ5SWQodXNlcklkKXtcbiAgICAgICAgdGhpcy51cmwgPSB0aGlzLmhvc3QgKyBcIi91c2Vycy9cIit1c2VySWQ7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFVzZXI+KHRoaXMudXJsKTtcbiAgICB9XG59XG4iXX0=