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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQyxlQUFlLENBQUMsQ0FBQTtBQUMvRCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6QyxzQkFBNEIsc0JBQXNCLENBQUMsQ0FBQTtBQVFuRDtJQU1DLHlCQUFZLElBQWdCLEVBQUUsTUFBYTtRQUozQyxrQkFBYSxHQUFxQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUtwRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxHQUFPO1FBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFBQSxpQkFTQztRQVJBLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO2FBQ3pCLFNBQVMsQ0FDTixVQUFBLElBQUk7WUFFSCxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUM1QixDQUFDO0lBQ0gsQ0FBQztJQXhCRDtRQUFDLGFBQU0sRUFBRTs7MERBQUE7SUFQVjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDOzt1QkFBQTtJQTJCRixzQkFBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksdUJBQWUsa0JBMEIzQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ25hdi1iYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbmF2YmFyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQge1xuXHRAT3V0cHV0KClcblx0dG9nZ2xlU2lkZWJhcjpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0cHJpdmF0ZSB1c2VyOmFueTtcblx0cHJpdmF0ZSB1c2VyX3NlcnZpY2U6VXNlclNlcnZpY2U7XG5cdHByaXZhdGUgcm91dGVyOlJvdXRlcjtcblx0Y29uc3RydWN0b3IodXNlcjpVc2VyU2VydmljZSwgcm91dGVyOlJvdXRlcikge1xuXHRcdHRoaXMucm91dGVyID0gcm91dGVyO1xuXHRcdHRoaXMudXNlcl9zZXJ2aWNlID0gdXNlcjtcblx0XHR0aGlzLnVzZXIgPSB0aGlzLnVzZXJfc2VydmljZS5nZXRVc2VyKCk7XG5cdH1cblx0Ly9GVU5DSU9OIFBBUkEgRVNDT05ERVIgRUwgU0lERUJBUlxuXHRzaWRlYmFyKGV2dDphbnkpIHtcblx0XHR0aGlzLnRvZ2dsZVNpZGViYXIubmV4dChldnQpO1xuXHR9XG5cdC8vRlVOQ0lPTiBQQVJBIFBST1ZPQ0FSIEVMIExPR09VVFxuXHRsb2dvdXQoKSB7XG5cdFx0dGhpcy51c2VyX3NlcnZpY2UubG9nb3V0KClcblx0XHQuc3Vic2NyaWJlKFxuXHRcdCAgICBkYXRhID0+IHtcblx0XHQgICAgXHQvL3NlIHB1ZWRlIGVmZWN0dWFyIGVycm9yIGhhbmRsZXJcblx0XHQgICAgXHR0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvbG9naW4nKTtcblx0XHQgICAgfSxcblx0XHQgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKVxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==
