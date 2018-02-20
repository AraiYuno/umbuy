"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var advertisement_service_1 = require("../services/advertisement.service");
var CreateAdComponent = /** @class */ (function () {
    function CreateAdComponent(_advertisementService, _router) {
        this._advertisementService = _advertisementService;
        this._router = _router;
    }
    CreateAdComponent.prototype.ngOnInit = function () {};
    CreateAdComponent = __decorate([
        core_1.Component({
            selector: "mobile-createAd",
            moduleId: module.id,
            templateUrl: "./create-ad.component.html",
            styleUrls: ['./create-ad.component.css'],
            providers: [advertisement_service_1.AdvertisementService, router_1.Router]
        }),
        __metadata("design:paramtypes", [advertisement_service_1.AdvertisementService, router_1.Router])
    ], CreateAdComponent);
    return CreateAdComponent;
}());
exports.CreateAdComponent = CreateAdComponent;