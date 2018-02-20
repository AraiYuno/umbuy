"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var filterResult_service_1 = require("../../services/filterResult.service");
var allResult_service_1 = require("../../services/allResult.service");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(_filterResultService, _allResultService) {
        this._filterResultService = _filterResultService;
        this._allResultService = _allResultService;
        this.searchPhrase = '';
        this.allAds = [];
        this.filteredAds = [];
    }
    SearchComponent.prototype.filter = function () {
        var _this = this;
        if (this.allAds !== null) {
            this.filteredAds = this.allAds;
            this.filteredAds = (this.searchPhrase) ?
                this.filteredAds.filter(function (p) { return p.title.toLowerCase().includes(_this.searchPhrase.toLowerCase()); }) :
                this.filteredAds;
            this.shareMessage();
        }
    };
    SearchComponent.prototype.onClear = function () {
        this.filteredAds = this.allAds;
        this.shareMessage();
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._filterResultService.currentMessage.subscribe(function (filteredAds) { return _this.filteredAds = filteredAds; });
        this._allResultService.currentMessage.subscribe(function (allAds) { return _this.allAds = allAds; });
    };
    SearchComponent.prototype.shareMessage = function () {
        this._filterResultService.changeMessage(this.filteredAds);
    };
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.scss']
        }),
        __metadata("design:paramtypes", [filterResult_service_1.FilterResultService, allResult_service_1.AllResultService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFJbEQsNEVBQTBFO0FBQzFFLHNFQUFvRTtBQVFwRTtJQUtFLHlCQUFvQixvQkFBMEMsRUFBVSxpQkFBb0M7UUFBeEYseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFKNUcsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIsV0FBTSxHQUFtQixFQUFFLENBQUM7UUFDNUIsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO0lBRWlGLENBQUM7SUFFbEgsZ0NBQU0sR0FBTjtRQUFBLGlCQVFDO1FBUEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFLLENBQUMsQ0FBQSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUEvRCxDQUErRCxDQUFDLENBQUMsQ0FBQztnQkFDL0YsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNqQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQztJQUNILENBQUM7SUFFRCxpQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBR0Qsa0NBQVEsR0FBUjtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQXBCLENBQW9CLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUE5QlUsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQzt5Q0FNMkMsMENBQW1CLEVBQThCLG9DQUFnQjtPQUxqRyxlQUFlLENBZ0MzQjtJQUFELHNCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWR2ZXJ0aXNlbWVudCB9IGZyb20gJy4uLy4uL2FwaS9hZHZlcnRpc2VtZW50JztcbmltcG9ydCB7IEFkdmVydGlzZW1lbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FkdmVydGlzZW1lbnQuc2VydmljZVwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuaW1wb3J0IHsgRmlsdGVyUmVzdWx0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZpbHRlclJlc3VsdC5zZXJ2aWNlJztcbmltcG9ydCB7IEFsbFJlc3VsdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbGxSZXN1bHQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1zZWFyY2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc2VhcmNoUGhyYXNlOnN0cmluZyA9ICcnO1xuICBhbGxBZHM6IEFkdmVydGlzZW1lbnRbXSA9W107XG4gIGZpbHRlcmVkQWRzOiBBZHZlcnRpc2VtZW50W109W107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmlsdGVyUmVzdWx0U2VydmljZSA6IEZpbHRlclJlc3VsdFNlcnZpY2UsIHByaXZhdGUgX2FsbFJlc3VsdFNlcnZpY2UgOiBBbGxSZXN1bHRTZXJ2aWNlKSB7ICB9XG5cbiAgZmlsdGVyKCl7XG4gICAgaWYodGhpcy5hbGxBZHMgIT09IG51bGwgKXtcbiAgICAgIHRoaXMuZmlsdGVyZWRBZHMgPSB0aGlzLmFsbEFkcztcbiAgICAgIHRoaXMuZmlsdGVyZWRBZHMgPSAodGhpcy5zZWFyY2hQaHJhc2UpID9cbiAgICAgIHRoaXMuZmlsdGVyZWRBZHMuZmlsdGVyKHAgPT4gcC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoUGhyYXNlLnRvTG93ZXJDYXNlKCkpKSA6XG4gICAgICB0aGlzLmZpbHRlcmVkQWRzO1xuICAgICAgdGhpcy5zaGFyZU1lc3NhZ2UoKTtcbiAgICB9XG4gIH1cblxuICBvbkNsZWFyKCl7XG4gICAgdGhpcy5maWx0ZXJlZEFkcyA9IHRoaXMuYWxsQWRzO1xuICAgIHRoaXMuc2hhcmVNZXNzYWdlKCk7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2ZpbHRlclJlc3VsdFNlcnZpY2UuY3VycmVudE1lc3NhZ2Uuc3Vic2NyaWJlKGZpbHRlcmVkQWRzID0+IHRoaXMuZmlsdGVyZWRBZHMgPSBmaWx0ZXJlZEFkcyk7XG4gICAgdGhpcy5fYWxsUmVzdWx0U2VydmljZS5jdXJyZW50TWVzc2FnZS5zdWJzY3JpYmUoYWxsQWRzID0+IHRoaXMuYWxsQWRzID0gYWxsQWRzKTtcbiAgfVxuXG4gIHNoYXJlTWVzc2FnZSgpe1xuICAgIHRoaXMuX2ZpbHRlclJlc3VsdFNlcnZpY2UuY2hhbmdlTWVzc2FnZSh0aGlzLmZpbHRlcmVkQWRzKTtcbiAgfVxuXG59XG4iXX0=