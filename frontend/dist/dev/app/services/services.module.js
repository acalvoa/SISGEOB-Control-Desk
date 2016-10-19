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
var index_1 = require('./index');
var index_2 = require('./index');
var guard_service_1 = require('./user/guard.service');
var http_1 = require('@angular/http');
var ServicesModule = (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        core_1.NgModule({
            imports: [http_1.HttpModule],
            declarations: [],
            providers: [guard_service_1.GuardService, index_1.UserService, index_2.RestService],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], ServicesModule);
    return ServicesModule;
}());
exports.ServicesModule = ServicesModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxzQkFBNEIsU0FBUyxDQUFDLENBQUE7QUFDdEMsc0JBQTRCLFNBQVMsQ0FBQyxDQUFBO0FBQ3RDLDhCQUE2QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ3BELHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQVMzQztJQUFBO0lBQ0EsQ0FBQztJQVJEO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsaUJBQVUsQ0FBQztZQUNyQixZQUFZLEVBQUUsRUFBRTtZQUNoQixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxFQUFDLG1CQUFXLEVBQUMsbUJBQVcsQ0FBQztZQUNqRCxPQUFPLEVBQUMsRUFBRTtTQUNYLENBQUM7O3NCQUFBO0lBR0YscUJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLHNCQUFjLGlCQUMxQixDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBHdWFyZFNlcnZpY2UgfSBmcm9tICcuL3VzZXIvZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtIdHRwTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgcHJvdmlkZXJzOiBbR3VhcmRTZXJ2aWNlLFVzZXJTZXJ2aWNlLFJlc3RTZXJ2aWNlXSxcbiAgZXhwb3J0czpbXVxufSlcblxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzTW9kdWxlIHtcbn1cbiJdfQ==
