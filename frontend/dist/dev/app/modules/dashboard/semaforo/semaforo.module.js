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
var semaforo_component_1 = require('./semaforo.component');
var forms_1 = require('@angular/forms');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var index_1 = require('../../../pipes/index');
var SemaforoModule = (function () {
    function SemaforoModule() {
    }
    SemaforoModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, ng_bootstrap_1.NgbTooltipModule],
            declarations: [semaforo_component_1.SemaforoComponent, index_1.TotalPipe],
        }), 
        __metadata('design:paramtypes', [])
    ], SemaforoModule);
    return SemaforoModule;
}());
exports.SemaforoModule = SemaforoModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Rhc2hib2FyZC9zZW1hZm9yby9zZW1hZm9yby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUkvQyxtQ0FBaUMsc0JBQXNCLENBQUMsQ0FBQTtBQUN4RCxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3Qyw2QkFBaUMsNEJBQTRCLENBQUMsQ0FBQTtBQUM5RCxzQkFBMEIsc0JBQXNCLENBQUMsQ0FBQTtBQVFqRDtJQUFBO0lBQThCLENBQUM7SUFML0I7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFDLG1CQUFXLEVBQUMsK0JBQWdCLENBQUM7WUFDcEQsWUFBWSxFQUFFLENBQUMsc0NBQWlCLEVBQUMsaUJBQVMsQ0FBQztTQUM5QyxDQUFDOztzQkFBQTtJQUU0QixxQkFBQztBQUFELENBQTlCLEFBQStCLElBQUE7QUFBbEIsc0JBQWMsaUJBQUksQ0FBQSIsImZpbGUiOiJhcHAvbW9kdWxlcy9kYXNoYm9hcmQvc2VtYWZvcm8vc2VtYWZvcm8ubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuaW1wb3J0IHsgU2VtYWZvcm9Db21wb25lbnQgfWZyb20gJy4vc2VtYWZvcm8uY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdiVG9vbHRpcE1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IFRvdGFsUGlwZSB9IGZyb20gJy4uLy4uLy4uL3BpcGVzL2luZGV4JztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsRm9ybXNNb2R1bGUsTmdiVG9vbHRpcE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbU2VtYWZvcm9Db21wb25lbnQsVG90YWxQaXBlXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZW1hZm9yb01vZHVsZSB7IH1cbiJdfQ==
