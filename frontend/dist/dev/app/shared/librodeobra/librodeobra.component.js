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
var index_1 = require('../../services/index');
var LibrodeObraComponent = (function () {
    function LibrodeObraComponent(rest) {
        this.view = new core_1.EventEmitter();
        this.registros = [];
        this.rest_service = rest;
        this.fetch();
    }
    LibrodeObraComponent.prototype.fetch = function () {
        var _this = this;
        this.rest_service.get('/libro?OBRA=' + this.obra).subscribe(function (data) {
            _this.registros = data;
        }, function (err) { return console.error(err); });
    };
    LibrodeObraComponent.prototype.ngOnInit = function () {
        this.fetch();
    };
    LibrodeObraComponent.prototype.close = function () {
        this.obra = null;
        this.view.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], LibrodeObraComponent.prototype, "obra", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], LibrodeObraComponent.prototype, "view", void 0);
    LibrodeObraComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'libro-de-obra',
            templateUrl: 'librodeobra.component.html',
            styleUrls: ['librodeobra.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.RestService])
    ], LibrodeObraComponent);
    return LibrodeObraComponent;
}());
exports.LibrodeObraComponent = LibrodeObraComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbGlicm9kZW9icmEvbGlicm9kZW9icmEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEQsZUFBZSxDQUFDLENBQUE7QUFHOUUsc0JBQTRCLHNCQUFzQixDQUFDLENBQUE7QUFRbkQ7SUFLQyw4QkFBWSxJQUFnQjtRQUhsQixTQUFJLEdBQXFCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRTlDLGNBQVMsR0FBUyxFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNELG9DQUFLLEdBQUw7UUFBQSxpQkFPQztRQU5BLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUNyRCxVQUFBLElBQUk7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUNELHVDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBQ0Qsb0NBQUssR0FBTDtRQUNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQXRCRDtRQUFDLFlBQUssRUFBRTs7c0RBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7c0RBQUE7SUFSVjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUMzQyxDQUFDOzs0QkFBQTtJQXlCRiwyQkFBQztBQUFELENBeEJBLEFBd0JDLElBQUE7QUF4QlksNEJBQW9CLHVCQXdCaEMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2xpYnJvZGVvYnJhL2xpYnJvZGVvYnJhLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgUmVzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdsaWJyby1kZS1vYnJhJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2xpYnJvZGVvYnJhLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbGlicm9kZW9icmEuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpYnJvZGVPYnJhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRASW5wdXQoKSBvYnJhOm51bWJlcjtcblx0QE91dHB1dCgpIHZpZXc6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHByaXZhdGUgcmVzdF9zZXJ2aWNlOlJlc3RTZXJ2aWNlXG5cdHByaXZhdGUgcmVnaXN0cm9zOmFueVtdID0gW107XG5cdGNvbnN0cnVjdG9yKHJlc3Q6UmVzdFNlcnZpY2Upe1xuXHRcdHRoaXMucmVzdF9zZXJ2aWNlID0gcmVzdDtcblx0XHR0aGlzLmZldGNoKCk7XG5cdH1cblx0ZmV0Y2goKXtcblx0XHR0aGlzLnJlc3Rfc2VydmljZS5nZXQoJy9saWJybz9PQlJBPScrdGhpcy5vYnJhKS5zdWJzY3JpYmUoXG5cdFx0ICAgIGRhdGEgPT4ge1xuXHRcdCAgICBcdHRoaXMucmVnaXN0cm9zID0gZGF0YTtcblx0XHQgICAgfSxcblx0XHQgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKVxuXHRcdCk7XG5cdH1cblx0bmdPbkluaXQoKSB7XG5cdCAgdGhpcy5mZXRjaCgpO1xuXHR9XG5cdGNsb3NlKCl7XG5cdFx0dGhpcy5vYnJhID0gbnVsbDtcblx0XHR0aGlzLnZpZXcuZW1pdCgpO1xuXHR9XG59XG4iXX0=
