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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYW5vdGFjaW9uZXMvbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStDLGVBQWUsQ0FBQyxDQUFBO0FBQy9ELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHNCQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBUW5EO0lBTUMseUJBQVksSUFBZ0IsRUFBRSxNQUFhO1FBSjNDLGtCQUFhLEdBQXFCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBS3BELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLEdBQU87UUFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkEsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7YUFDekIsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUVILEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQzVCLENBQUM7SUFDSCxDQUFDO0lBeEJEO1FBQUMsYUFBTSxFQUFFOzswREFBQTtJQVBWO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7O3VCQUFBO0lBMkJGLHNCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSx1QkFBZSxrQkEwQjNCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9hbm90YWNpb25lcy9uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICduYXYtYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ25hdmJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ25hdmJhci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IHtcblx0QE91dHB1dCgpXG5cdHRvZ2dsZVNpZGViYXI6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHByaXZhdGUgdXNlcjphbnk7XG5cdHByaXZhdGUgdXNlcl9zZXJ2aWNlOlVzZXJTZXJ2aWNlO1xuXHRwcml2YXRlIHJvdXRlcjpSb3V0ZXI7XG5cdGNvbnN0cnVjdG9yKHVzZXI6VXNlclNlcnZpY2UsIHJvdXRlcjpSb3V0ZXIpIHtcblx0XHR0aGlzLnJvdXRlciA9IHJvdXRlcjtcblx0XHR0aGlzLnVzZXJfc2VydmljZSA9IHVzZXI7XG5cdFx0dGhpcy51c2VyID0gdGhpcy51c2VyX3NlcnZpY2UuZ2V0VXNlcigpO1xuXHR9XG5cdC8vRlVOQ0lPTiBQQVJBIEVTQ09OREVSIEVMIFNJREVCQVJcblx0c2lkZWJhcihldnQ6YW55KSB7XG5cdFx0dGhpcy50b2dnbGVTaWRlYmFyLm5leHQoZXZ0KTtcblx0fVxuXHQvL0ZVTkNJT04gUEFSQSBQUk9WT0NBUiBFTCBMT0dPVVRcblx0bG9nb3V0KCkge1xuXHRcdHRoaXMudXNlcl9zZXJ2aWNlLmxvZ291dCgpXG5cdFx0LnN1YnNjcmliZShcblx0XHQgICAgZGF0YSA9PiB7XG5cdFx0ICAgIFx0Ly9zZSBwdWVkZSBlZmVjdHVhciBlcnJvciBoYW5kbGVyXG5cdFx0ICAgIFx0dGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2xvZ2luJyk7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVycilcblx0XHQpO1xuXHR9XG59XG4iXX0=
