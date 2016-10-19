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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_2 = require('ng2-bootstrap/ng2-bootstrap');
var home_module_1 = require('./home/home.module');
var semaforo_module_1 = require('./semaforo/semaforo.module');
var mapa_module_1 = require('./mapa/mapa.module');
var informes_module_1 = require('./informes/informes.module');
var users_module_1 = require('./users/users.module');
var dashboard_component_1 = require('./dashboard.component');
var index_1 = require('../../shared/index');
var index_2 = require('../../shared/index');
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                ng2_bootstrap_1.DropdownModule,
                ng2_bootstrap_2.ModalModule,
                home_module_1.HomeModule,
                users_module_1.UsersModule,
                semaforo_module_1.SemaforoModule,
                mapa_module_1.MapaModule,
                informes_module_1.InformesModule
            ],
            declarations: [dashboard_component_1.DashboardComponent, index_1.NavbarComponent, index_2.SidebarComponent],
            exports: [dashboard_component_1.DashboardComponent, index_1.NavbarComponent, index_2.SidebarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsOEJBQStCLDZCQUE2QixDQUFDLENBQUE7QUFDN0QsOEJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFDMUQsNEJBQTJCLG9CQUFvQixDQUFDLENBQUE7QUFDaEQsZ0NBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsNEJBQTJCLG9CQUFvQixDQUFDLENBQUE7QUFDaEQsZ0NBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsNkJBQTRCLHNCQUFzQixDQUFDLENBQUE7QUFZbkQsb0NBQW1DLHVCQUF1QixDQUFDLENBQUE7QUFFM0Qsc0JBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsc0JBQStCLG9CQUFvQixDQUFDLENBQUE7QUEyQnBEO0lBQUE7SUFBK0IsQ0FBQztJQXZCaEM7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7Z0JBQ2YscUJBQVk7Z0JBQ1osOEJBQWM7Z0JBQ1gsMkJBQVc7Z0JBQ2Qsd0JBQVU7Z0JBQ1AsMEJBQVc7Z0JBQ1gsZ0NBQWM7Z0JBQ2Qsd0JBQVU7Z0JBQ1YsZ0NBQWM7YUFRakI7WUFDRCxZQUFZLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSx1QkFBZSxFQUFDLHdCQUFnQixDQUFDO1lBQ3BFLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixFQUFFLHVCQUFlLEVBQUUsd0JBQWdCLENBQUM7U0FDbkUsQ0FBQzs7dUJBQUE7SUFFNkIsc0JBQUM7QUFBRCxDQUEvQixBQUFnQyxJQUFBO0FBQW5CLHVCQUFlLGtCQUFJLENBQUEiLCJmaWxlIjoiYXBwL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBNb2RhbE1vZHVsZSB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBIb21lTW9kdWxlIH0gZnJvbSAnLi9ob21lL2hvbWUubW9kdWxlJztcbmltcG9ydCB7IFNlbWFmb3JvTW9kdWxlIH0gZnJvbSAnLi9zZW1hZm9yby9zZW1hZm9yby5tb2R1bGUnO1xuaW1wb3J0IHsgTWFwYU1vZHVsZSB9IGZyb20gJy4vbWFwYS9tYXBhLm1vZHVsZSc7XG5pbXBvcnQgeyBJbmZvcm1lc01vZHVsZSB9IGZyb20gJy4vaW5mb3JtZXMvaW5mb3JtZXMubW9kdWxlJztcbmltcG9ydCB7IFVzZXJzTW9kdWxlIH0gZnJvbSAnLi91c2Vycy91c2Vycy5tb2R1bGUnO1xuaW1wb3J0IHsgTGlicm9kZU9icmFDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgQW5vdGFjaW9uZXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgTWVuc2FqZXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW5kZXgnO1xuLy8gaW1wb3J0IHsgQ2hhcnRNb2R1bGUgfSBmcm9tICcuL2V4YW1wbGVzL2NoYXJ0cy9jaGFydC5tb2R1bGUnO1xuLy8gaW1wb3J0IHsgQmxhbmtQYWdlTW9kdWxlIH0gZnJvbSAnLi9ibGFuay1wYWdlL2JsYW5rUGFnZS5tb2R1bGUnO1xuLy8gaW1wb3J0IHsgVGFibGVNb2R1bGUgfSBmcm9tICcuL2V4YW1wbGVzL3RhYmxlcy90YWJsZS5tb2R1bGUnO1xuLy8gaW1wb3J0IHsgRm9ybU1vZHVsZSB9IGZyb20gJy4vZXhhbXBsZXMvZm9ybXMvZm9ybXMubW9kdWxlJztcbi8vIGltcG9ydCB7IEdyaWRNb2R1bGUgfSBmcm9tICcuL2V4YW1wbGVzL2dyaWQvZ3JpZC5tb2R1bGUnO1xuLy8gaW1wb3J0IHsgQlNDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL2V4YW1wbGVzL2JzLWNvbXBvbmVudC9ic0NvbXBvbmVudC5tb2R1bGUnO1xuLy8gaW1wb3J0IHsgQlNFbGVtZW50TW9kdWxlIH0gZnJvbSAnLi9leGFtcGxlcy9icy1lbGVtZW50L2JzRWxlbWVudC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuXG5pbXBvcnQge05hdmJhckNvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7U2lkZWJhckNvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2hhcmVkL2luZGV4JztcblxuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgXHRSb3V0ZXJNb2R1bGUsXG4gICAgXHREcm9wZG93bk1vZHVsZSxcbiAgICAgICAgTW9kYWxNb2R1bGUsXG4gICAgXHRIb21lTW9kdWxlLFxuICAgICAgICBVc2Vyc01vZHVsZSxcbiAgICAgICAgU2VtYWZvcm9Nb2R1bGUsXG4gICAgICAgIE1hcGFNb2R1bGUsXG4gICAgICAgIEluZm9ybWVzTW9kdWxlXG4gICAgIC8vICAgIENoYXJ0TW9kdWxlLFxuICAgICAvLyAgICBUYWJsZU1vZHVsZSxcbiAgICAgLy8gICAgRm9ybU1vZHVsZSxcbiAgICAgLy8gICAgR3JpZE1vZHVsZSxcbiAgICBcdC8vIEJTQ29tcG9uZW50TW9kdWxlLFxuICAgICAvLyAgICBCU0VsZW1lbnRNb2R1bGUsXG4gICAgIC8vICAgIEJsYW5rUGFnZU1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbRGFzaGJvYXJkQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnQsU2lkZWJhckNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0Rhc2hib2FyZENvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LCBTaWRlYmFyQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZE1vZHVsZSB7IH1cbiJdfQ==
