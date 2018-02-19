"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var FilterResultService = /** @class */ (function () {
    function FilterResultService() {
        this.searchResult = new BehaviorSubject_1.BehaviorSubject(null);
        this.currentMessage = this.searchResult.asObservable();
    }
    FilterResultService.prototype.changeMessage = function (message) {
        this.searchResult.next(message);
    };
    FilterResultService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FilterResultService);
    return FilterResultService;
}());
exports.FilterResultService = FilterResultService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyUmVzdWx0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWx0ZXJSZXN1bHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyx3REFBdUQ7QUFHdkQ7SUFLRTtRQUhRLGlCQUFZLEdBQXNDLElBQUksaUNBQWUsQ0FBa0IsSUFBSSxDQUFDLENBQUM7UUFDckcsbUJBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXBDLENBQUM7SUFFZiwyQ0FBYSxHQUFiLFVBQWMsT0FBeUI7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQVRVLG1CQUFtQjtRQUQvQixpQkFBVSxFQUFFOztPQUNBLG1CQUFtQixDQVkvQjtJQUFELDBCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBZHZlcnRpc2VtZW50IH0gZnJvbSAnLi4vYXBpL2FkdmVydGlzZW1lbnQnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJSZXN1bHRTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBzZWFyY2hSZXN1bHQgOiBCZWhhdmlvclN1YmplY3Q8QWR2ZXJ0aXNlbWVudFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QWR2ZXJ0aXNlbWVudFtdPihudWxsKTtcclxuICBjdXJyZW50TWVzc2FnZSA9IHRoaXMuc2VhcmNoUmVzdWx0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgY2hhbmdlTWVzc2FnZShtZXNzYWdlIDogQWR2ZXJ0aXNlbWVudFtdKXtcclxuICAgIHRoaXMuc2VhcmNoUmVzdWx0Lm5leHQobWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19