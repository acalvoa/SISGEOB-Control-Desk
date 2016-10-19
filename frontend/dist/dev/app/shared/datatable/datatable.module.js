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
var forms_1 = require('@angular/forms');
var datatable_component_1 = require('./datatable.component');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var index_1 = require('../../pipes/index');
var DatatableModule = (function () {
    function DatatableModule() {
    }
    DatatableModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, ng_bootstrap_1.NgbModule.forRoot()],
            declarations: [datatable_component_1.DatatableComponent, index_1.KeysPipe],
            exports: [common_1.CommonModule, forms_1.FormsModule, datatable_component_1.DatatableComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DatatableModule);
    return DatatableModule;
}());
exports.DatatableModule = DatatableModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZGF0YXRhYmxlL2RhdGF0YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3QyxvQ0FBbUMsdUJBQXVCLENBQUMsQ0FBQTtBQUMzRCw2QkFBMEIsNEJBQTRCLENBQUMsQ0FBQTtBQUN2RCxzQkFBeUIsbUJBQW1CLENBQUMsQ0FBQTtBQVU3QztJQUFBO0lBQ0EsQ0FBQztJQU5EO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksRUFBQyxtQkFBVyxFQUFFLHdCQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDeEQsWUFBWSxFQUFFLENBQUMsd0NBQWtCLEVBQUMsZ0JBQVEsQ0FBQztZQUMzQyxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLG1CQUFXLEVBQUMsd0NBQWtCLENBQUM7U0FDMUQsQ0FBQzs7dUJBQUE7SUFFRixzQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksdUJBQWUsa0JBQzNCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9kYXRhdGFibGUvZGF0YXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tICcuL2RhdGF0YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgS2V5c1BpcGUgfSBmcm9tICcuLi8uLi9waXBlcy9pbmRleCc7XG4vKipcbiogRG8gbm90IHNwZWNpZnkgcHJvdmlkZXJzIGZvciBtb2R1bGVzIHRoYXQgbWlnaHQgYmUgaW1wb3J0ZWQgYnkgYSBsYXp5IGxvYWRlZCBtb2R1bGUuXG4qL1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsRm9ybXNNb2R1bGUsIE5nYk1vZHVsZS5mb3JSb290KCldLFxuICAgIGRlY2xhcmF0aW9uczogW0RhdGF0YWJsZUNvbXBvbmVudCxLZXlzUGlwZV0sXG4gICAgZXhwb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsRGF0YXRhYmxlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhdGFibGVNb2R1bGUge1xufVxuIl19
