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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var index_1 = require('../../services/index');
var forms_1 = require('@angular/forms');
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule],
            declarations: [login_component_1.LoginComponent],
            providers: [index_1.UserService],
            exports: [login_component_1.LoginComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2xvZ2luL2xvZ2luLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ25ELHNCQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ25ELHNCQUE4QixnQkFBZ0IsQ0FBQyxDQUFBO0FBUy9DO0lBQUE7SUFBMkIsQ0FBQztJQVA1QjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUscUJBQVksRUFBRSxtQkFBVyxDQUFDO1lBQ2xELFlBQVksRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDOUIsU0FBUyxFQUFFLENBQUMsbUJBQVcsQ0FBQztZQUN4QixPQUFPLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQzVCLENBQUM7O21CQUFBO0lBRXlCLGtCQUFDO0FBQUQsQ0FBM0IsQUFBNEIsSUFBQTtBQUFmLG1CQUFXLGNBQUksQ0FBQSIsImZpbGUiOiJhcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIEZvcm1zTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtMb2dpbkNvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICAgIGV4cG9ydHM6IFtMb2dpbkNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbk1vZHVsZSB7IH1cbiJdfQ==
