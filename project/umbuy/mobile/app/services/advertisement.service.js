"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var AdvertisementService = /** @class */ (function () {
    function AdvertisementService(http) {
        this.http = http;
        if (core_1.isDevMode()) {
            this.host = "http://ec2-18-217-86-148.us-east-2.compute.amazonaws.com:9000";
        }
        else {
            this.host = "http://ec2-18-217-86-148.us-east-2.compute.amazonaws.com:9000";
        }
    }
    AdvertisementService.prototype.createAd = function (advertisement) {
        this.url = this.host + "/createAd";
        return this.http.post(this.url, advertisement);
    };
    AdvertisementService.prototype.getAllAdvertisements = function () {
        this.url = this.host + "/ads";
        this.ads = this.http.get(this.url);
        return this.http.get(this.url);
    };
    AdvertisementService.prototype.getAdvertisementById = function (advertisementId) {
        this.url = this.host + "/ads/" + advertisementId;
        this.ad = this.http.get(this.url);
        return this.http.get(this.url);
    };
    AdvertisementService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AdvertisementService);
    return AdvertisementService;
}());
exports.AdvertisementService = AdvertisementService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZXJ0aXNlbWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWR2ZXJ0aXNlbWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNEO0FBQ3RELDZDQUFpRDtBQUdqRCxtQ0FBaUM7QUFDakMsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUc5QjtJQVFJLDhCQUFtQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQy9CLEVBQUUsQ0FBQSxDQUFDLGdCQUFTLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLCtEQUErRCxDQUFDO1FBQ2hGLENBQUM7UUFDRCxJQUFJLENBQUEsQ0FBQztZQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsK0RBQStELENBQUM7UUFDaEYsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBUSxHQUFSLFVBQVMsYUFBYTtRQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBZ0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsbURBQW9CLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELG1EQUFvQixHQUFwQixVQUFxQixlQUFlO1FBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLEdBQUcsZUFBZSxDQUFDO1FBQ2pELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWdCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWdCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBaENRLG9CQUFvQjtRQURoQyxpQkFBVSxFQUFFO3lDQVNnQixpQkFBVTtPQVIxQixvQkFBb0IsQ0FpQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQWpDRCxJQWlDQztBQWpDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBBZHZlcnRpc2VtZW50IH0gZnJvbSAnLi4vYXBpL2FkdmVydGlzZW1lbnQnO1xyXG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlbGF5JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFkdmVydGlzZW1lbnRTZXJ2aWNle1xyXG4gICAgcHJpdmF0ZSB1cmw6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBob3N0OnN0cmluZztcclxuXHJcbiAgICAvLyBUZXN0aW5nIHB1cnBvc2VzXHJcbiAgICBhZHM7XHJcbiAgICBhZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCl7XHJcbiAgICAgICAgaWYoaXNEZXZNb2RlKCkpe1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QgPSBcImh0dHA6Ly9lYzItMTgtMjE3LTg2LTE0OC51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjkwMDBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ob3N0ID0gXCJodHRwOi8vZWMyLTE4LTIxNy04Ni0xNDgudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo5MDAwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFkKGFkdmVydGlzZW1lbnQpe1xyXG4gICAgICAgIHRoaXMudXJsID0gdGhpcy5ob3N0ICsgXCIvY3JlYXRlQWRcIjtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8QWR2ZXJ0aXNlbWVudD4odGhpcy51cmwsIGFkdmVydGlzZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbEFkdmVydGlzZW1lbnRzKCl7XHJcbiAgICAgICAgdGhpcy51cmwgPSB0aGlzLmhvc3QgKyBcIi9hZHNcIjtcclxuICAgICAgICB0aGlzLmFkcyA9IHRoaXMuaHR0cC5nZXQ8QWR2ZXJ0aXNlbWVudFtdPih0aGlzLnVybCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8QWR2ZXJ0aXNlbWVudFtdPih0aGlzLnVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWR2ZXJ0aXNlbWVudEJ5SWQoYWR2ZXJ0aXNlbWVudElkKXtcclxuICAgICAgICB0aGlzLnVybCA9IHRoaXMuaG9zdCArIFwiL2Fkcy9cIiArIGFkdmVydGlzZW1lbnRJZDtcclxuICAgICAgICB0aGlzLmFkID0gdGhpcy5odHRwLmdldDxBZHZlcnRpc2VtZW50Pih0aGlzLnVybCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8QWR2ZXJ0aXNlbWVudD4odGhpcy51cmwpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==