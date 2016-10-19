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
var login_module_1 = require('./login/login.module');
var signup_module_1 = require('./signup/signup.module');
var dashboard_module_1 = require('./dashboard/dashboard.module');
var forms_1 = require('@angular/forms');
var ModulesModule = (function () {
    function ModulesModule() {
    }
    ModulesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, login_module_1.LoginModule, signup_module_1.SignupModule, dashboard_module_1.DashboardModule],
            declarations: [],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], ModulesModule);
    return ModulesModule;
}());
exports.ModulesModule = ModulesModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL21vZHVsZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsNkJBQTRCLHNCQUFzQixDQUFDLENBQUE7QUFDbkQsOEJBQTZCLHdCQUF3QixDQUFDLENBQUE7QUFDdEQsaUNBQWdDLDhCQUE4QixDQUFDLENBQUE7QUFDL0Qsc0JBQThCLGdCQUFnQixDQUFDLENBQUE7QUFRL0M7SUFBQTtJQUE2QixDQUFDO0lBTjlCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksRUFBQyxtQkFBVyxFQUFDLDBCQUFXLEVBQUMsNEJBQVksRUFBQyxrQ0FBZSxDQUFDO1lBQzVFLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxFQUFFO1NBQ2QsQ0FBQzs7cUJBQUE7SUFFMkIsb0JBQUM7QUFBRCxDQUE3QixBQUE4QixJQUFBO0FBQWpCLHFCQUFhLGdCQUFJLENBQUEiLCJmaWxlIjoiYXBwL21vZHVsZXMvbW9kdWxlcy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExvZ2luTW9kdWxlIH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5tb2R1bGUnO1xuaW1wb3J0IHsgU2lnbnVwTW9kdWxlIH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLm1vZHVsZSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRNb2R1bGUgfSBmcm9tICcuL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxGb3Jtc01vZHVsZSxMb2dpbk1vZHVsZSxTaWdudXBNb2R1bGUsRGFzaGJvYXJkTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgIGV4cG9ydHM6IFtdXG59KVxuXG5leHBvcnQgY2xhc3MgTW9kdWxlc01vZHVsZSB7IH1cbiJdfQ==
