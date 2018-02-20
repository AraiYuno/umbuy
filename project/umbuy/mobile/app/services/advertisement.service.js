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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZXJ0aXNlbWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWR2ZXJ0aXNlbWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNEO0FBQ3RELDZDQUFpRDtBQUdqRCxtQ0FBaUM7QUFDakMsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUc5QjtJQVFJLDhCQUFtQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQy9CLEVBQUUsQ0FBQSxDQUFDLGdCQUFTLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLCtEQUErRCxDQUFDO1FBQ2hGLENBQUM7UUFDRCxJQUFJLENBQUEsQ0FBQztZQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsK0RBQStELENBQUM7UUFDaEYsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBUSxHQUFSLFVBQVMsYUFBYTtRQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBZ0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsbURBQW9CLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFrQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELG1EQUFvQixHQUFwQixVQUFxQixlQUFlO1FBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLEdBQUcsZUFBZSxDQUFDO1FBQ2pELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWdCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWdCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBaENRLG9CQUFvQjtRQURoQyxpQkFBVSxFQUFFO3lDQVNnQixpQkFBVTtPQVIxQixvQkFBb0IsQ0FpQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQWpDRCxJQWlDQztBQWpDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFkdmVydGlzZW1lbnQgfSBmcm9tICcuLi9hcGkvYWR2ZXJ0aXNlbWVudCc7XG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkdmVydGlzZW1lbnRTZXJ2aWNle1xuICAgIHByaXZhdGUgdXJsOnN0cmluZztcbiAgICBwcml2YXRlIGhvc3Q6c3RyaW5nO1xuXG4gICAgLy8gVGVzdGluZyBwdXJwb3Nlc1xuICAgIGFkcztcbiAgICBhZDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50KXtcbiAgICAgICAgaWYoaXNEZXZNb2RlKCkpe1xuICAgICAgICAgICAgdGhpcy5ob3N0ID0gXCJodHRwOi8vZWMyLTE4LTIxNy04Ni0xNDgudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo5MDAwXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuaG9zdCA9IFwiaHR0cDovL2VjMi0xOC0yMTctODYtMTQ4LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206OTAwMFwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlQWQoYWR2ZXJ0aXNlbWVudCl7XG4gICAgICAgIHRoaXMudXJsID0gdGhpcy5ob3N0ICsgXCIvY3JlYXRlQWRcIjtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PEFkdmVydGlzZW1lbnQ+KHRoaXMudXJsLCBhZHZlcnRpc2VtZW50KTtcbiAgICB9XG5cbiAgICBnZXRBbGxBZHZlcnRpc2VtZW50cygpe1xuICAgICAgICB0aGlzLnVybCA9IHRoaXMuaG9zdCArIFwiL2Fkc1wiO1xuICAgICAgICB0aGlzLmFkcyA9IHRoaXMuaHR0cC5nZXQ8QWR2ZXJ0aXNlbWVudFtdPih0aGlzLnVybCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEFkdmVydGlzZW1lbnRbXT4odGhpcy51cmwpO1xuICAgIH1cblxuICAgIGdldEFkdmVydGlzZW1lbnRCeUlkKGFkdmVydGlzZW1lbnRJZCl7XG4gICAgICAgIHRoaXMudXJsID0gdGhpcy5ob3N0ICsgXCIvYWRzL1wiICsgYWR2ZXJ0aXNlbWVudElkO1xuICAgICAgICB0aGlzLmFkID0gdGhpcy5odHRwLmdldDxBZHZlcnRpc2VtZW50Pih0aGlzLnVybCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEFkdmVydGlzZW1lbnQ+KHRoaXMudXJsKTtcbiAgICB9XG59XG4iXX0=