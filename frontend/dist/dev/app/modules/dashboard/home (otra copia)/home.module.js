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
var home_component_1 = require('./home.component');
var forms_1 = require('@angular/forms');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var index_1 = require('../../../pipes/index');
var index_2 = require('../../../shared/index');
var index_3 = require('../../../shared/index');
var index_4 = require('../../../shared/index');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, ng_bootstrap_1.NgbTooltipModule],
            declarations: [home_component_1.HomeComponent, index_1.clpPipe, index_2.LibrodeObraComponent, index_3.AnotacionesComponent, index_4.MensajesComponent],
            exports: [home_component_1.HomeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Rhc2hib2FyZC9ob21lIChvdHJhIGNvcGlhKS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBSS9DLCtCQUE2QixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2hELHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLDZCQUFpQyw0QkFBNEIsQ0FBQyxDQUFBO0FBQzlELHNCQUF3QixzQkFBc0IsQ0FBQyxDQUFBO0FBQy9DLHNCQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzNELHNCQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzNELHNCQUFnQyx1QkFBdUIsQ0FBQyxDQUFBO0FBUXhEO0lBQUE7SUFBMEIsQ0FBQztJQU4zQjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUMsbUJBQVcsRUFBQywrQkFBZ0IsQ0FBQztZQUNwRCxZQUFZLEVBQUUsQ0FBQyw4QkFBYSxFQUFDLGVBQU8sRUFBQyw0QkFBb0IsRUFBQyw0QkFBb0IsRUFBQyx5QkFBaUIsQ0FBQztZQUNqRyxPQUFPLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1NBQzNCLENBQUM7O2tCQUFBO0lBRXdCLGlCQUFDO0FBQUQsQ0FBMUIsQUFBMkIsSUFBQTtBQUFkLGtCQUFVLGFBQUksQ0FBQSIsImZpbGUiOiJhcHAvbW9kdWxlcy9kYXNoYm9hcmQvaG9tZSAob3RyYSBjb3BpYSkvaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBNb2RhbE1vZHVsZSB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH1mcm9tICcuL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdiVG9vbHRpcE1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IGNscFBpcGUgfSBmcm9tICcuLi8uLi8uLi9waXBlcy9pbmRleCc7XG5pbXBvcnQge0xpYnJvZGVPYnJhQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHtBbm90YWNpb25lc0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7TWVuc2FqZXNDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxGb3Jtc01vZHVsZSxOZ2JUb29sdGlwTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtIb21lQ29tcG9uZW50LGNscFBpcGUsTGlicm9kZU9icmFDb21wb25lbnQsQW5vdGFjaW9uZXNDb21wb25lbnQsTWVuc2FqZXNDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtIb21lQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XG4iXX0=
