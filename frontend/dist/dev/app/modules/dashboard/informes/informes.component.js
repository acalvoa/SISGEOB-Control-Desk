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
var InformesComponent = (function () {
    function InformesComponent(rest, user) {
        this.datasets = [];
        this.alertas = [];
        this.labels = [];
        this.labels_a = [];
        this.options = {
            responsive: true,
            legend: {
                position: 'right'
            }
        };
        this.inv_services = false;
        this.inReg = {
            NOMBRE: "",
            DESCRIPCION: "",
            ESTRUCTURA: [],
            USER: null
        };
        this.view = 'visor';
        this.rest = rest;
        this.user_service = user;
        this.getServicios();
        this.getInformes();
    }
    InformesComponent.prototype.getServicios = function () {
        var _this = this;
        this.rest.get('/servicios').subscribe(function (data) {
            var data_graph = {
                label: "Inversión por Servicio",
                data: []
            };
            var alertas_graph = {
                label: "Alertas por Servicio",
                data: []
            };
            var data_labels = [];
            for (var i = 0; i < data.length; i++) {
                var monto = 0;
                if (!data[i].OBRAS)
                    continue;
                for (var l = 0; l < data[i].OBRAS.length; l++) {
                    monto += data[i].OBRAS[l].MONTO;
                }
                data_labels.push(data[i].NOMBRE);
                data_graph.data.push(monto);
                alertas_graph.data.push(data[i].ALERTAS.length);
            }
            _this.labels = data_labels;
            _this.labels_a = data_labels;
            _this.datasets.push(data_graph);
            _this.alertas.push(alertas_graph);
            _this.inv_services = true;
        }, function (err) { return console.error(err); });
    };
    InformesComponent.prototype.filtrar_informe = function (filtro) {
        if (filtro == "") {
            this.s_informes = this.informes;
            return;
        }
        this.s_informes = [];
        for (var i = 0; i < this.informes.length; i++) {
            if (this.informes[i].NOMBRE.toUpperCase().indexOf(filtro.toUpperCase()) != -1) {
                this.s_informes.push(this.informes[i]);
            }
        }
    };
    InformesComponent.prototype.getInformes = function () {
        var _this = this;
        this.rest.get('/informes?USER=' + this.user_service.getUser().ID_USER).subscribe(function (data) {
            _this.informes = data;
            _this.s_informes = data;
        }, function (err) { return console.error(err); });
    };
    InformesComponent.prototype.save = function () {
        var _this = this;
        this.inReg.USER = this.user_service.getUser().ID_USER;
        this.rest.post(this.inReg, '/informes').subscribe(function (data) {
            _this.informes.push(data);
            _this.s_informes = _this.informes;
            _this.inReg = {
                NOMBRE: "",
                DESCRIPCION: "",
                ESTRUCTURA: []
            };
            _this.view = "visor";
        }, function (err) { return console.error(err); });
    };
    InformesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'informes-cmp',
            templateUrl: 'informes.component.html',
            styleUrls: ['informes.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.RestService, index_2.UserService])
    ], InformesComponent);
    return InformesComponent;
}());
exports.InformesComponent = InformesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Rhc2hib2FyZC9pbmZvcm1lcy9pbmZvcm1lcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxzQkFBNEIseUJBQXlCLENBQUMsQ0FBQTtBQUN0RCxzQkFBNEIseUJBQXlCLENBQUMsQ0FBQTtBQVl0RDtJQStCQywyQkFBWSxJQUFnQixFQUFFLElBQWdCO1FBM0J0QyxhQUFRLEdBQU8sRUFDdEIsQ0FBQztRQUNNLFlBQU8sR0FBTyxFQUNyQixDQUFDO1FBRU0sV0FBTSxHQUFPLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQU8sRUFBRSxDQUFDO1FBRWxCLFlBQU8sR0FBTztZQUNyQixVQUFVLEVBQUMsSUFBSTtZQUNmLE1BQU0sRUFBQztnQkFDTixRQUFRLEVBQUUsT0FBTzthQUNqQjtTQUNELENBQUM7UUFDTSxpQkFBWSxHQUFXLEtBQUssQ0FBQztRQUU3QixVQUFLLEdBQU87WUFDbkIsTUFBTSxFQUFFLEVBQUU7WUFDVixXQUFXLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBQyxFQUFFO1lBQ2IsSUFBSSxFQUFFLElBQUk7U0FDVixDQUFDO1FBSU0sU0FBSSxHQUFVLE9BQU8sQ0FBQztRQUc3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSx3Q0FBWSxHQUFuQjtRQUFBLGlCQThCQztRQTdCQSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQ2pDLFVBQUEsSUFBSTtZQUNILElBQUksVUFBVSxHQUFPO2dCQUNsQixLQUFLLEVBQUUsd0JBQXdCO2dCQUMvQixJQUFJLEVBQUUsRUFBRTth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LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2luZGV4Jztcbi8qKlxuKlx0VGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBEYXNoYm9hcmRDb21wb25lbnQuXG4qL1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdpbmZvcm1lcy1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ2luZm9ybWVzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnaW5mb3JtZXMuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSW5mb3JtZXNDb21wb25lbnQge1xuXHRwcml2YXRlIHJlc3Q6UmVzdFNlcnZpY2U7XG5cdHByaXZhdGUgdXNlcl9zZXJ2aWNlOlVzZXJTZXJ2aWNlO1xuXHQvL0VKRU3huZRMT1MgREUgR1JBRklDT1Ncblx0cHJpdmF0ZSBkYXRhc2V0czphbnkgPSBbXG5cdF07XG5cdHByaXZhdGUgYWxlcnRhczphbnkgPSBbXG5cdF07XG5cblx0cHJpdmF0ZSBsYWJlbHM6YW55ID0gW107XG5cdHByaXZhdGUgbGFiZWxzX2E6YW55ID0gW107XG5cblx0cHJpdmF0ZSBvcHRpb25zOmFueSA9IHtcblx0XHRyZXNwb25zaXZlOnRydWUsXG5cdFx0bGVnZW5kOntcblx0XHRcdHBvc2l0aW9uOiAncmlnaHQnXG5cdFx0fVxuXHR9O1xuXHRwcml2YXRlIGludl9zZXJ2aWNlczpib29sZWFuID0gZmFsc2U7XG5cdC8vIE1JUyBJTkZPUk1FU1xuXHRwcml2YXRlIGluUmVnOmFueSA9IHtcblx0XHROT01CUkU6IFwiXCIsXG5cdFx0REVTQ1JJUENJT046IFwiXCIsXG5cdFx0RVNUUlVDVFVSQTpbXSxcblx0XHRVU0VSOiBudWxsXG5cdH07XG5cdHByaXZhdGUgaW5mb3JtZXM6YW55W107XG5cdHByaXZhdGUgc19pbmZvcm1lczphbnlbXTtcblx0Ly9ERVNQTElFR1VFXG5cdHByaXZhdGUgdmlldzpzdHJpbmcgPSAndmlzb3InO1xuXHQvL0NPTlNUUlVDVE9SXG5cdGNvbnN0cnVjdG9yKHJlc3Q6UmVzdFNlcnZpY2UsIHVzZXI6VXNlclNlcnZpY2Upe1xuXHRcdHRoaXMucmVzdCA9IHJlc3Q7XG5cdFx0dGhpcy51c2VyX3NlcnZpY2UgPSB1c2VyO1xuXHRcdHRoaXMuZ2V0U2VydmljaW9zKCk7XG5cdFx0dGhpcy5nZXRJbmZvcm1lcygpO1xuXHR9XG5cdC8vRklMVFJPUyBQT1IgU0VSVklDSU9cblx0cHVibGljIGdldFNlcnZpY2lvcygpe1xuXHRcdHRoaXMucmVzdC5nZXQoJy9zZXJ2aWNpb3MnKS5zdWJzY3JpYmUoXG5cdFx0ICAgIGRhdGEgPT4ge1xuXHRcdCAgICBcdGxldCBkYXRhX2dyYXBoOmFueSA9IHtcblx0XHRcdCAgICAgIFx0bGFiZWw6IFwiSW52ZXJzacOzbiBwb3IgU2VydmljaW9cIixcblx0XHRcdCAgICAgIFx0ZGF0YTogW11cblx0XHRcdCAgICB9XG5cdFx0XHQgICAgbGV0IGFsZXJ0YXNfZ3JhcGg6YW55ID0ge1xuXHRcdFx0ICAgICAgXHRsYWJlbDogXCJBbGVydGFzIHBvciBTZXJ2aWNpb1wiLFxuXHRcdFx0ICAgICAgXHRkYXRhOiBbXVxuXHRcdFx0ICAgIH1cblx0XHRcdCAgICBsZXQgZGF0YV9sYWJlbHM6c3RyaW5nW10gPSBbXTtcblx0XHQgICAgXHRmb3IobGV0IGk9MDtpPGRhdGEubGVuZ3RoO2krKyl7XG5cdFx0ICAgIFx0XHRsZXQgbW9udG8gPSAwO1xuXHRcdCAgICBcdFx0aWYoIWRhdGFbaV0uT0JSQVMpIGNvbnRpbnVlO1xuXHRcdCAgICBcdFx0Zm9yKGxldCBsPTA7IGw8ZGF0YVtpXS5PQlJBUy5sZW5ndGg7bCsrKXtcblx0XHQgICAgXHRcdFx0bW9udG8gKz0gZGF0YVtpXS5PQlJBU1tsXS5NT05UTztcblx0XHQgICAgXHRcdH1cblx0XHQgICAgXHRcdGRhdGFfbGFiZWxzLnB1c2goZGF0YVtpXS5OT01CUkUpO1xuXHRcdCAgICBcdFx0ZGF0YV9ncmFwaC5kYXRhLnB1c2gobW9udG8pO1xuXHRcdCAgICBcdFx0YWxlcnRhc19ncmFwaC5kYXRhLnB1c2goZGF0YVtpXS5BTEVSVEFTLmxlbmd0aCk7XG5cdFx0ICAgIFx0fVxuXHRcdCAgICBcdHRoaXMubGFiZWxzID0gZGF0YV9sYWJlbHM7XG5cdFx0ICAgIFx0dGhpcy5sYWJlbHNfYSA9IGRhdGFfbGFiZWxzO1xuXHRcdCAgICBcdHRoaXMuZGF0YXNldHMucHVzaChkYXRhX2dyYXBoKTtcblx0XHQgICAgXHR0aGlzLmFsZXJ0YXMucHVzaChhbGVydGFzX2dyYXBoKTtcblx0XHQgICAgXHR0aGlzLmludl9zZXJ2aWNlcyA9IHRydWU7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVycilcblx0XHQpO1xuXHR9XG5cdHB1YmxpYyBmaWx0cmFyX2luZm9ybWUoZmlsdHJvOnN0cmluZyl7XG5cdFx0aWYoZmlsdHJvID09IFwiXCIpe1xuXHRcdFx0dGhpcy5zX2luZm9ybWVzID0gdGhpcy5pbmZvcm1lcztcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5zX2luZm9ybWVzID0gW107XG5cdFx0Zm9yKGxldCBpPTA7IGkgPCB0aGlzLmluZm9ybWVzLmxlbmd0aDsgaSsrKXtcblx0XHRcdGlmKHRoaXMuaW5mb3JtZXNbaV0uTk9NQlJFLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihmaWx0cm8udG9VcHBlckNhc2UoKSkgIT0gLTEpe1xuXHRcdFx0XHR0aGlzLnNfaW5mb3JtZXMucHVzaCh0aGlzLmluZm9ybWVzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly9GSUxUUk9TIFBPUiBTRVJWSUNJT1xuXHRwdWJsaWMgZ2V0SW5mb3JtZXMoKXtcblxuXHRcdHRoaXMucmVzdC5nZXQoJy9pbmZvcm1lcz9VU0VSPScrdGhpcy51c2VyX3NlcnZpY2UuZ2V0VXNlcigpLklEX1VTRVIpLnN1YnNjcmliZShcblx0XHQgICAgZGF0YSA9PiB7XG5cdFx0ICAgIFx0dGhpcy5pbmZvcm1lcyA9IGRhdGE7XG5cdFx0ICAgIFx0dGhpcy5zX2luZm9ybWVzID0gZGF0YTtcblx0XHQgICAgfSxcblx0XHQgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKVxuXHRcdCk7XG5cdH1cblx0cHVibGljIHNhdmUoKXtcblx0XHR0aGlzLmluUmVnLlVTRVIgPSB0aGlzLnVzZXJfc2VydmljZS5nZXRVc2VyKCkuSURfVVNFUjtcblx0XHR0aGlzLnJlc3QucG9zdCh0aGlzLmluUmVnLCAnL2luZm9ybWVzJykuc3Vic2NyaWJlKFxuXHRcdCAgICBkYXRhID0+IHtcblx0XHQgICAgXHR0aGlzLmluZm9ybWVzLnB1c2goZGF0YSk7XG5cdFx0ICAgIFx0dGhpcy5zX2luZm9ybWVzID0gdGhpcy5pbmZvcm1lcztcblx0XHQgICAgXHR0aGlzLmluUmVnID0ge1xuXHRcdFx0XHRcdE5PTUJSRTogXCJcIixcblx0XHRcdFx0XHRERVNDUklQQ0lPTjogXCJcIixcblx0XHRcdFx0XHRFU1RSVUNUVVJBOltdXG5cdFx0XHRcdH07XG5cdFx0ICAgIFx0dGhpcy52aWV3ID0gXCJ2aXNvclwiO1xuXHRcdCAgICB9LFxuXHRcdCAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpXG5cdFx0KTtcblx0fVxuXHRcbn1cbiJdfQ==
