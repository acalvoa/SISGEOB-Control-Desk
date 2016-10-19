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
var mapa_component_1 = require('./mapa.component');
var forms_1 = require('@angular/forms');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var core_2 = require('angular2-google-maps/core');
var MapaModule = (function () {
    function MapaModule() {
    }
    MapaModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, ng_bootstrap_1.NgbTooltipModule, core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyC6Bf-4zuKPSdFtGF4ZYIORhz2MVH1assw'
                })],
            declarations: [mapa_component_1.MapaComponent],
            exports: [mapa_component_1.MapaComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MapaModule);
    return MapaModule;
}());
exports.MapaModule = MapaModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Rhc2hib2FyZC9tYXBhL21hcGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFJL0MsK0JBQTZCLGtCQUFrQixDQUFDLENBQUE7QUFDaEQsc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MsNkJBQWlDLDRCQUE0QixDQUFDLENBQUE7QUFDOUQscUJBQThCLDJCQUEyQixDQUFDLENBQUE7QUFVMUQ7SUFBQTtJQUEwQixDQUFDO0lBUjNCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksRUFBQyxtQkFBVyxFQUFDLCtCQUFnQixFQUFDLG9CQUFhLENBQUMsT0FBTyxDQUFDO29CQUN4RSxNQUFNLEVBQUUseUNBQXlDO2lCQUNsRCxDQUFDLENBQUM7WUFDSCxZQUFZLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1lBQzdCLE9BQU8sRUFBRSxDQUFDLDhCQUFhLENBQUM7U0FDM0IsQ0FBQzs7a0JBQUE7SUFFd0IsaUJBQUM7QUFBRCxDQUExQixBQUEyQixJQUFBO0FBQWQsa0JBQVUsYUFBSSxDQUFBIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2Rhc2hib2FyZC9tYXBhL21hcGEubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuaW1wb3J0IHsgTWFwYUNvbXBvbmVudCB9ZnJvbSAnLi9tYXBhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nYlRvb2x0aXBNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBBZ21Db3JlTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItZ29vZ2xlLW1hcHMvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxGb3Jtc01vZHVsZSxOZ2JUb29sdGlwTW9kdWxlLEFnbUNvcmVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBhcGlLZXk6ICdBSXphU3lDNkJmLTR6dUtQU2RGdEdGNFpZSU9SaHoyTVZIMWFzc3cnXG4gICAgfSldLFxuICAgIGRlY2xhcmF0aW9uczogW01hcGFDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtNYXBhQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIE1hcGFNb2R1bGUgeyB9XG4iXX0=
