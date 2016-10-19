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
var router_1 = require('@angular/router');
var index_1 = require('../../services/index');
var NavbarComponent = (function () {
    function NavbarComponent(user, router) {
        this.toggleSidebar = new core_1.EventEmitter();
        this.router = router;
        this.user_service = user;
        this.user = this.user_service.getUser();
    }
    NavbarComponent.prototype.sidebar = function (evt) {
        this.toggleSidebar.next(evt);
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.user_service.logout()
            .subscribe(function (data) {
            _this.router.navigateByUrl('/login');
        }, function (err) { return console.error(err); });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NavbarComponent.prototype, "toggleSidebar", void 0);
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nav-bar',
            templateUrl: 'navbar.component.html',
            styleUrls: ['navbar.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.UserService, router_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbGlicm9kZW9icmEgKGNvcGlhKS9uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0MsZUFBZSxDQUFDLENBQUE7QUFDL0QsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsc0JBQTRCLHNCQUFzQixDQUFDLENBQUE7QUFRbkQ7SUFNQyx5QkFBWSxJQUFnQixFQUFFLE1BQWE7UUFKM0Msa0JBQWEsR0FBcUIsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFLcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsR0FBTztRQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQUEsaUJBU0M7UUFSQSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTthQUN6QixTQUFTLENBQ04sVUFBQSxJQUFJO1lBRUgsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FDNUIsQ0FBQztJQUNILENBQUM7SUF4QkQ7UUFBQyxhQUFNLEVBQUU7OzBEQUFBO0lBUFY7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzs7dUJBQUE7SUEyQkYsc0JBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLHVCQUFlLGtCQTBCM0IsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2xpYnJvZGVvYnJhIChjb3BpYSkvbmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbmF2LWJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICduYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWyduYXZiYXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCB7XG5cdEBPdXRwdXQoKVxuXHR0b2dnbGVTaWRlYmFyOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwcml2YXRlIHVzZXI6YW55O1xuXHRwcml2YXRlIHVzZXJfc2VydmljZTpVc2VyU2VydmljZTtcblx0cHJpdmF0ZSByb3V0ZXI6Um91dGVyO1xuXHRjb25zdHJ1Y3Rvcih1c2VyOlVzZXJTZXJ2aWNlLCByb3V0ZXI6Um91dGVyKSB7XG5cdFx0dGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG5cdFx0dGhpcy51c2VyX3NlcnZpY2UgPSB1c2VyO1xuXHRcdHRoaXMudXNlciA9IHRoaXMudXNlcl9zZXJ2aWNlLmdldFVzZXIoKTtcblx0fVxuXHQvL0ZVTkNJT04gUEFSQSBFU0NPTkRFUiBFTCBTSURFQkFSXG5cdHNpZGViYXIoZXZ0OmFueSkge1xuXHRcdHRoaXMudG9nZ2xlU2lkZWJhci5uZXh0KGV2dCk7XG5cdH1cblx0Ly9GVU5DSU9OIFBBUkEgUFJPVk9DQVIgRUwgTE9HT1VUXG5cdGxvZ291dCgpIHtcblx0XHR0aGlzLnVzZXJfc2VydmljZS5sb2dvdXQoKVxuXHRcdC5zdWJzY3JpYmUoXG5cdFx0ICAgIGRhdGEgPT4ge1xuXHRcdCAgICBcdC8vc2UgcHVlZGUgZWZlY3R1YXIgZXJyb3IgaGFuZGxlclxuXHRcdCAgICBcdHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9sb2dpbicpO1xuXHRcdCAgICB9LFxuXHRcdCAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpXG5cdFx0KTtcblx0fVxufVxuIl19
