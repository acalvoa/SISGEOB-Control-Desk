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
var SidebarComponent = (function () {
    function SidebarComponent() {
        this.showMenu = '';
    }
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SidebarComponent.prototype, "isActive", void 0);
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sidebar-cmp',
            templateUrl: 'sidebar.component.html',
            styleUrls: ['sidebar.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBU2hEO0lBQUE7UUFFQyxhQUFRLEdBQVcsRUFBRSxDQUFDO0lBV3ZCLENBQUM7SUFQQSx5Q0FBYyxHQUFkLFVBQWUsT0FBWTtRQUMxQixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDckIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztJQUNGLENBQUM7SUFYRDtRQUFDLFlBQUssRUFBRTs7c0RBQUE7SUFSVDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDOzt3QkFBQTtJQWVGLHVCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSx3QkFBZ0IsbUJBYTVCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ3NpZGViYXItY21wJyxcblx0dGVtcGxhdGVVcmw6ICdzaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc2lkZWJhci5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IHtcblx0QElucHV0KCkgaXNBY3RpdmU6Ym9vbGVhbjtcblx0c2hvd01lbnU6IHN0cmluZyA9ICcnO1xuXHQvLyBldmVudENhbGxlZCgpIHtcblx0Ly8gXHR0aGlzLmlzQWN0aXZlID0gIXRoaXMuaXNBY3RpdmU7XG5cdC8vIH1cblx0YWRkRXhwYW5kQ2xhc3MoZWxlbWVudDogYW55KSB7XG5cdFx0aWYgKGVsZW1lbnQgPT09IHRoaXMuc2hvd01lbnUpIHtcblx0XHRcdHRoaXMuc2hvd01lbnUgPSAnMCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2hvd01lbnUgPSBlbGVtZW50O1xuXHRcdH1cblx0fVxufVxuIl19
