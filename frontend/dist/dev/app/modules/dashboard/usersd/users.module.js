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
var users_component_1 = require('./users.component');
var index_1 = require('../../../services/index');
var index_2 = require('../../../shared/index');
var UsersModule = (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        core_1.NgModule({
            imports: [index_2.DatatableModule],
            declarations: [users_component_1.UsersComponent],
            exports: [users_component_1.UsersComponent],
            providers: [index_1.UserService]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Rhc2hib2FyZC91c2Vyc2QvdXNlcnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFDbkQsc0JBQTRCLHlCQUF5QixDQUFDLENBQUE7QUFDdEQsc0JBQWdDLHVCQUF1QixDQUFDLENBQUE7QUFVeEQ7SUFBQTtJQUEyQixDQUFDO0lBUDVCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsdUJBQWUsQ0FBQztZQUMxQixZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDekIsU0FBUyxFQUFFLENBQUMsbUJBQVcsQ0FBQztTQUMzQixDQUFDOzttQkFBQTtJQUV5QixrQkFBQztBQUFELENBQTNCLEFBQTRCLElBQUE7QUFBZixtQkFBVyxjQUFJLENBQUEiLCJmaWxlIjoiYXBwL21vZHVsZXMvZGFzaGJvYXJkL3VzZXJzZC91c2Vycy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBVc2Vyc0NvbXBvbmVudCB9IGZyb20gJy4vdXNlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgRGF0YXRhYmxlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtEYXRhdGFibGVNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1VzZXJzQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbVXNlcnNDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIFVzZXJzTW9kdWxlIHsgfVxuIl19
