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
var DatatableComponent = (function () {
    function DatatableComponent() {
        this.delete = new core_1.EventEmitter();
        this.edit = new core_1.EventEmitter();
    }
    DatatableComponent.prototype.ngOnInit = function () {
        console.log(this.column);
    };
    DatatableComponent.prototype.doEdit = function (obj) {
        this.edit.emit(obj);
    };
    DatatableComponent.prototype.doDelete = function (obj) {
        this.delete.emit(obj);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DatatableComponent.prototype, "column", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatatableComponent.prototype, "config", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DatatableComponent.prototype, "data", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DatatableComponent.prototype, "delete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DatatableComponent.prototype, "edit", void 0);
    DatatableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'datatable-cmp',
            templateUrl: 'datatable.component.html',
            styleUrls: ['datatable.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DatatableComponent);
    return DatatableComponent;
}());
exports.DatatableComponent = DatatableComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZGF0YXRhYmxlL2RhdGF0YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4RCxlQUFlLENBQUMsQ0FBQTtBQVk5RTtJQVNDO1FBTFUsV0FBTSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzVCLFNBQUksR0FBSSxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUtyQyxDQUFDO0lBQ0QscUNBQVEsR0FBUjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTSxtQ0FBTSxHQUFiLFVBQWMsR0FBTztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNwQixDQUFDO0lBQ00scUNBQVEsR0FBZixVQUFnQixHQUFPO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFsQkQ7UUFBQyxZQUFLLEVBQUU7O3NEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3NEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O29EQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O3NEQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O29EQUFBO0lBWlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSwwQkFBMEI7WUFDcEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDekMsQ0FBQzs7MEJBQUE7SUFzQkYseUJBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLDBCQUFrQixxQkFvQjlCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9kYXRhdGFibGUvZGF0YXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4qXHRUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIERhc2hib2FyZENvbXBvbmVudC5cbiovXG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2RhdGF0YWJsZS1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ2RhdGF0YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2RhdGF0YWJsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRhdGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdEBJbnB1dCgpIGNvbHVtbjphbnlbXTtcblx0QElucHV0KCkgY29uZmlnOiBhbnk7XG5cdEBJbnB1dCgpIGRhdGE6IGFueVtdO1xuXHRAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgZWRpdCAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHByaXZhdGUgbl9pdGVtczpudW1iZXI7XG5cdHByaXZhdGUgcGFnaW5hdGU6Ym9vbGVhbjtcblx0cHJpdmF0ZSBmaWx0cm9zOmJvb2xlYW47XG5cdGNvbnN0cnVjdG9yKCl7XG5cdH1cblx0bmdPbkluaXQoKXtcblx0XHRjb25zb2xlLmxvZyh0aGlzLmNvbHVtbik7XG5cdH1cblx0cHVibGljIGRvRWRpdChvYmo6YW55KXtcblx0XHR0aGlzLmVkaXQuZW1pdChvYmopXG5cdH1cblx0cHVibGljIGRvRGVsZXRlKG9iajphbnkpe1xuXHRcdHRoaXMuZGVsZXRlLmVtaXQob2JqKTtcblx0fVxufSJdfQ==
