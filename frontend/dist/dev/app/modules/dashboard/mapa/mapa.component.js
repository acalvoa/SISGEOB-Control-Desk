"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var index_1 = require('../../../services/index');
var index_2 = require('../../../services/index');
var router_1 = require('@angular/router');
var MapaComponent = (function () {
    function MapaComponent(rest, user, route, router) {
        this.route = route;
        this.router = router;
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.rest = rest;
    }
    MapaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['obra'];
            if (!isNaN(id)) {
                _this.rest.get('/obras?ID_OBRA=' + id).subscribe(function (data) {
                    data = data[0];
                    _this.lat = data.LAT;
                    _this.lng = data.LNG;
                }, function (err) { return console.error(err); });
            }
        });
    };
    MapaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mapa-cmp',
            templateUrl: 'mapa.component.html',
            styleUrls: ['mapa.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.RestService, index_2.UserService, router_1.ActivatedRoute, router_1.Router])
    ], MapaComponent);
    return MapaComponent;
}());
exports.MapaComponent = MapaComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Rhc2hib2FyZC9tYXBhL21hcGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFDakQsc0JBQTRCLHlCQUF5QixDQUFDLENBQUE7QUFDdEQsc0JBQTRCLHlCQUF5QixDQUFDLENBQUE7QUFDdEQsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFZakU7SUFJQyx1QkFBWSxJQUFnQixFQUFFLElBQWdCLEVBQVUsS0FBcUIsRUFDbEUsTUFBYztRQUQrQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNsRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSHZCLFFBQUcsR0FBVyxTQUFTLENBQUM7UUFDeEIsUUFBRyxHQUFXLFFBQVEsQ0FBQztRQUd4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUVsQixDQUFDO0lBQ0QsZ0NBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBYztZQUNyQyxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QixFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUM3QyxVQUFBLElBQUk7b0JBQ0gsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDZixLQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQ3BCLEtBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDckIsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FDNUIsQ0FBQztZQUNDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUE5QkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDcEMsQ0FBQzs7cUJBQUE7SUEyQkYsb0JBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLHFCQUFhLGdCQXlCekIsQ0FBQSIsImZpbGUiOiJhcHAvbW9kdWxlcy9kYXNoYm9hcmQvbWFwYS9tYXBhLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLyoqXG4qXHRUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIERhc2hib2FyZENvbXBvbmVudC5cbiovXG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ21hcGEtY21wJyxcblx0dGVtcGxhdGVVcmw6ICdtYXBhLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbWFwYS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBNYXBhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRwcml2YXRlIHJlc3Q6UmVzdFNlcnZpY2U7XG4gIFx0bGF0OiBudW1iZXIgPSA1MS42Nzg0MTg7XG4gIFx0bG5nOiBudW1iZXIgPSA3LjgwOTAwNztcblx0Y29uc3RydWN0b3IocmVzdDpSZXN0U2VydmljZSwgdXNlcjpVc2VyU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7XG5cdFx0dGhpcy5yZXN0ID0gcmVzdDtcblx0XHRcblx0fVxuXHRuZ09uSW5pdCgpIHtcblx0ICB0aGlzLnJvdXRlLnBhcmFtcy5mb3JFYWNoKChwYXJhbXM6IFBhcmFtcykgPT4ge1xuXHQgICAgIFx0bGV0IGlkID0gK3BhcmFtc1snb2JyYSddO1xuXHQgICAgIFx0aWYoIWlzTmFOKGlkKSl7XG5cdCAgICAgXHRcdHRoaXMucmVzdC5nZXQoJy9vYnJhcz9JRF9PQlJBPScraWQpLnN1YnNjcmliZShcblx0XHRcdFx0ICAgIGRhdGEgPT4ge1xuXHRcdFx0XHQgICAgXHRkYXRhID0gZGF0YVswXTtcblx0XHRcdFx0ICAgIFx0dGhpcy5sYXQgPSBkYXRhLkxBVDtcblx0XHRcdFx0ICAgIFx0dGhpcy5sbmcgPSBkYXRhLkxORztcblx0XHRcdFx0ICAgIH0sXG5cdFx0XHRcdCAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpXG5cdFx0XHRcdCk7XG5cdCAgICAgXHR9XHRcblx0ICAgfSk7XG5cdH1cblx0XG59XG4iXX0=
