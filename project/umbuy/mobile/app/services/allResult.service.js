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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsUmVzdWx0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGxSZXN1bHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyx3REFBdUQ7QUFHdkQ7SUFLRTtRQUhRLGNBQVMsR0FBc0MsSUFBSSxpQ0FBZSxDQUFrQixJQUFJLENBQUMsQ0FBQztRQUNsRyxtQkFBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFakMsQ0FBQztJQUVmLHdDQUFhLEdBQWIsVUFBYyxPQUF5QjtRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBVFUsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7O09BQ0EsZ0JBQWdCLENBWTVCO0lBQUQsdUJBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZHZlcnRpc2VtZW50IH0gZnJvbSAnLi4vYXBpL2FkdmVydGlzZW1lbnQnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWxsUmVzdWx0U2VydmljZSB7XG5cbiAgcHJpdmF0ZSBhbGxSZXN1bHQgOiBCZWhhdmlvclN1YmplY3Q8QWR2ZXJ0aXNlbWVudFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QWR2ZXJ0aXNlbWVudFtdPihudWxsKTtcbiAgY3VycmVudE1lc3NhZ2UgPSB0aGlzLmFsbFJlc3VsdC5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3Rvcigpe31cblxuICBjaGFuZ2VNZXNzYWdlKG1lc3NhZ2UgOiBBZHZlcnRpc2VtZW50W10pe1xuICAgIHRoaXMuYWxsUmVzdWx0Lm5leHQobWVzc2FnZSk7XG4gIH1cblxuXG59Il19