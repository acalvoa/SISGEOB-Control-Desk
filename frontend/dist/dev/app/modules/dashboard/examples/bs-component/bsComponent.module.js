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
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var bsComponent_component_1 = require('./bsComponent.component');
var BSComponentModule = (function () {
    function BSComponentModule() {
    }
    BSComponentModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                ng2_bootstrap_1.AlertModule,
                ng2_bootstrap_1.ButtonsModule,
                ng2_bootstrap_1.DropdownModule,
                ng2_bootstrap_1.PaginationModule,
                ng2_bootstrap_1.ProgressbarModule,
                ng2_bootstrap_1.RatingModule,
                ng2_bootstrap_1.TabsModule,
                ng2_bootstrap_1.TooltipModule,
                ng2_bootstrap_1.ModalModule,
                ng2_bootstrap_1.TypeaheadModule
            ],
            declarations: [bsComponent_component_1.BSComponentComponent],
            exports: [bsComponent_component_1.BSComponentComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], BSComponentModule);
    return BSComponentModule;
}());
exports.BSComponentModule = BSComponentModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Rhc2hib2FyZC9leGFtcGxlcy9icy1jb21wb25lbnQvYnNDb21wb25lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFFN0MsOEJBV1EsNkJBQTZCLENBQUMsQ0FBQTtBQUd0QyxzQ0FBcUMseUJBQXlCLENBQUMsQ0FBQTtBQXNCL0Q7SUFBQTtJQUFpQyxDQUFDO0lBcEJsQztRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDUixxQkFBWTtnQkFDWixtQkFBVztnQkFDZCxxQkFBWTtnQkFDWiwyQkFBVztnQkFDWCw2QkFBYTtnQkFDYiw4QkFBYztnQkFDZCxnQ0FBZ0I7Z0JBQ2hCLGlDQUFpQjtnQkFDakIsNEJBQVk7Z0JBQ1osMEJBQVU7Z0JBQ1YsNkJBQWE7Z0JBQ2IsMkJBQVc7Z0JBQ1gsK0JBQWU7YUFDZjtZQUNFLFlBQVksRUFBRSxDQUFDLDRDQUFvQixDQUFDO1lBQ3BDLE9BQU8sRUFBRSxDQUFDLDRDQUFvQixDQUFDO1NBQ2xDLENBQUM7O3lCQUFBO0lBRStCLHdCQUFDO0FBQUQsQ0FBakMsQUFBa0MsSUFBQTtBQUFyQix5QkFBaUIsb0JBQUksQ0FBQSIsImZpbGUiOiJhcHAvbW9kdWxlcy9kYXNoYm9hcmQvZXhhbXBsZXMvYnMtY29tcG9uZW50L2JzQ29tcG9uZW50Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge1xuXHRcdEFsZXJ0TW9kdWxlLFxuXHRcdEJ1dHRvbnNNb2R1bGUsXG5cdFx0RHJvcGRvd25Nb2R1bGUsXG5cdFx0UGFnaW5hdGlvbk1vZHVsZSxcblx0XHRQcm9ncmVzc2Jhck1vZHVsZSxcblx0XHRSYXRpbmdNb2R1bGUsXG5cdFx0VGFic01vZHVsZSxcblx0XHRUb29sdGlwTW9kdWxlLFxuXHRcdE1vZGFsTW9kdWxlLFxuXHRcdFR5cGVhaGVhZE1vZHVsZVxuXHR9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XG5cblxuaW1wb3J0IHsgQlNDb21wb25lbnRDb21wb25lbnQgfSBmcm9tICcuL2JzQ29tcG9uZW50LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgIFx0Um91dGVyTW9kdWxlLFxuICAgIFx0Rm9ybXNNb2R1bGUsXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEFsZXJ0TW9kdWxlLFxuXHRcdEJ1dHRvbnNNb2R1bGUsXG5cdFx0RHJvcGRvd25Nb2R1bGUsXG5cdFx0UGFnaW5hdGlvbk1vZHVsZSxcblx0XHRQcm9ncmVzc2Jhck1vZHVsZSxcblx0XHRSYXRpbmdNb2R1bGUsXG5cdFx0VGFic01vZHVsZSxcblx0XHRUb29sdGlwTW9kdWxlLFxuXHRcdE1vZGFsTW9kdWxlLFxuXHRcdFR5cGVhaGVhZE1vZHVsZVxuXHRdLFxuICAgIGRlY2xhcmF0aW9uczogW0JTQ29tcG9uZW50Q29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbQlNDb21wb25lbnRDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQlNDb21wb25lbnRNb2R1bGUgeyB9XG4iXX0=
