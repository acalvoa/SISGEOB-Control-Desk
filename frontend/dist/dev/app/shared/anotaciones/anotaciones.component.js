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
var index_2 = require('../../services/index');
var AnotacionesComponent = (function () {
    function AnotacionesComponent(rest, user) {
        this.view = new core_1.EventEmitter();
        this.views = "visor";
        this.inReg = {
            NOMBRE: "",
            MENSAJE: ""
        };
        this.rest_service = rest;
        this.user = user.getUser().ID_USER;
    }
    AnotacionesComponent.prototype.fetch = function () {
        var _this = this;
        this.rest_service.get('/anotaciones?OBRA=' + this.obra + '&USER=' + this.user).subscribe(function (data) {
            console.log(data);
            _this.registros = data;
        }, function (err) { return console.error(err); });
    };
    AnotacionesComponent.prototype.close = function () {
        this.registros = null;
        this.view.emit();
    };
    AnotacionesComponent.prototype.create = function () {
        var _this = this;
        var objReg = {
            NOMBRE: this.inReg.NOMBRE,
            MENSAJE: this.inReg.MENSAJE,
            USER: this.user,
            OBRA: this.obra
        };
        this.rest_service.post(objReg, '/anotaciones').subscribe(function (data) {
            _this.registros.push(data);
            _this.views = "visor";
        }, function (err) { return console.error(err); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AnotacionesComponent.prototype, "obra", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AnotacionesComponent.prototype, "registros", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AnotacionesComponent.prototype, "view", void 0);
    AnotacionesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'anotaciones',
            templateUrl: 'anotaciones.component.html',
            styleUrls: ['anotaciones.component.css']
        }), 
        __metadata('design:paramtypes', [index_2.RestService, index_1.UserService])
    ], AnotacionesComponent);
    return AnotacionesComponent;
}());
exports.AnotacionesComponent = AnotacionesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYW5vdGFjaW9uZXMvYW5vdGFjaW9uZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBc0QsZUFBZSxDQUFDLENBQUE7QUFFdEUsc0JBQTRCLHNCQUFzQixDQUFDLENBQUE7QUFDbkQsc0JBQTRCLHNCQUFzQixDQUFDLENBQUE7QUFRbkQ7SUFXQyw4QkFBWSxJQUFnQixFQUFFLElBQWdCO1FBUnBDLFNBQUksR0FBcUIsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFHOUMsVUFBSyxHQUFVLE9BQU8sQ0FBQztRQUN2QixVQUFLLEdBQUc7WUFDZixNQUFNLEVBQUUsRUFBRTtZQUNWLE9BQU8sRUFBRSxFQUFFO1NBQ1gsQ0FBQTtRQUVBLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsb0NBQUssR0FBTDtRQUFBLGlCQVFDO1FBUEEsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDOUUsVUFBQSxJQUFJO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUNELG9DQUFLLEdBQUw7UUFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxxQ0FBTSxHQUFOO1FBQUEsaUJBY0M7UUFiQSxJQUFJLE1BQU0sR0FBRztZQUNaLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztZQUMzQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDZixDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FDcEQsVUFBQSxJQUFJO1lBQ0gsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDdEIsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FDNUIsQ0FBQztJQUNILENBQUM7SUF6Q0Q7UUFBQyxZQUFLLEVBQUU7O3NEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzJEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O3NEQUFBO0lBVFY7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDM0MsQ0FBQzs7NEJBQUE7SUE0Q0YsMkJBQUM7QUFBRCxDQTNDQSxBQTJDQyxJQUFBO0FBM0NZLDRCQUFvQix1QkEyQ2hDLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9hbm90YWNpb25lcy9hbm90YWNpb25lcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBSZXN0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2Fub3RhY2lvbmVzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2Fub3RhY2lvbmVzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnYW5vdGFjaW9uZXMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFub3RhY2lvbmVzQ29tcG9uZW50IHtcblx0QElucHV0KCkgb2JyYTpudW1iZXI7XG5cdEBJbnB1dCgpIHJlZ2lzdHJvczphbnlbXTtcblx0QE91dHB1dCgpIHZpZXc6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHByaXZhdGUgcmVzdF9zZXJ2aWNlOlJlc3RTZXJ2aWNlO1xuXHRwcml2YXRlIHVzZXI6bnVtYmVyO1xuXHRwcml2YXRlIHZpZXdzOnN0cmluZyA9IFwidmlzb3JcIjtcblx0cHJpdmF0ZSBpblJlZyA9IHtcblx0XHROT01CUkU6IFwiXCIsXG5cdFx0TUVOU0FKRTogXCJcIlxuXHR9XG5cdGNvbnN0cnVjdG9yKHJlc3Q6UmVzdFNlcnZpY2UsIHVzZXI6VXNlclNlcnZpY2Upe1xuXHRcdHRoaXMucmVzdF9zZXJ2aWNlID0gcmVzdDtcblx0XHR0aGlzLnVzZXIgPSB1c2VyLmdldFVzZXIoKS5JRF9VU0VSO1xuXHR9XG5cdGZldGNoKCl7XG5cdFx0dGhpcy5yZXN0X3NlcnZpY2UuZ2V0KCcvYW5vdGFjaW9uZXM/T0JSQT0nK3RoaXMub2JyYSsnJlVTRVI9Jyt0aGlzLnVzZXIpLnN1YnNjcmliZShcblx0XHQgICAgZGF0YSA9PiB7XG5cdFx0ICAgIFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0ICAgIFx0dGhpcy5yZWdpc3Ryb3MgPSBkYXRhO1xuXHRcdCAgICB9LFxuXHRcdCAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpXG5cdFx0KTtcblx0fVxuXHRjbG9zZSgpe1xuXHRcdHRoaXMucmVnaXN0cm9zID0gbnVsbDtcblx0XHR0aGlzLnZpZXcuZW1pdCgpO1xuXHR9XG5cdGNyZWF0ZSgpe1xuXHRcdGxldCBvYmpSZWcgPSB7XG5cdFx0XHROT01CUkU6IHRoaXMuaW5SZWcuTk9NQlJFLFxuXHRcdFx0TUVOU0FKRTogdGhpcy5pblJlZy5NRU5TQUpFLFxuXHRcdFx0VVNFUjogdGhpcy51c2VyLFxuXHRcdFx0T0JSQTogdGhpcy5vYnJhXG5cdFx0fTtcblx0XHR0aGlzLnJlc3Rfc2VydmljZS5wb3N0KG9ialJlZywgJy9hbm90YWNpb25lcycpLnN1YnNjcmliZShcblx0XHQgICAgZGF0YSA9PiB7XG5cdFx0ICAgIFx0dGhpcy5yZWdpc3Ryb3MucHVzaChkYXRhKTtcblx0XHQgICAgXHR0aGlzLnZpZXdzID0gXCJ2aXNvclwiO1xuXHRcdCAgICB9LFxuXHRcdCAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpXG5cdFx0KTtcblx0fVxufVxuIl19
