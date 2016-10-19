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
var MensajesComponent = (function () {
    function MensajesComponent(rest) {
        this.view = new core_1.EventEmitter();
        this.rest_service = rest;
    }
    MensajesComponent.prototype.close = function () {
        this.mensaje = null;
        this.obra = null;
        this.servicio = null;
        this.view.emit();
    };
    MensajesComponent.prototype.save = function () {
        var _this = this;
        event.preventDefault();
        var msg = {
            OBRA: this.obra,
            SERVICIO: this.servicio,
            MENSAJE: this.mensaje
        };
        this.rest_service.post(msg, '/mensajes').subscribe(function (data) {
            _this.close();
        }, function (err) { return console.error(err); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MensajesComponent.prototype, "obra", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MensajesComponent.prototype, "servicio", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MensajesComponent.prototype, "view", void 0);
    MensajesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mensajes',
            templateUrl: 'mensajes.component.html',
            styleUrls: ['mensajes.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.RestService])
    ], MensajesComponent);
    return MensajesComponent;
}());
exports.MensajesComponent = MensajesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbWVuc2FqZXMvbWVuc2FqZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBc0QsZUFBZSxDQUFDLENBQUE7QUFHdEUsc0JBQTRCLHNCQUFzQixDQUFDLENBQUE7QUFRbkQ7SUFNQywyQkFBWSxJQUFnQjtRQUhsQixTQUFJLEdBQXFCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBSXJELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFDRCxpQ0FBSyxHQUFMO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0QsZ0NBQUksR0FBSjtRQUFBLGlCQWFDO1FBWkEsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHO1lBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUNyQixDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FDOUMsVUFBQSxJQUFJO1lBQ0gsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FDNUIsQ0FBQztJQUNILENBQUM7SUEzQkQ7UUFBQyxZQUFLLEVBQUU7O21EQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O21EQUFBO0lBVFY7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQzs7eUJBQUE7SUE4QkYsd0JBQUM7QUFBRCxDQTdCQSxBQTZCQyxJQUFBO0FBN0JZLHlCQUFpQixvQkE2QjdCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9tZW5zYWplcy9tZW5zYWplcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBSZXN0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ21lbnNhamVzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ21lbnNhamVzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbWVuc2FqZXMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lbnNhamVzQ29tcG9uZW50IHtcblx0QElucHV0KCkgb2JyYTpudW1iZXI7XG5cdEBJbnB1dCgpIHNlcnZpY2lvOm51bWJlcjtcblx0QE91dHB1dCgpIHZpZXc6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHByaXZhdGUgbWVuc2FqZTpzdHJpbmc7XG5cdHByaXZhdGUgcmVzdF9zZXJ2aWNlOlJlc3RTZXJ2aWNlXG5cdGNvbnN0cnVjdG9yKHJlc3Q6UmVzdFNlcnZpY2Upe1xuXHRcdHRoaXMucmVzdF9zZXJ2aWNlID0gcmVzdDtcblx0fVxuXHRjbG9zZSgpe1xuXHRcdHRoaXMubWVuc2FqZSA9IG51bGw7XG5cdFx0dGhpcy5vYnJhID0gbnVsbDtcblx0XHR0aGlzLnNlcnZpY2lvID0gbnVsbDtcblx0XHR0aGlzLnZpZXcuZW1pdCgpO1xuXHR9XG5cdHNhdmUoKXtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGxldCBtc2cgPSB7XG5cdFx0XHRPQlJBOiB0aGlzLm9icmEsXG5cdFx0XHRTRVJWSUNJTzogdGhpcy5zZXJ2aWNpbyxcblx0XHRcdE1FTlNBSkU6IHRoaXMubWVuc2FqZVxuXHRcdH07XG5cdFx0dGhpcy5yZXN0X3NlcnZpY2UucG9zdChtc2csICcvbWVuc2FqZXMnKS5zdWJzY3JpYmUoXG5cdFx0ICAgIGRhdGEgPT4ge1xuXHRcdCAgICBcdHRoaXMuY2xvc2UoKTtcblx0XHQgICAgfSxcblx0XHQgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKVxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==
