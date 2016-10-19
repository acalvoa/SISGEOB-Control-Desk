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
var index_1 = require('../../services/index');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(user, router) {
        this.user = user;
        this.router = router;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.user.login(this.email, this.password)
            .subscribe(function (data) {
            _this.router.navigateByUrl('/');
        }, function (err) { return console.error(err); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-cmp',
            templateUrl: 'login.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.UserService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ25ELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBV3pDO0lBTUMsd0JBQVksSUFBZ0IsRUFBRSxNQUFhO1FBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQUEsaUJBUUM7UUFQQSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDeEMsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNILEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQzVCLENBQUM7SUFDSCxDQUFDO0lBekJGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsc0JBQXNCO1NBQ25DLENBQUM7O3NCQUFBO0lBc0JGLHFCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSxzQkFBYyxpQkFvQjFCLENBQUEiLCJmaWxlIjoiYXBwL21vZHVsZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vKipcbipcdFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgTG9naW5Db21wb25lbnQuXG4qL1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdsb2dpbi1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ2xvZ2luLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcblx0cHJpdmF0ZSBlbWFpbDpzdHJpbmc7XG5cdHByaXZhdGUgcGFzc3dvcmQ6c3RyaW5nO1xuXHRwcml2YXRlIHVzZXI6VXNlclNlcnZpY2U7XG5cdHByaXZhdGUgcm91dGVyOlJvdXRlcjtcblxuXHRjb25zdHJ1Y3Rvcih1c2VyOlVzZXJTZXJ2aWNlLCByb3V0ZXI6Um91dGVyKSB7XG5cdFx0dGhpcy51c2VyID0gdXNlcjtcblx0XHR0aGlzLnJvdXRlciA9IHJvdXRlcjtcblx0fVxuXG5cdGxvZ2luKCkge1xuXHRcdHRoaXMudXNlci5sb2dpbih0aGlzLmVtYWlsLHRoaXMucGFzc3dvcmQpXG5cdFx0LnN1YnNjcmliZShcblx0XHQgICAgZGF0YSA9PiB7XG5cdFx0ICAgIFx0dGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpO1xuXHRcdCAgICB9LFxuXHRcdCAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpXG5cdFx0KTtcblx0fVxufVxuIl19
