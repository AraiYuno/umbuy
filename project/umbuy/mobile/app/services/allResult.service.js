"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var AllResultService = /** @class */ (function () {
    function AllResultService() {
        this.allResult = new BehaviorSubject_1.BehaviorSubject(null);
        this.currentMessage = this.allResult.asObservable();
    }
    AllResultService.prototype.changeMessage = function (message) {
        this.allResult.next(message);
    };
    AllResultService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AllResultService);
    return AllResultService;
}());
exports.AllResultService = AllResultService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsUmVzdWx0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGxSZXN1bHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyx3REFBdUQ7QUFHdkQ7SUFLRTtRQUhRLGNBQVMsR0FBc0MsSUFBSSxpQ0FBZSxDQUFrQixJQUFJLENBQUMsQ0FBQztRQUNsRyxtQkFBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFakMsQ0FBQztJQUVmLHdDQUFhLEdBQWIsVUFBYyxPQUF5QjtRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBVFUsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7O09BQ0EsZ0JBQWdCLENBWTVCO0lBQUQsdUJBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFkdmVydGlzZW1lbnQgfSBmcm9tICcuLi9hcGkvYWR2ZXJ0aXNlbWVudCc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFsbFJlc3VsdFNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIGFsbFJlc3VsdCA6IEJlaGF2aW9yU3ViamVjdDxBZHZlcnRpc2VtZW50W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBZHZlcnRpc2VtZW50W10+KG51bGwpO1xyXG4gIGN1cnJlbnRNZXNzYWdlID0gdGhpcy5hbGxSZXN1bHQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCl7fVxyXG5cclxuICBjaGFuZ2VNZXNzYWdlKG1lc3NhZ2UgOiBBZHZlcnRpc2VtZW50W10pe1xyXG4gICAgdGhpcy5hbGxSZXN1bHQubmV4dChtZXNzYWdlKTtcclxuICB9XHJcblxyXG5cclxufSJdfQ==