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
var index_1 = require('../../../services/index');
var index_2 = require('../../../services/index');
var HomeComponent = (function () {
    function HomeComponent(rest, user) {
        this.view_mensaje = false;
        this.view_libro = false;
        this.view_anotaciones = false;
        this.rest = rest;
        this.getServicios();
        this.getMensajes();
        this.getObras();
        this.getAlertas();
        this.user = user.getUser().ID_USER;
    }
    HomeComponent.prototype.getServicios = function () {
        var _this = this;
        this.rest.get('/servicios').subscribe(function (data) {
            _this.servicios = data;
            _this.s_filtro = data;
        }, function (err) { return console.error(err); });
    };
    HomeComponent.prototype.getMensajes = function () {
        var _this = this;
        this.rest.get('/mensajes').subscribe(function (data) {
            _this.mensajes = data;
            _this.s_mensajes = data;
        }, function (err) { return console.error(err); });
    };
    HomeComponent.prototype.getAlertas = function () {
        var _this = this;
        this.rest.get('/alertas').subscribe(function (data) {
            _this.alertas = data;
            _this.s_alertas = data;
        }, function (err) { return console.error(err); });
    };
    HomeComponent.prototype.getObras = function () {
        var _this = this;
        this.rest.get('/obras').subscribe(function (data) {
            _this.obras = data;
            _this.s_obras = data;
        }, function (err) { return console.error(err); });
    };
    HomeComponent.prototype.filter_by_service = function (filtro) {
        this.s_obras = [];
        for (var i = 0; i < this.obras.length; i++) {
            if (this.obras[i].SERVICIO.NOMBRE.toUpperCase() == filtro.toUpperCase()) {
                this.s_obras.push(this.obras[i]);
            }
        }
        this.s_mensajes = [];
        for (var i = 0; i < this.mensajes.length; i++) {
            if (this.mensajes[i].SERVICIO.NOMBRE.toUpperCase() == filtro.toUpperCase()) {
                this.s_mensajes.push(this.mensajes[i]);
            }
        }
        this.s_alertas = [];
        for (var i = 0; i < this.alertas.length; i++) {
            if (this.alertas[i].SERVICIO.NOMBRE.toUpperCase() == filtro.toUpperCase()) {
                this.s_alertas.push(this.alertas[i]);
            }
        }
    };
    HomeComponent.prototype.filtrar_servicio = function (filtro) {
        if (filtro == "") {
            this.s_filtro = this.servicios;
            this.s_mensajes = this.mensajes;
            this.s_obras = this.obras;
            this.s_alertas = this.alertas;
            return;
        }
        this.s_filtro = [];
        for (var i = 0; i < this.servicios.length; i++) {
            if (this.s_filtro.length >= 6)
                break;
            if (this.servicios[i].NOMBRE.toUpperCase().indexOf(filtro.toUpperCase()) != -1) {
                this.s_filtro.push(this.servicios[i]);
            }
        }
    };
    HomeComponent.prototype.filtrar_obras = function (filtro) {
        if (filtro == "") {
            this.s_filtro = this.servicios;
            return;
        }
        this.s_filtro = [];
        for (var i = 0; i < this.servicios.length; i++) {
            if (this.s_filtro.length >= 6)
                break;
            if (this.servicios[i].NOMBRE.toUpperCase().indexOf(filtro.toUpperCase()) != -1) {
                this.s_filtro.push(this.servicios[i]);
            }
        }
    };
    HomeComponent.prototype.send_message = function (obra, servicio) {
        this.obra_mensaje = obra;
        this.servicio_mensaje = servicio;
        this.view_mensaje = true;
    };
    HomeComponent.prototype.view_msg = function () {
        this.view_mensaje = !this.view_mensaje;
    };
    HomeComponent.prototype.view_book = function () {
        this.view_libro = !this.view_libro;
    };
    HomeComponent.prototype.open_book = function (obra) {
        this.obra_libro = obra;
        this.view_libro = true;
    };
    HomeComponent.prototype.view_anota = function () {
        this.view_anotaciones = !this.view_anotaciones;
    };
    HomeComponent.prototype.open_anotaciones = function (obra) {
        var _this = this;
        this.rest.get('/anotaciones?OBRA=' + obra + '&USER=' + this.user).subscribe(function (data) {
            _this.obras_anotaciones = data;
            _this.obra_anotaciones = obra;
            _this.view_anotaciones = true;
        }, function (err) { return console.error(err); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home-cmp',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.RestService, index_2.UserService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Rhc2hib2FyZC9ob21lICgzwqogY29waWEpL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsc0JBQTRCLHlCQUF5QixDQUFDLENBQUE7QUFDdEQsc0JBQTRCLHlCQUF5QixDQUFDLENBQUE7QUFZdEQ7SUEyQkMsdUJBQVksSUFBZ0IsRUFBRSxJQUFnQjtRQVp0QyxpQkFBWSxHQUFXLEtBQUssQ0FBQztRQUk3QixlQUFVLEdBQVcsS0FBSyxDQUFDO1FBRzNCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQU1oQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxvQ0FBWSxHQUFuQjtRQUFBLGlCQVFDO1FBUEEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUNqQyxVQUFBLElBQUk7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUNNLG1DQUFXLEdBQWxCO1FBQUEsaUJBUUM7UUFQQSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxT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VUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNoRCxDQUFDO0lBQ0Qsd0NBQWdCLEdBQWhCLFVBQWlCLElBQVc7UUFBNUIsaUJBU0M7UUFSQSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBQyxJQUFJLEdBQUMsUUFBUSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQ2pFLFVBQUEsSUFBSTtZQUNILEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFDOUIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQzVCLENBQUM7SUFDSCxDQUFDO0lBaEtGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDLENBQUM7O3FCQUFBO0lBNEpGLG9CQUFDO0FBQUQsQ0ExSkEsQUEwSkMsSUFBQTtBQTFKWSxxQkFBYSxnQkEwSnpCLENBQUEiLCJmaWxlIjoiYXBwL21vZHVsZXMvZGFzaGJvYXJkL2hvbWUgKDPCqiBjb3BpYSkvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG4vKipcbipcdFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgRGFzaGJvYXJkQ29tcG9uZW50LlxuKi9cblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnaG9tZS1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydob21lLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuXHRwcml2YXRlIHJlc3Q6UmVzdFNlcnZpY2U7XG5cdC8vVkFSSUFCTEVTIERFIExPUyBGSUxUUk9TIFBPUiBTRVJWSUNJT1Ncblx0cHJpdmF0ZSBzZXJ2aWNpb3M6YW55W107XG5cdHByaXZhdGUgc19maWx0cm86YW55W107XG5cdC8vVkFSSUFCTEVTIERFIExPUyBNRU5TQUpFU1xuXHRwcml2YXRlIG1lbnNhamVzOmFueVtdO1xuXHRwcml2YXRlIHNfbWVuc2FqZXM6YW55W107XG5cdC8vVkFSSUFCTEVTIERFIExBUyBPQlJBU1xuXHRwcml2YXRlIG9icmFzOmFueVtdO1xuXHRwcml2YXRlIHNfb2JyYXM6YW55W107XG5cdC8vVkFSSUFCTEVTIERFIExBUyBBTEVSVEFTXG5cdHByaXZhdGUgYWxlcnRhczphbnlbXTtcblx0cHJpdmF0ZSBzX2FsZXJ0YXM6YW55W107XG5cdC8vQ09OVFJPTCBERSBNT0RBTCBNRU5TQUpFUztcblx0cHJpdmF0ZSB2aWV3X21lbnNhamU6Ym9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIG9icmFfbWVuc2FqZTpudW1iZXI7XG5cdHByaXZhdGUgc2VydmljaW9fbWVuc2FqZTpudW1iZXI7XG5cdC8vQ09OVFJPTCBERSBMSUJSTyBERSBPQlJBUztcblx0cHJpdmF0ZSB2aWV3X2xpYnJvOmJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBvYnJhX2xpYnJvOm51bWJlcjtcblx0Ly9BTk9UQUNJT05FU1xuXHRwcml2YXRlIHZpZXdfYW5vdGFjaW9uZXMgPSBmYWxzZTtcblx0cHJpdmF0ZSBvYnJhX2Fub3RhY2lvbmVzOm51bWJlcjtcblx0cHJpdmF0ZSBvYnJhc19hbm90YWNpb25lczphbnlbXTtcblx0cHJpdmF0ZSB1c2VyOm51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcihyZXN0OlJlc3RTZXJ2aWNlLCB1c2VyOlVzZXJTZXJ2aWNlKXtcblx0XHR0aGlzLnJlc3QgPSByZXN0O1xuXHRcdHRoaXMuZ2V0U2VydmljaW9zKCk7XG5cdFx0dGhpcy5nZXRNZW5zYWplcygpO1xuXHRcdHRoaXMuZ2V0T2JyYXMoKTtcblx0XHR0aGlzLmdldEFsZXJ0YXMoKTtcblx0XHR0aGlzLnVzZXIgPSB1c2VyLmdldFVzZXIoKS5JRF9VU0VSO1xuXHR9XG5cdC8vRklMVFJPUyBQT1IgU0VSVklDSU9cblx0cHVibGljIGdldFNlcnZpY2lvcygpe1xuXHRcdHRoaXMucmVzdC5nZXQoJy9zZXJ2aWNpb3MnKS5zdWJzY3JpYmUoXG5cdFx0ICAgIGRhdGEgPT4ge1xuXHRcdCAgICBcdHRoaXMuc2VydmljaW9zID0gZGF0YTtcblx0XHQgICAgXHR0aGlzLnNfZmlsdHJvID0gZGF0YTtcblx0XHQgICAgfSxcblx0XHQgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKVxuXHRcdCk7XG5cdH1cblx0cHVibGljIGdldE1lbnNhamVzKCl7XG5cdFx0dGhpcy5yZXN0LmdldCgnL21lbnNhamVzJykuc3Vic2NyaWJlKFxuXHRcdCAgICBkYXRhID0+IHtcblx0XHQgICAgXHR0aGlzLm1lbnNhamVzID0gZGF0YTtcblx0XHQgICAgXHR0aGlzLnNfbWVuc2FqZXMgPSBkYXRhO1xuXHRcdCAgICB9LFxuXHRcdCAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpXG5cdFx0KTtcblx0fVxuXHRwdWJsaWMgZ2V0QWxlcnRhcygpe1xuXHRcdHRoaXMucmVzdC5nZXQoJy9hbGVydGFzJykuc3Vic2NyaWJlKFxuXHRcdCAgICBkYXRhID0+IHtcblx0XHQgICAgXHR0aGlzLmFsZXJ0YXMgPSBkYXRhO1xuXHRcdCAgICBcdHRoaXMuc19hbGVydGFzID0gZGF0YTtcblx0XHQgICAgfSxcblx0XHQgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKVxuXHRcdCk7XG5cdH1cblx0cHVibGljIGdldE9icmFzKCl7XG5cdFx0dGhpcy5yZXN0LmdldCgnL29icmFzJykuc3Vic2NyaWJlKFxuXHRcdCAgICBkYXRhID0+IHtcblx0XHQgICAgXHR0aGlzLm9icmFzID0gZGF0YTtcblx0XHQgICAgXHR0aGlzLnNfb2JyYXMgPSBkYXRhO1xuXHRcdCAgICB9LFxuXHRcdCAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpXG5cdFx0KTtcblx0fVxuXHRmaWx0ZXJfYnlfc2VydmljZShmaWx0cm86c3RyaW5nKXtcblx0XHR0aGlzLnNfb2JyYXMgPSBbXTtcblx0XHRmb3IobGV0IGk9MDsgaSA8IHRoaXMub2JyYXMubGVuZ3RoOyBpKyspe1xuXHRcdFx0aWYodGhpcy5vYnJhc1tpXS5TRVJWSUNJTy5OT01CUkUudG9VcHBlckNhc2UoKSA9PSBmaWx0cm8udG9VcHBlckNhc2UoKSl7XG5cdFx0XHRcdHRoaXMuc19vYnJhcy5wdXNoKHRoaXMub2JyYXNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnNfbWVuc2FqZXMgPSBbXTtcblx0XHRmb3IobGV0IGk9MDsgaSA8IHRoaXMubWVuc2FqZXMubGVuZ3RoOyBpKyspe1xuXHRcdFx0aWYodGhpcy5tZW5zYWplc1tpXS5TRVJWSUNJTy5OT01CUkUudG9VcHBlckNhc2UoKSA9PSBmaWx0cm8udG9VcHBlckNhc2UoKSl7XG5cdFx0XHRcdHRoaXMuc19tZW5zYWplcy5wdXNoKHRoaXMubWVuc2FqZXNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnNfYWxlcnRhcyA9IFtdO1xuXHRcdGZvcihsZXQgaT0wOyBpIDwgdGhpcy5hbGVydGFzLmxlbmd0aDsgaSsrKXtcblx0XHRcdGlmKHRoaXMuYWxlcnRhc1tpXS5TRVJWSUNJTy5OT01CUkUudG9VcHBlckNhc2UoKSA9PSBmaWx0cm8udG9VcHBlckNhc2UoKSl7XG5cdFx0XHRcdHRoaXMuc19hbGVydGFzLnB1c2godGhpcy5hbGVydGFzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly9GSUxUUkFSIFNFUlZJQ0lPU1xuXHRwdWJsaWMgZmlsdHJhcl9zZXJ2aWNpbyhmaWx0cm86c3RyaW5nKXtcblx0XHRpZihmaWx0cm8gPT0gXCJcIil7XG5cdFx0XHR0aGlzLnNfZmlsdHJvID0gdGhpcy5zZXJ2aWNpb3M7XG5cdFx0XHR0aGlzLnNfbWVuc2FqZXMgPSB0aGlzLm1lbnNhamVzO1xuXHRcdFx0dGhpcy5zX29icmFzID0gdGhpcy5vYnJhcztcblx0XHRcdHRoaXMuc19hbGVydGFzID0gdGhpcy5hbGVydGFzO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnNfZmlsdHJvID0gW107XG5cdFx0Zm9yKGxldCBpPTA7IGkgPCB0aGlzLnNlcnZpY2lvcy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRpZih0aGlzLnNfZmlsdHJvLmxlbmd0aCA+PSA2KSBicmVhaztcblx0XHRcdGlmKHRoaXMuc2VydmljaW9zW2ldLk5PTUJSRS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZmlsdHJvLnRvVXBwZXJDYXNlKCkpICE9IC0xKXtcblx0XHRcdFx0dGhpcy5zX2ZpbHRyby5wdXNoKHRoaXMuc2VydmljaW9zW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly9GSUxUUkFSIFNFUlZJQ0lPU1xuXHRwdWJsaWMgZmlsdHJhcl9vYnJhcyhmaWx0cm86c3RyaW5nKXtcblx0XHRpZihmaWx0cm8gPT0gXCJcIil7XG5cdFx0XHR0aGlzLnNfZmlsdHJvID0gdGhpcy5zZXJ2aWNpb3M7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc19maWx0cm8gPSBbXTtcblx0XHRmb3IobGV0IGk9MDsgaSA8IHRoaXMuc2VydmljaW9zLmxlbmd0aDsgaSsrKXtcblx0XHRcdGlmKHRoaXMuc19maWx0cm8ubGVuZ3RoID49IDYpIGJyZWFrO1xuXHRcdFx0aWYodGhpcy5zZXJ2aWNpb3NbaV0uTk9NQlJFLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihmaWx0cm8udG9VcHBlckNhc2UoKSkgIT0gLTEpe1xuXHRcdFx0XHR0aGlzLnNfZmlsdHJvLnB1c2godGhpcy5zZXJ2aWNpb3NbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvL0VOVklBTU9TIE1FTlNBSkVTXG5cdHNlbmRfbWVzc2FnZShvYnJhOm51bWJlciwgc2VydmljaW86bnVtYmVyKXtcblx0XHR0aGlzLm9icmFfbWVuc2FqZSA9IG9icmE7XG5cdFx0dGhpcy5zZXJ2aWNpb19tZW5zYWplID0gc2VydmljaW87XG5cdFx0dGhpcy52aWV3X21lbnNhamUgPSB0cnVlO1xuXHR9XG5cdHZpZXdfbXNnKCl7XG5cdFx0dGhpcy52aWV3X21lbnNhamUgPSAhdGhpcy52aWV3X21lbnNhamU7XG5cdH1cblx0Ly9BQ0NFREVNT1MgQUwgTElCUk8gREUgT0JSQVNcblx0dmlld19ib29rKCl7XG5cdFx0dGhpcy52aWV3X2xpYnJvID0gIXRoaXMudmlld19saWJybztcblx0fVxuXHRvcGVuX2Jvb2sob2JyYTpudW1iZXIpe1xuXHRcdHRoaXMub2JyYV9saWJybyA9IG9icmE7XG5cdFx0dGhpcy52aWV3X2xpYnJvID0gdHJ1ZTtcblx0fVxuXHQvL0FOT1RBQ0lPTkVTXG5cdHZpZXdfYW5vdGEoKXtcblx0XHR0aGlzLnZpZXdfYW5vdGFjaW9uZXMgPSAhdGhpcy52aWV3X2Fub3RhY2lvbmVzO1xuXHR9XG5cdG9wZW5fYW5vdGFjaW9uZXMob2JyYTpudW1iZXIpe1xuXHRcdHRoaXMucmVzdC5nZXQoJy9hbm90YWNpb25lcz9PQlJBPScrb2JyYSsnJlVTRVI9Jyt0aGlzLnVzZXIpLnN1YnNjcmliZShcblx0XHQgICAgZGF0YSA9PiB7XG5cdFx0ICAgIFx0dGhpcy5vYnJhc19hbm90YWNpb25lcyA9IGRhdGE7XG5cdFx0ICAgIFx0dGhpcy5vYnJhX2Fub3RhY2lvbmVzID0gb2JyYTtcblx0XHQgICAgXHR0aGlzLnZpZXdfYW5vdGFjaW9uZXMgPSB0cnVlO1xuXHRcdCAgICB9LFxuXHRcdCAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpXG5cdFx0KTtcblx0fVxufVxuIl19
