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
        this.sedes = [];
        this.areas = [];
        this.action = "view";
        this.newuser = {
            NAME: "",
            LASTNAME: "",
            EMAIL: "",
            PASSWORD: "",
            ROLE: 1
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
            moduleId: module.id,
            selector: 'users-cmp',
            templateUrl: 'users.component.html',
            styleUrls: ['users.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.UserService, index_2.RestService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Rhc2hib2FyZC91c2Vycy91c2Vycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxzQkFBNEIseUJBQXlCLENBQUMsQ0FBQTtBQUN0RCxzQkFBNEIseUJBQXlCLENBQUMsQ0FBQTtBQVl0RDtJQXVDQyx3QkFBWSxJQUFnQixFQUFFLElBQWdCO1FBcEN2QyxTQUFJLEdBQWMsRUFBRSxDQUFDO1FBQ3JCLFlBQU8sR0FBUyxDQUFDO2dCQUN2QixJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsTUFBTTthQUNiLEVBQUM7Z0JBQ0QsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxVQUFVO2FBQ2pCLEVBQUM7Z0JBQ0QsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLE9BQU87YUFDZCxFQUFDO2dCQUNELElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRSxZQUFZO2FBQ3RCLENBQUMsQ0FBQztRQUNJLFlBQU8sR0FBTztZQUNwQixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTyxFQUFFLElBQUk7WUFDYixNQUFNLEVBQUUsSUFBSTtZQUNaLElBQUksRUFBRSxJQUFJO1NBQ1YsQ0FBQztRQUNLLFVBQUssR0FBUyxFQUFFLENBQUM7UUFDakIsVUFBSyxHQUFTLEVBQUUsQ0FBQztRQUNqQixVQUFLLEdBQVMsRUFBRSxDQUFDO1FBRWhCLFdBQU0sR0FBVSxNQUFNLENBQUM7UUFFdkIsWUFBTyxHQUFHO1lBQ2pCLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxFQUFFO1lBQ1osSUFBSSxFQUFDLENBQUM7U0FDTixDQUFDO1FBR0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUNELGdDQUFPLEdBQVA7UUFBQSxpQkFRQztRQVBBLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUMxQixVQUFBLElBQUk7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ25CLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQzVCLENBQUM7SUFDSCxDQUFDO0lBQ0QsbUNBQVUsR0FBVixVQUFXLEtBQVM7UUFBcEIsaUJBZ0JDO1FBZkEsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUM1QyxVQUFBLElBQUk7WUFDSCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixLQUFJLENBQUMsT0FBTyxHQUFHO2dCQUNqQixJQUFJLEVBQUUsRUFBRTtnQkFDUixRQUFRLEVBQUUsRUFBRTtnQkFDWixLQUFLLEVBQUUsRUFBRTtnQkFDVCxRQUFRLEVBQUUsRUFBRTtnQkFDWixJQUFJLEVBQUMsQ0FBQzthQUNOLENBQUM7UUFDQSxDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUM1QixDQUFDO0lBQ0gsQ0FBQztJQTdFRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHNCQUFzQjtZQUNoQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNyQyxDQUFDOztzQkFBQTtJQXlFRixxQkFBQztBQUFELENBdkVBLEFBdUVDLElBQUE7QUF2RVksc0JBQWMsaUJBdUUxQixDQUFBIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2Rhc2hib2FyZC91c2Vycy91c2Vycy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgUmVzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG4vKipcbipcdFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgRGFzaGJvYXJkQ29tcG9uZW50LlxuKi9cblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAndXNlcnMtY21wJyxcblx0dGVtcGxhdGVVcmw6ICd1c2Vycy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3VzZXJzLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFVzZXJzQ29tcG9uZW50IHtcblx0cHJpdmF0ZSB1c2VyOlVzZXJTZXJ2aWNlO1xuXHRwcml2YXRlIHJlc3Q6UmVzdFNlcnZpY2U7XG5cdHB1YmxpYyByb3dzOkFycmF5PGFueT4gPSBbXTtcblx0cHVibGljIGNvbHVtbnM6YW55W10gPSBbe1xuXHRcdG5hbWU6IFwiTm9tYnJlXCIsXG5cdFx0bWF0Y2g6IFwiTkFNRVwiXG5cdH0se1xuXHRcdG5hbWU6IFwiQXBlbGxpZG9cIixcblx0XHRtYXRjaDogXCJMQVNUTkFNRVwiXG5cdH0se1xuXHRcdG5hbWU6IFwiRW1haWxcIixcblx0XHRtYXRjaDogXCJFTUFJTFwiXG5cdH0se1xuXHRcdG5hbWU6IFwiUm9sXCIsXG5cdFx0bWF0Y2g6IFwiUk9MRVwiLFxuXHRcdHN1Ym1hdGNoOiBcIk5PTUJSRV9ST0xcIlxuXHR9XTtcblx0cHVibGljIHRjb25maWc6YW55ID0ge1xuXHRcdGl0ZW1zOiAyMCxcblx0XHRwYWdpbmF0ZTogdHJ1ZSxcblx0XHRmaWx0cm9zOiB0cnVlLFxuXHRcdGRlbGV0ZTogdHJ1ZSxcblx0XHRlZGl0OiB0cnVlXG5cdH07XG5cdHB1YmxpYyBkYXRhczphbnlbXSA9IFtdO1xuXHRwdWJsaWMgc2VkZXM6YW55W10gPSBbXTtcblx0cHVibGljIGFyZWFzOmFueVtdID0gW107XG5cdC8vUEFOVEFMTEFcblx0cHJpdmF0ZSBhY3Rpb246c3RyaW5nID0gXCJ2aWV3XCI7XG5cdC8vRUxFTUVOVE9cblx0cHJpdmF0ZSBuZXd1c2VyID0ge1xuXHRcdE5BTUU6IFwiXCIsXG5cdFx0TEFTVE5BTUU6IFwiXCIsXG5cdFx0RU1BSUw6IFwiXCIsXG5cdFx0UEFTU1dPUkQ6IFwiXCIsXG5cdFx0Uk9MRToxXG5cdH07XG5cdC8vQ09OU1RSVUNUT1Jcblx0Y29uc3RydWN0b3IodXNlcjpVc2VyU2VydmljZSwgcmVzdDpSZXN0U2VydmljZSl7XG5cdFx0dGhpcy5yZXN0ID0gcmVzdDtcblx0XHR0aGlzLnVzZXIgPSB1c2VyO1xuXHRcdHRoaXMudXNlci5pc0FkbWluKCk7XG5cdFx0dGhpcy5nZXR1c2VyKCk7XG5cdH1cblx0Z2V0dXNlcigpe1xuXHRcdHRoaXMudXNlci5nZXRVc2VycygpLnN1YnNjcmliZShcblx0XHQgICAgZGF0YSA9PiB7XG5cdFx0ICAgIFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0ICAgIFx0dGhpcy5kYXRhcyA9IGRhdGE7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVycilcblx0XHQpO1xuXHR9XG5cdGNyZWF0ZVVzZXIoZXZlbnQ6YW55KXtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMucmVzdC5wb3N0KHRoaXMubmV3dXNlciwgJy91c2VycycpLnN1YnNjcmliZShcblx0XHQgICAgZGF0YSA9PiB7XG5cdFx0ICAgIFx0dGhpcy5kYXRhcy5wdXNoKGRhdGEpO1xuXHRcdCAgICBcdHRoaXMuYWN0aW9uID0gJ3ZpZXcnO1xuXHRcdCAgICBcdHRoaXMubmV3dXNlciA9IHtcblx0XHRcdFx0XHROQU1FOiBcIlwiLFxuXHRcdFx0XHRcdExBU1ROQU1FOiBcIlwiLFxuXHRcdFx0XHRcdEVNQUlMOiBcIlwiLFxuXHRcdFx0XHRcdFBBU1NXT1JEOiBcIlwiLFxuXHRcdFx0XHRcdFJPTEU6MVxuXHRcdFx0XHR9O1xuXHRcdCAgICB9LFxuXHRcdCAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpXG5cdFx0KTtcblx0fVxufVxuIl19
