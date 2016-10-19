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
        this.areas = [];
        this.action = "view";
        this.newuser = {
            NAME: "",
            LASTNAME: "",
            EMAIL: "",
            PASSWORD: "",
            ROLE: 1,
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
                ROLE: 1
            };
        }, function (err) { return console.error(err); });
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users-module',
            templateUrl: 'users.component.html',
            styleUrls: ['users.component.css'],
        }), 
        __metadata('design:paramtypes', [index_1.UserService, index_2.RestService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Rhc2hib2FyZC91c2Vyc2QvdXNlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsc0JBQTRCLHlCQUF5QixDQUFDLENBQUE7QUFDdEQsc0JBQTRCLHlCQUF5QixDQUFDLENBQUE7QUFTdEQ7SUFzQ0Msd0JBQVksSUFBZ0IsRUFBRSxJQUFnQjtRQW5DdkMsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQUNyQixZQUFPLEdBQVMsQ0FBQztnQkFDdkIsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLE1BQU07YUFDYixFQUFDO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsVUFBVTthQUNqQixFQUFDO2dCQUNELElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxPQUFPO2FBQ2QsRUFBQztnQkFDRCxJQUFJLEVBQUUsS0FBSztnQkFDWCxLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUUsWUFBWTthQUN0QixDQUFDLENBQUM7UUFDSSxZQUFPLEdBQU87WUFDcEIsS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsSUFBSTtZQUNkLE9BQU8sRUFBRSxJQUFJO1lBQ2IsTUFBTSxFQUFFLElBQUk7WUFDWixJQUFJLEVBQUUsSUFBSTtTQUNWLENBQUM7UUFDSyxVQUFLLEdBQVMsRUFBRSxDQUFDO1FBQ2pCLFVBQUssR0FBUyxFQUFFLENBQUM7UUFFaEIsV0FBTSxHQUFVLE1BQU0sQ0FBQztRQUV2QixZQUFPLEdBQUc7WUFDakIsSUFBSSxFQUFFLEVBQUU7WUFDUixRQUFRLEVBQUUsRUFBRTtZQUNaLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEVBQUU7WUFDWixJQUFJLEVBQUMsQ0FBQztTQUNOLENBQUM7UUFHRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBQ0QsZ0NBQU8sR0FBUDtRQUFBLGlCQVFDO1FBUEEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQzFCLFVBQUEsSUFBSTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbkIsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FDNUIsQ0FBQztJQUNILENBQUM7SUFDRCxtQ0FBVSxHQUFWLFVBQVcsS0FBUztRQUFwQixpQkFnQkM7UUFmQSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQzVDLFVBQUEsSUFBSTtZQUNILEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxPQUFPLEdBQUc7Z0JBQ2pCLElBQUksRUFBRSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxFQUFFO2dCQUNaLEtBQUssRUFBRSxFQUFFO2dCQUNULFFBQVEsRUFBRSxFQUFFO2dCQUNaLElBQUksRUFBQyxDQUFDO2FBQ04sQ0FBQztRQUNBLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQzVCLENBQUM7SUFDSCxDQUFDO0lBNUVGO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FFckMsQ0FBQzs7c0JBQUE7SUF3RUYscUJBQUM7QUFBRCxDQXRFQSxBQXNFQyxJQUFBO0FBdEVZLHNCQUFjLGlCQXNFMUIsQ0FBQSIsImZpbGUiOiJhcHAvbW9kdWxlcy9kYXNoYm9hcmQvdXNlcnNkL3VzZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBSZXN0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd1c2Vycy1tb2R1bGUnLFxuICAgIHRlbXBsYXRlVXJsOiAndXNlcnMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWyd1c2Vycy5jb21wb25lbnQuY3NzJ10sXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBVc2Vyc0NvbXBvbmVudCB7XG5cdHByaXZhdGUgdXNlcjpVc2VyU2VydmljZTtcblx0cHJpdmF0ZSByZXN0OlJlc3RTZXJ2aWNlO1xuXHRwdWJsaWMgcm93czpBcnJheTxhbnk+ID0gW107XG5cdHB1YmxpYyBjb2x1bW5zOmFueVtdID0gW3tcblx0XHRuYW1lOiBcIk5vbWJyZVwiLFxuXHRcdG1hdGNoOiBcIk5BTUVcIlxuXHR9LHtcblx0XHRuYW1lOiBcIkFwZWxsaWRvXCIsXG5cdFx0bWF0Y2g6IFwiTEFTVE5BTUVcIlxuXHR9LHtcblx0XHRuYW1lOiBcIkVtYWlsXCIsXG5cdFx0bWF0Y2g6IFwiRU1BSUxcIlxuXHR9LHtcblx0XHRuYW1lOiBcIlJvbFwiLFxuXHRcdG1hdGNoOiBcIlJPTEVcIixcblx0XHRzdWJtYXRjaDogXCJOT01CUkVfUk9MXCJcblx0fV07XG5cdHB1YmxpYyB0Y29uZmlnOmFueSA9IHtcblx0XHRpdGVtczogMjAsXG5cdFx0cGFnaW5hdGU6IHRydWUsXG5cdFx0ZmlsdHJvczogdHJ1ZSxcblx0XHRkZWxldGU6IHRydWUsXG5cdFx0ZWRpdDogdHJ1ZVxuXHR9O1xuXHRwdWJsaWMgZGF0YXM6YW55W10gPSBbXTtcblx0cHVibGljIGFyZWFzOmFueVtdID0gW107XG5cdC8vUEFOVEFMTEFcblx0cHJpdmF0ZSBhY3Rpb246c3RyaW5nID0gXCJ2aWV3XCI7XG5cdC8vRUxFTUVOVE9cblx0cHJpdmF0ZSBuZXd1c2VyID0ge1xuXHRcdE5BTUU6IFwiXCIsXG5cdFx0TEFTVE5BTUU6IFwiXCIsXG5cdFx0RU1BSUw6IFwiXCIsXG5cdFx0UEFTU1dPUkQ6IFwiXCIsXG5cdFx0Uk9MRToxLFxuXHR9O1xuXHQvL0NPTlNUUlVDVE9SXG5cdGNvbnN0cnVjdG9yKHVzZXI6VXNlclNlcnZpY2UsIHJlc3Q6UmVzdFNlcnZpY2Upe1xuXHRcdHRoaXMucmVzdCA9IHJlc3Q7XG5cdFx0dGhpcy51c2VyID0gdXNlcjtcblx0XHR0aGlzLnVzZXIuaXNBZG1pbigpO1xuXHRcdHRoaXMuZ2V0dXNlcigpO1xuXHR9XG5cdGdldHVzZXIoKXtcblx0XHR0aGlzLnVzZXIuZ2V0VXNlcnMoKS5zdWJzY3JpYmUoXG5cdFx0ICAgIGRhdGEgPT4ge1xuXHRcdCAgICBcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdCAgICBcdHRoaXMuZGF0YXMgPSBkYXRhO1xuXHRcdCAgICB9LFxuXHRcdCAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpXG5cdFx0KTtcblx0fVxuXHRjcmVhdGVVc2VyKGV2ZW50OmFueSl7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnJlc3QucG9zdCh0aGlzLm5ld3VzZXIsICcvdXNlcnMnKS5zdWJzY3JpYmUoXG5cdFx0ICAgIGRhdGEgPT4ge1xuXHRcdCAgICBcdHRoaXMuZGF0YXMucHVzaChkYXRhKTtcblx0XHQgICAgXHR0aGlzLmFjdGlvbiA9ICd2aWV3Jztcblx0XHQgICAgXHR0aGlzLm5ld3VzZXIgPSB7XG5cdFx0XHRcdFx0TkFNRTogXCJcIixcblx0XHRcdFx0XHRMQVNUTkFNRTogXCJcIixcblx0XHRcdFx0XHRFTUFJTDogXCJcIixcblx0XHRcdFx0XHRQQVNTV09SRDogXCJcIixcblx0XHRcdFx0XHRST0xFOjFcblx0XHRcdFx0fTtcblx0XHQgICAgfSxcblx0XHQgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKVxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==
