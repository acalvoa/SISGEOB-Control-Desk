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
var index_1 = require('../../../shared/index');
var index_2 = require('../../../services/index');
var UsersModule = (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        core_1.NgModule({
            imports: [index_1.DatatableModule],
            declarations: [users_component_1.UsersComponent],
            exports: [users_component_1.UsersComponent],
            providers: [index_2.UserService]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Rhc2hib2FyZC91c2Vycy91c2Vycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUt6QyxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCxzQkFBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQUN4RCxzQkFBNEIseUJBQXlCLENBQUMsQ0FBQTtBQVN0RDtJQUFBO0lBQTJCLENBQUM7SUFQNUI7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyx1QkFBZSxDQUFDO1lBQzFCLFlBQVksRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDOUIsT0FBTyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUN6QixTQUFTLEVBQUUsQ0FBQyxtQkFBVyxDQUFDO1NBQzNCLENBQUM7O21CQUFBO0lBRXlCLGtCQUFDO0FBQUQsQ0FBM0IsQUFBNEIsSUFBQTtBQUFmLG1CQUFXLGNBQUksQ0FBQSIsImZpbGUiOiJhcHAvbW9kdWxlcy9kYXNoYm9hcmQvdXNlcnMvdXNlcnMubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuaW1wb3J0IHsgVXNlcnNDb21wb25lbnQgfSBmcm9tICcuL3VzZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhdGFibGVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0RhdGF0YWJsZU1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbVXNlcnNDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtVc2Vyc0NvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgVXNlcnNNb2R1bGUgeyB9XG4iXX0=
