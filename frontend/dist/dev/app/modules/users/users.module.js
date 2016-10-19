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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3VzZXJzL3VzZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ25ELHNCQUE0Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3RELHNCQUFnQyx1QkFBdUIsQ0FBQyxDQUFBO0FBVXhEO0lBQUE7SUFBMkIsQ0FBQztJQVA1QjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLHVCQUFlLENBQUM7WUFDMUIsWUFBWSxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUM5QixPQUFPLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLG1CQUFXLENBQUM7U0FDM0IsQ0FBQzs7bUJBQUE7SUFFeUIsa0JBQUM7QUFBRCxDQUEzQixBQUE0QixJQUFBO0FBQWYsbUJBQVcsY0FBSSxDQUFBIiwiZmlsZSI6ImFwcC9tb2R1bGVzL3VzZXJzL3VzZXJzLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFVzZXJzQ29tcG9uZW50IH0gZnJvbSAnLi91c2Vycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBEYXRhdGFibGVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0RhdGF0YWJsZU1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbVXNlcnNDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtVc2Vyc0NvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgVXNlcnNNb2R1bGUgeyB9XG4iXX0=
