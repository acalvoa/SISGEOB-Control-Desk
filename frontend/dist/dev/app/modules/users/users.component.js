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
var UsersComponent = (function () {
    function UsersComponent(user, rest) {
        this.rows = [];
        this.columns = [{
                name: "Nombre",
                match: "NAME"
            }, {
                name: "Apellido",
                match: "LASTNAME"
            }, {
                name: "Email",
                match: "EMAIL"
            }, {
                name: "Sede",
                match: "SEDE",
                submatch: "NOMBRE_SEDE"
            }, {
                name: "Area",
                match: "AREA",
                submatch: "NOMBRE_AREA"
            }, {
                name: "Rol",
                match: "ROLE",
                submatch: "NOMBRE_ROL"
            }];
        this.tconfig = {
            items: 20,
            paginate: true,
            filtros: true,
            delete: true,
            edit: true
        };
        this.datas = [];
        this.sedes = [];
        this.areas = [];
        this.action = "view";
        this.newuser = {
            NAME: "",
            LASTNAME: "",
            EMAIL: "",
            PASSWORD: "",
            SEDE: "",
            ROLE: 1,
            AREA: ""
        };
        this.rest = rest;
        this.user = user;
        this.user.isAdmin();
        this.getuser();
    }
    UsersComponent.prototype.getuser = function () {
        var _this = this;
        this.user.getUsers().subscribe(function (data) {
            console.log(data);
            _this.datas = data;
        }, function (err) { return console.error(err); });
    };
    UsersComponent.prototype.viewcreate = function () {
        var _this = this;
        this.rest.get('/sedes').subscribe(function (data) {
            console.log(data);
            _this.sedes = data.sedes;
            _this.action = 'create';
        }, function (err) { return console.error(err); });
    };
    UsersComponent.prototype.createUser = function (event) {
        var _this = this;
        event.preventDefault();
        this.rest.post(this.newuser, '/users').subscribe(function (data) {
            _this.datas.push(data);
            _this.action = 'view';
            _this.newuser = {
                NAME: "",
                LASTNAME: "",
                EMAIL: "",
                PASSWORD: "",
                SEDE: "",
                ROLE: 1,
                AREA: ""
            };
        }, function (err) { return console.error(err); });
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users-module',
            templateUrl: 'users.component.html',
            styleUrls: ['users.component.scss'],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof index_1.UserService !== 'undefined' && index_1.UserService) === 'function' && _a) || Object, (typeof (_b = typeof index_2.RestService !== 'undefined' && index_2.RestService) === 'function' && _b) || Object])
    ], UsersComponent);
    return UsersComponent;
    var _a, _b;
}());
exports.UsersComponent = UsersComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUE0Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3RELHNCQUE0Qix5QkFBeUIsQ0FBQyxDQUFBO0FBU3REO0lBaURDLHdCQUFZLElBQWdCLEVBQUUsSUFBZ0I7UUE5Q3ZDLFNBQUksR0FBYyxFQUFFLENBQUM7UUFDckIsWUFBTyxHQUFTLENBQUM7Z0JBQ3ZCLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxNQUFNO2FBQ2IsRUFBQztnQkFDRCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLFVBQVU7YUFDakIsRUFBQztnQkFDRCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsT0FBTzthQUNkLEVBQUM7Z0JBQ0QsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFLGFBQWE7YUFDdkIsRUFBQztnQkFDRCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUUsYUFBYTthQUN2QixFQUFDO2dCQUNELElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRSxZQUFZO2FBQ3RCLENBQUMsQ0FBQztRQUNJLFlBQU8sR0FBTztZQUNwQixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTyxFQUFFLElBQUk7WUFDYixNQUFNLEVBQUUsSUFBSTtZQUNaLElBQUksRUFBRSxJQUFJO1NBQ1YsQ0FBQztRQUNLLFVBQUssR0FBUyxFQUFFLENBQUM7UUFDakIsVUFBSyxHQUFTLEVBQUUsQ0FBQztRQUNqQixVQUFLLEdBQVMsRUFBRSxDQUFDO1FBRWhCLFdBQU0sR0FBVSxNQUFNLENBQUM7UUFFdkIsWUFBTyxHQUFHO1lBQ2pCLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxFQUFFO1lBQ1osSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUMsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFO1NBQ1IsQ0FBQztRQUdELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxnQ0FBTyxHQUFQO1FBQUEsaUJBUUM7UUFQQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FDMUIsVUFBQSxJQUFJO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUNELG1DQUFVLEdBQVY7UUFBQSxpQkFTQztRQVJBLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FDN0IsVUFBQSxJQUFJO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDeEIsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FDNUIsQ0FBQztJQUNILENBQUM7SUFDRCxtQ0FBVSxHQUFWLFVBQVcsS0FBUztRQUFwQixpQkFrQkM7UUFqQkEsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUM1QyxVQUFBLElBQUk7WUFDSCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixLQUFJLENBQUMsT0FBTyxHQUFHO2dCQUNqQixJQUFJLEVBQUUsRUFBRTtnQkFDUixRQUFRLEVBQUUsRUFBRTtnQkFDWixLQUFLLEVBQUUsRUFBRTtnQkFDVCxRQUFRLEVBQUUsRUFBRTtnQkFDWixJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUMsQ0FBQztnQkFDTixJQUFJLEVBQUUsRUFBRTthQUNSLENBQUM7UUFDQSxDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUM1QixDQUFDO0lBQ0gsQ0FBQztJQW5HRjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBRXRDLENBQUM7O3NCQUFBO0lBK0ZGLHFCQUFDOztBQUFELENBN0ZBLEFBNkZDLElBQUE7QUE3Rlksc0JBQWMsaUJBNkYxQixDQUFBIiwiZmlsZSI6ImFwcC9tb2R1bGVzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBSZXN0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd1c2Vycy1tb2R1bGUnLFxuICAgIHRlbXBsYXRlVXJsOiAndXNlcnMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWyd1c2Vycy5jb21wb25lbnQuc2NzcyddLFxuXG59KVxuXG5leHBvcnQgY2xhc3MgVXNlcnNDb21wb25lbnQge1xuXHRwcml2YXRlIHVzZXI6VXNlclNlcnZpY2U7XG5cdHByaXZhdGUgcmVzdDpSZXN0U2VydmljZTtcblx0cHVibGljIHJvd3M6QXJyYXk8YW55PiA9IFtdO1xuXHRwdWJsaWMgY29sdW1uczphbnlbXSA9IFt7XG5cdFx0bmFtZTogXCJOb21icmVcIixcblx0XHRtYXRjaDogXCJOQU1FXCJcblx0fSx7XG5cdFx0bmFtZTogXCJBcGVsbGlkb1wiLFxuXHRcdG1hdGNoOiBcIkxBU1ROQU1FXCJcblx0fSx7XG5cdFx0bmFtZTogXCJFbWFpbFwiLFxuXHRcdG1hdGNoOiBcIkVNQUlMXCJcblx0fSx7XG5cdFx0bmFtZTogXCJTZWRlXCIsXG5cdFx0bWF0Y2g6IFwiU0VERVwiLFxuXHRcdHN1Ym1hdGNoOiBcIk5PTUJSRV9TRURFXCJcblx0fSx7XG5cdFx0bmFtZTogXCJBcmVhXCIsXG5cdFx0bWF0Y2g6IFwiQVJFQVwiLFxuXHRcdHN1Ym1hdGNoOiBcIk5PTUJSRV9BUkVBXCJcblx0fSx7XG5cdFx0bmFtZTogXCJSb2xcIixcblx0XHRtYXRjaDogXCJST0xFXCIsXG5cdFx0c3VibWF0Y2g6IFwiTk9NQlJFX1JPTFwiXG5cdH1dO1xuXHRwdWJsaWMgdGNvbmZpZzphbnkgPSB7XG5cdFx0aXRlbXM6IDIwLFxuXHRcdHBhZ2luYXRlOiB0cnVlLFxuXHRcdGZpbHRyb3M6IHRydWUsXG5cdFx0ZGVsZXRlOiB0cnVlLFxuXHRcdGVkaXQ6IHRydWVcblx0fTtcblx0cHVibGljIGRhdGFzOmFueVtdID0gW107XG5cdHB1YmxpYyBzZWRlczphbnlbXSA9IFtdO1xuXHRwdWJsaWMgYXJlYXM6YW55W10gPSBbXTtcblx0Ly9QQU5UQUxMQVxuXHRwcml2YXRlIGFjdGlvbjpzdHJpbmcgPSBcInZpZXdcIjtcblx0Ly9FTEVNRU5UT1xuXHRwcml2YXRlIG5ld3VzZXIgPSB7XG5cdFx0TkFNRTogXCJcIixcblx0XHRMQVNUTkFNRTogXCJcIixcblx0XHRFTUFJTDogXCJcIixcblx0XHRQQVNTV09SRDogXCJcIixcblx0XHRTRURFOiBcIlwiLFxuXHRcdFJPTEU6MSxcblx0XHRBUkVBOiBcIlwiXG5cdH07XG5cdC8vQ09OU1RSVUNUT1Jcblx0Y29uc3RydWN0b3IodXNlcjpVc2VyU2VydmljZSwgcmVzdDpSZXN0U2VydmljZSl7XG5cdFx0dGhpcy5yZXN0ID0gcmVzdDtcblx0XHR0aGlzLnVzZXIgPSB1c2VyO1xuXHRcdHRoaXMudXNlci5pc0FkbWluKCk7XG5cdFx0dGhpcy5nZXR1c2VyKCk7XG5cdH1cblx0Z2V0dXNlcigpe1xuXHRcdHRoaXMudXNlci5nZXRVc2VycygpLnN1YnNjcmliZShcblx0XHQgICAgZGF0YSA9PiB7XG5cdFx0ICAgIFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0ICAgIFx0dGhpcy5kYXRhcyA9IGRhdGE7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVycilcblx0XHQpO1xuXHR9XG5cdHZpZXdjcmVhdGUoKXtcblx0XHR0aGlzLnJlc3QuZ2V0KCcvc2VkZXMnKS5zdWJzY3JpYmUoXG5cdFx0ICAgIGRhdGEgPT4ge1xuXHRcdCAgICBcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdCAgICBcdHRoaXMuc2VkZXMgPSBkYXRhLnNlZGVzO1xuXHRcdCAgICBcdHRoaXMuYWN0aW9uID0gJ2NyZWF0ZSc7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVycilcblx0XHQpO1xuXHR9XG5cdGNyZWF0ZVVzZXIoZXZlbnQ6YW55KXtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMucmVzdC5wb3N0KHRoaXMubmV3dXNlciwgJy91c2VycycpLnN1YnNjcmliZShcblx0XHQgICAgZGF0YSA9PiB7XG5cdFx0ICAgIFx0dGhpcy5kYXRhcy5wdXNoKGRhdGEpO1xuXHRcdCAgICBcdHRoaXMuYWN0aW9uID0gJ3ZpZXcnO1xuXHRcdCAgICBcdHRoaXMubmV3dXNlciA9IHtcblx0XHRcdFx0XHROQU1FOiBcIlwiLFxuXHRcdFx0XHRcdExBU1ROQU1FOiBcIlwiLFxuXHRcdFx0XHRcdEVNQUlMOiBcIlwiLFxuXHRcdFx0XHRcdFBBU1NXT1JEOiBcIlwiLFxuXHRcdFx0XHRcdFNFREU6IFwiXCIsXG5cdFx0XHRcdFx0Uk9MRToxLFxuXHRcdFx0XHRcdEFSRUE6IFwiXCJcblx0XHRcdFx0fTtcblx0XHQgICAgfSxcblx0XHQgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKVxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==
