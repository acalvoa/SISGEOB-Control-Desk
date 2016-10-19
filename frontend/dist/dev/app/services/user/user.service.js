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
var index_1 = require('../../shared/index');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
var UserService = (function () {
    function UserService(http, router) {
        this.router = router;
        this.http = http;
        this.status = false;
    }
    UserService.prototype.restore = function () {
        var _this = this;
        var header = this.createHeaders();
        return this.http.get(index_1.Config.API + '/users/me', {
            headers: header,
            withCredentials: true
        })
            .map(function (res) {
            var response = res.json();
            if (response.RESPONSE === 200) {
                _this.user = response.USER;
                _this.status = true;
                return true;
            }
            _this.router.navigate(['/login']);
            return false;
        });
    };
    UserService.prototype.createHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    };
    UserService.prototype.login = function (username, password) {
        var _this = this;
        var body = "email=" + username + "&password=" + password;
        var header = this.createHeaders();
        return this.http.post(index_1.Config.API + '/login/admin', body, {
            headers: header,
            withCredentials: true
        })
            .map(function (res) {
            var response = res.json();
            if (response.RESPONSE === 200) {
                _this.user = response.USER;
                _this.status = true;
                return true;
            }
            return false;
        });
    };
    UserService.prototype.logout = function () {
        var _this = this;
        var header = this.createHeaders();
        return this.http.get(index_1.Config.API + '/users/logout', {
            headers: header,
            withCredentials: true
        })
            .map(function (res) {
            var response = res.json();
            if (response.RESPONSE === 200) {
                _this.status = false;
                _this.user = null;
                return true;
            }
            return false;
        });
    };
    UserService.prototype.isLogged = function () {
        return this.restore();
    };
    UserService.prototype.getUser = function () {
        if (this.status) {
            return this.user;
        }
        else {
            return null;
        }
    };
    UserService.prototype.isAdmin = function () {
        if (this.user.ROLE.SUPERUSER) {
            return this.user;
        }
        else {
            return null;
        }
    };
    UserService.prototype.getUsers = function () {
        var header = this.createHeaders();
        return this.http.get(index_1.Config.API + '/users', {
            headers: header,
            withCredentials: true
        })
            .map(function (res) {
            var response = res.json();
            return response;
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUF1QixvQkFBb0IsQ0FBQyxDQUFBO0FBQzVDLHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQUN0RCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6QyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFHL0I7SUFLQyxxQkFBWSxJQUFVLEVBQVUsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELDZCQUFPLEdBQVA7UUFBQSxpQkFnQkM7UUFmQSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQU0sQ0FBQyxHQUFHLEdBQUMsV0FBVyxFQUFFO1lBQ3hDLE9BQU8sRUFBRSxNQUFNO1lBQ2YsZUFBZSxFQUFFLElBQUk7U0FDdEIsQ0FBQzthQUNKLEdBQUcsQ0FBQyxVQUFDLEdBQVk7WUFDakIsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUMxQixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNiLENBQUM7WUFDRCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakMsTUFB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QUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQU0sQ0FBQyxHQUFHLEdBQUMsUUFBUSxFQUFDO1lBQ3BDLE9BQU8sRUFBRSxNQUFNO1lBQ2YsZUFBZSxFQUFFLElBQUk7U0FDdEIsQ0FBQzthQUNKLEdBQUcsQ0FBQyxVQUFDLEdBQVk7WUFDakIsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBOUZGO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUErRmIsa0JBQUM7QUFBRCxDQTlGQSxBQThGQyxJQUFBO0FBOUZZLG1CQUFXLGNBOEZ2QixDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcblx0dXNlcjphbnk7XG5cdHN0YXR1czpib29sZWFuO1xuXHRodHRwOkh0dHA7XG5cdC8vY29uc3RydWltb3MgbG9zIG1ldG9kb3Ncblx0Y29uc3RydWN0b3IoaHR0cDogSHR0cCwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuXHRcdHRoaXMuaHR0cCA9IGh0dHA7XG5cdFx0dGhpcy5zdGF0dXMgPSBmYWxzZTtcblx0fVxuXHRyZXN0b3JlKCkge1xuXHRcdGxldCBoZWFkZXIgPSB0aGlzLmNyZWF0ZUhlYWRlcnMoKTtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChDb25maWcuQVBJKycvdXNlcnMvbWUnLCB7XG5cdCAgICAgIGhlYWRlcnM6IGhlYWRlcixcblx0ICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG5cdCAgICB9KVxuXHRcdC5tYXAoKHJlczpSZXNwb25zZSkgPT4ge1xuXHRcdFx0bGV0IHJlc3BvbnNlID0gcmVzLmpzb24oKTtcblx0XHRcdGlmKHJlc3BvbnNlLlJFU1BPTlNFID09PSAyMDApIHtcblx0XHRcdFx0dGhpcy51c2VyID0gcmVzcG9uc2UuVVNFUjtcblx0XHRcdFx0dGhpcy5zdGF0dXMgPSB0cnVlO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0pO1xuXHR9XG5cdC8vIEZPUiBKV1QgSU1QTEVNRU5UQVRJT04gKEZVVFVSRSlcblx0Ly8gc2F2ZSgpIHt9XG5cdGNyZWF0ZUhlYWRlcnMoKSB7XG5cdFx0dmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHQgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcblx0XHRyZXR1cm4gaGVhZGVycztcblx0fVxuXHRsb2dpbih1c2VybmFtZTpzdHJpbmcscGFzc3dvcmQ6c3RyaW5nKSB7XG5cdFx0bGV0IGJvZHkgPSBgZW1haWw9JHt1c2VybmFtZX0mcGFzc3dvcmQ9JHtwYXNzd29yZH1gO1xuXHRcdGxldCBoZWFkZXIgPSB0aGlzLmNyZWF0ZUhlYWRlcnMoKTtcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoQ29uZmlnLkFQSSsnL2xvZ2luL2FkbWluJyxib2R5LHtcblx0ICAgICAgaGVhZGVyczogaGVhZGVyLFxuXHQgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcblx0ICAgIH0pXG5cdFx0Lm1hcCgocmVzOlJlc3BvbnNlKSA9PiB7XG5cdFx0XHRsZXQgcmVzcG9uc2UgPSByZXMuanNvbigpO1xuXHRcdFx0aWYocmVzcG9uc2UuUkVTUE9OU0UgPT09IDIwMCkge1xuXHRcdFx0XHR0aGlzLnVzZXIgPSByZXNwb25zZS5VU0VSO1xuXHRcdFx0XHR0aGlzLnN0YXR1cyA9IHRydWU7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0pO1xuXHR9XG5cdGxvZ291dCgpIHtcblx0XHRsZXQgaGVhZGVyID0gdGhpcy5jcmVhdGVIZWFkZXJzKCk7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoQ29uZmlnLkFQSSsnL3VzZXJzL2xvZ291dCcse1xuXHQgICAgICBoZWFkZXJzOiBoZWFkZXIsXG5cdCAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuXHQgICAgfSlcblx0XHQubWFwKChyZXM6UmVzcG9uc2UpID0+IHtcblx0XHRcdGxldCByZXNwb25zZSA9IHJlcy5qc29uKCk7XG5cdFx0XHRpZihyZXNwb25zZS5SRVNQT05TRSA9PT0gMjAwKSB7XG5cdFx0XHRcdHRoaXMuc3RhdHVzID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMudXNlciA9IG51bGw7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0pO1xuXHR9XG5cdGlzTG9nZ2VkKCkge1xuXHRcdHJldHVybiB0aGlzLnJlc3RvcmUoKTtcblx0fVxuXHRnZXRVc2VyKCkge1xuXHRcdGlmKHRoaXMuc3RhdHVzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy51c2VyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblx0aXNBZG1pbigpe1xuXHRcdGlmKHRoaXMudXNlci5ST0xFLlNVUEVSVVNFUikge1xuXHRcdFx0cmV0dXJuIHRoaXMudXNlcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cdGdldFVzZXJzKCl7XG5cdFx0bGV0IGhlYWRlciA9IHRoaXMuY3JlYXRlSGVhZGVycygpO1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KENvbmZpZy5BUEkrJy91c2Vycycse1xuXHQgICAgICBoZWFkZXJzOiBoZWFkZXIsXG5cdCAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuXHQgICAgfSlcblx0XHQubWFwKChyZXM6UmVzcG9uc2UpID0+IHtcblx0XHRcdGxldCByZXNwb25zZSA9IHJlcy5qc29uKCk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==
