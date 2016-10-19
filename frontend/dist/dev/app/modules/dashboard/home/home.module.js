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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Rhc2hib2FyZC9ob21lL2hvbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFJL0MsK0JBQTZCLGtCQUFrQixDQUFDLENBQUE7QUFDaEQsc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MsNkJBQWlDLDRCQUE0QixDQUFDLENBQUE7QUFDOUQsc0JBQXdCLHNCQUFzQixDQUFDLENBQUE7QUFDL0Msc0JBQXFDLHVCQUF1QixDQUFDLENBQUE7QUFDN0Qsc0JBQXFDLHVCQUF1QixDQUFDLENBQUE7QUFDN0Qsc0JBQWtDLHVCQUF1QixDQUFDLENBQUE7QUFRMUQ7SUFBQTtJQUEwQixDQUFDO0lBTjNCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksRUFBQyxtQkFBVyxFQUFDLCtCQUFnQixDQUFDO1lBQ3BELFlBQVksRUFBRSxDQUFDLDhCQUFhLEVBQUMsZUFBTyxFQUFDLDRCQUFvQixFQUFDLDRCQUFvQixFQUFDLHlCQUFpQixDQUFDO1lBQ2pHLE9BQU8sRUFBRSxDQUFDLDhCQUFhLENBQUM7U0FDM0IsQ0FBQzs7a0JBQUE7SUFFd0IsaUJBQUM7QUFBRCxDQUExQixBQUEyQixJQUFBO0FBQWQsa0JBQVUsYUFBSSxDQUFBIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2Rhc2hib2FyZC9ob21lL2hvbWUubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9ZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nYlRvb2x0aXBNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBjbHBQaXBlIH0gZnJvbSAnLi4vLi4vLi4vcGlwZXMvaW5kZXgnO1xuaW1wb3J0IHsgTGlicm9kZU9icmFDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgQW5vdGFjaW9uZXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgTWVuc2FqZXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsRm9ybXNNb2R1bGUsTmdiVG9vbHRpcE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbSG9tZUNvbXBvbmVudCxjbHBQaXBlLExpYnJvZGVPYnJhQ29tcG9uZW50LEFub3RhY2lvbmVzQ29tcG9uZW50LE1lbnNhamVzQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbSG9tZUNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxuIl19
