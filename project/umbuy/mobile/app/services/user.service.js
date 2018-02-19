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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNEO0FBQ3RELDZDQUFpRDtBQUNqRCxtQ0FBaUM7QUFDakMsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUs5QjtJQUtJLHFCQUFtQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQy9CLEVBQUUsQ0FBQSxDQUFDLGdCQUFTLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLCtEQUErRCxDQUFDO1FBQ2hGLENBQUM7UUFDRCxJQUFJLENBQUEsQ0FBQztZQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsK0RBQStELENBQUM7UUFDaEYsQ0FBQztJQUNMLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUMsTUFBTSxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQWpCUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBTWdCLGlCQUFVO09BTDFCLFdBQVcsQ0FrQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVsYXknO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vYXBpL3VzZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2V7XHJcblxyXG4gICAgcHJpdmF0ZSB1cmw6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBob3N0OnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCl7XHJcbiAgICAgICAgaWYoaXNEZXZNb2RlKCkpe1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QgPSBcImh0dHA6Ly9lYzItMTgtMjE3LTg2LTE0OC51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjkwMDBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ob3N0ID0gXCJodHRwOi8vZWMyLTE4LTIxNy04Ni0xNDgudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo5MDAwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJCeUlkKHVzZXJJZCl7XHJcbiAgICAgICAgdGhpcy51cmwgPSB0aGlzLmhvc3QgKyBcIi91c2Vycy9cIit1c2VySWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VXNlcj4odGhpcy51cmwpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==