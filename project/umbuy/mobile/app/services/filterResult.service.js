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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyUmVzdWx0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWx0ZXJSZXN1bHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyx3REFBdUQ7QUFHdkQ7SUFLRTtRQUhRLGlCQUFZLEdBQXNDLElBQUksaUNBQWUsQ0FBa0IsSUFBSSxDQUFDLENBQUM7UUFDckcsbUJBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXBDLENBQUM7SUFFZiwyQ0FBYSxHQUFiLFVBQWMsT0FBeUI7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQVRVLG1CQUFtQjtRQUQvQixpQkFBVSxFQUFFOztPQUNBLG1CQUFtQixDQVkvQjtJQUFELDBCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWR2ZXJ0aXNlbWVudCB9IGZyb20gJy4uL2FwaS9hZHZlcnRpc2VtZW50JztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbHRlclJlc3VsdFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgc2VhcmNoUmVzdWx0IDogQmVoYXZpb3JTdWJqZWN0PEFkdmVydGlzZW1lbnRbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFkdmVydGlzZW1lbnRbXT4obnVsbCk7XG4gIGN1cnJlbnRNZXNzYWdlID0gdGhpcy5zZWFyY2hSZXN1bHQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoKXt9XG5cbiAgY2hhbmdlTWVzc2FnZShtZXNzYWdlIDogQWR2ZXJ0aXNlbWVudFtdKXtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdC5uZXh0KG1lc3NhZ2UpO1xuICB9XG5cblxufVxuIl19