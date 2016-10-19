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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Rhc2hib2FyZC9ob21lIChjb3BpYSkvaG9tZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUkvQywrQkFBNkIsa0JBQWtCLENBQUMsQ0FBQTtBQUNoRCxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3Qyw2QkFBaUMsNEJBQTRCLENBQUMsQ0FBQTtBQUM5RCxzQkFBd0Isc0JBQXNCLENBQUMsQ0FBQTtBQUMvQyxzQkFBbUMsdUJBQXVCLENBQUMsQ0FBQTtBQUMzRCxzQkFBbUMsdUJBQXVCLENBQUMsQ0FBQTtBQUMzRCxzQkFBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQVF4RDtJQUFBO0lBQTBCLENBQUM7SUFOM0I7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFDLG1CQUFXLEVBQUMsK0JBQWdCLENBQUM7WUFDcEQsWUFBWSxFQUFFLENBQUMsOEJBQWEsRUFBQyxlQUFPLEVBQUMsNEJBQW9CLEVBQUMsNEJBQW9CLEVBQUMseUJBQWlCLENBQUM7WUFDakcsT0FBTyxFQUFFLENBQUMsOEJBQWEsQ0FBQztTQUMzQixDQUFDOztrQkFBQTtJQUV3QixpQkFBQztBQUFELENBQTFCLEFBQTJCLElBQUE7QUFBZCxrQkFBVSxhQUFJLENBQUEiLCJmaWxlIjoiYXBwL21vZHVsZXMvZGFzaGJvYXJkL2hvbWUgKGNvcGlhKS9ob21lLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfWZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ2JUb29sdGlwTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgY2xwUGlwZSB9IGZyb20gJy4uLy4uLy4uL3BpcGVzL2luZGV4JztcbmltcG9ydCB7TGlicm9kZU9icmFDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQge0Fub3RhY2lvbmVzQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHtNZW5zYWplc0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLEZvcm1zTW9kdWxlLE5nYlRvb2x0aXBNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0hvbWVDb21wb25lbnQsY2xwUGlwZSxMaWJyb2RlT2JyYUNvbXBvbmVudCxBbm90YWNpb25lc0NvbXBvbmVudCxNZW5zYWplc0NvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0hvbWVDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cbiJdfQ==
