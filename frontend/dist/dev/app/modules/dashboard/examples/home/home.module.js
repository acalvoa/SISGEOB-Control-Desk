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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var home_component_2 = require('./home.component');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, ng2_bootstrap_1.CarouselModule, ng2_bootstrap_1.DropdownModule, ng2_bootstrap_1.AlertModule],
            declarations: [home_component_1.HomeComponent, home_component_2.TimelineComponent, home_component_2.ChatComponent, home_component_2.NotificationComponent],
            exports: [home_component_1.HomeComponent, home_component_2.TimelineComponent, home_component_2.ChatComponent, home_component_2.NotificationComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Rhc2hib2FyZC9leGFtcGxlcy9ob21lL2hvbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsOEJBQTRELDZCQUE2QixDQUFDLENBQUE7QUFFMUYsK0JBQXdFLGtCQUFrQixDQUFDLENBQUE7QUFRM0Y7SUFBQTtJQUEwQixDQUFDO0lBTjNCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSw4QkFBYyxFQUFFLDhCQUFjLEVBQUUsMkJBQVcsQ0FBQztZQUNwRSxZQUFZLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLGtDQUFpQixFQUFFLDhCQUFhLEVBQUUsc0NBQXFCLENBQUM7WUFDdEYsT0FBTyxFQUFFLENBQUMsOEJBQWEsRUFBRSxrQ0FBaUIsRUFBRSw4QkFBYSxFQUFFLHNDQUFxQixDQUFDO1NBQ3BGLENBQUM7O2tCQUFBO0lBRXdCLGlCQUFDO0FBQUQsQ0FBMUIsQUFBMkIsSUFBQTtBQUFkLGtCQUFVLGFBQUksQ0FBQSIsImZpbGUiOiJhcHAvbW9kdWxlcy9kYXNoYm9hcmQvZXhhbXBsZXMvaG9tZS9ob21lLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxNb2R1bGUsIERyb3Bkb3duTW9kdWxlLCBBbGVydE1vZHVsZSB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IFRpbWVsaW5lQ29tcG9uZW50LCBDaGF0Q29tcG9uZW50LCBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDYXJvdXNlbE1vZHVsZSwgRHJvcGRvd25Nb2R1bGUsIEFsZXJ0TW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtIb21lQ29tcG9uZW50LCBUaW1lbGluZUNvbXBvbmVudCwgQ2hhdENvbXBvbmVudCwgTm90aWZpY2F0aW9uQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbSG9tZUNvbXBvbmVudCwgVGltZWxpbmVDb21wb25lbnQsIENoYXRDb21wb25lbnQsIE5vdGlmaWNhdGlvbkNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxuIl19
