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
var RestService = (function () {
    function RestService(http, router) {
        this.router = router;
        this.http = http;
    }
    RestService.prototype.createHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    };
    RestService.prototype.post = function (data, uri) {
        var body = "";
        for (var key in data) {
            if (data[key] != null && data[key] != "") {
                if (typeof data[key] == "object")
                    data[key] = JSON.stringify(data[key]);
                body += key + ("=" + data[key] + "&");
            }
        }
        body = body.substring(0, (body.length - 1));
        var header = this.createHeaders();
        return this.http.post(index_1.Config.API + uri, body, {
            headers: header,
            withCredentials: true
        }).map(function (res) {
            var response = res.json();
            return response;
        });
    };
    RestService.prototype.postMap = function (data, uri) {
        var body = "";
        for (var key in data) {
            if (data[key] != null && data[key] != "") {
                if (typeof data[key] == "object")
                    data[key] = JSON.stringify(data[key]);
                body += key + ("=" + data[key] + "&");
            }
        }
        body = body.substring(0, (body.length - 1));
        var header = this.createHeaders();
        return this.http.post(index_1.Config.API + uri, body, {
            headers: header,
            withCredentials: true
        });
    };
    RestService.prototype.get = function (uri) {
        var header = this.createHeaders();
        return this.http.get(index_1.Config.API + uri, {
            headers: header,
            withCredentials: true
        }).map(function (res) {
            var response = res.json();
            return response;
        });
    };
    RestService.prototype.getMap = function (uri) {
        var header = this.createHeaders();
        return this.http.get(index_1.Config.API + uri, {
            headers: header,
            withCredentials: true
        }).map(function (res) {
            var response = res.json();
            return response;
        });
    };
    RestService.prototype.delete = function (id, uri) {
        var header = this.createHeaders();
        return this.http.delete(index_1.Config.API + uri + "/" + id, {
            headers: header,
            withCredentials: true
        }).map(function (res) {
            var response = res.json();
            return response;
        });
    };
    RestService.prototype.put = function () {
    };
    RestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], RestService);
    return RestService;
}());
exports.RestService = RestService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9yZXN0L3Jlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUF1QixvQkFBb0IsQ0FBQyxDQUFBO0FBQzVDLHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQUN0RCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6QyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFHL0I7SUFHQyxxQkFBWSxJQUFVLEVBQVUsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUNPLG1DQUFhLEdBQXJCO1FBQ0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUN6QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ3ZFLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQUNNLDBCQUFJLEdBQVgsVUFBWSxJQUFRLEVBQUUsR0FBVTtRQUMvQixJQUFJLElBQUksR0FBVSxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFBLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNwQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO2dCQUN4QyxFQUFFLENBQUEsQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUM7b0JBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZFLElBQUksSUFBSSxHQUFHLEdBQUMsT0FBSSxJQUFJLENBQUMsR0FB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QUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNNLDRCQUFNLEdBQWIsVUFBYyxFQUFTLEVBQUMsR0FBVTtRQUNqQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQU0sQ0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxFQUFFLEVBQUU7WUFDekMsT0FBTyxFQUFFLE1BQU07WUFDZixlQUFlLEVBQUUsSUFBSTtTQUN2QixDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBWTtZQUN0QixJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCx5QkFBRyxHQUFIO0lBRUEsQ0FBQztJQTlFRjtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBK0ViLGtCQUFDO0FBQUQsQ0E5RUEsQUE4RUMsSUFBQTtBQTlFWSxtQkFBVyxjQThFdkIsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvcmVzdC9yZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlLCBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXN0U2VydmljZSB7XG5cdGh0dHA6SHR0cDtcblx0Ly9jb25zdHJ1aW1vcyBsb3MgbWV0b2Rvc1xuXHRjb25zdHJ1Y3RvcihodHRwOiBIdHRwLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cdFx0dGhpcy5odHRwID0gaHR0cDtcblx0fVxuXHRwcml2YXRlIGNyZWF0ZUhlYWRlcnMoKSB7XG5cdFx0dmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHQgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcblx0XHRyZXR1cm4gaGVhZGVycztcblx0fVxuXHRwdWJsaWMgcG9zdChkYXRhOmFueSwgdXJpOnN0cmluZykge1xuXHRcdGxldCBib2R5OnN0cmluZyA9IFwiXCI7XG5cdFx0Zm9yKGxldCBrZXkgaW4gZGF0YSl7XG5cdFx0XHRpZihkYXRhW2tleV0gIT0gbnVsbCAmJiBkYXRhW2tleV0gIT0gXCJcIil7XG5cdFx0XHRcdGlmKHR5cGVvZiBkYXRhW2tleV0gPT0gXCJvYmplY3RcIikgZGF0YVtrZXldID0gSlNPTi5zdHJpbmdpZnkoZGF0YVtrZXldKTtcblx0XHRcdFx0Ym9keSArPSBrZXkrYD0ke2RhdGFba2V5XX0mYDtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ym9keSA9IGJvZHkuc3Vic3RyaW5nKDAsKGJvZHkubGVuZ3RoLTEpKTtcblx0XHRsZXQgaGVhZGVyID0gdGhpcy5jcmVhdGVIZWFkZXJzKCk7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KENvbmZpZy5BUEkrdXJpLCBib2R5LCB7XG5cdCAgICAgIFx0aGVhZGVyczogaGVhZGVyLFxuXHQgICAgICBcdHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuXHQgICAgfSkubWFwKChyZXM6UmVzcG9uc2UpID0+IHtcblx0XHRcdGxldCByZXNwb25zZSA9IHJlcy5qc29uKCk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdFx0fSk7XG5cdH1cblx0cHVibGljIHBvc3RNYXAoZGF0YTphbnksIHVyaTpzdHJpbmcpIHtcblx0XHRsZXQgYm9keTpzdHJpbmcgPSBcIlwiO1xuXHRcdGZvcihsZXQga2V5IGluIGRhdGEpe1xuXHRcdFx0aWYoZGF0YVtrZXldICE9IG51bGwgJiYgZGF0YVtrZXldICE9IFwiXCIpe1xuXHRcdFx0XHRpZih0eXBlb2YgZGF0YVtrZXldID09IFwib2JqZWN0XCIpIGRhdGFba2V5XSA9IEpTT04uc3RyaW5naWZ5KGRhdGFba2V5XSk7XG5cdFx0XHRcdGJvZHkgKz0ga2V5K2A9JHtkYXRhW2tleV19JmA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGJvZHkgPSBib2R5LnN1YnN0cmluZygwLChib2R5Lmxlbmd0aC0xKSk7XG5cdFx0bGV0IGhlYWRlciA9IHRoaXMuY3JlYXRlSGVhZGVycygpO1xuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChDb25maWcuQVBJK3VyaSwgYm9keSwge1xuXHQgICAgICBcdGhlYWRlcnM6IGhlYWRlcixcblx0ICAgICAgXHR3aXRoQ3JlZGVudGlhbHM6IHRydWVcblx0ICAgIH0pO1xuXHR9XG5cdC8vIEZPUiBKV1QgSU1QTEVNRU5UQVRJT04gKEZVVFVSRSlcblx0cHVibGljIGdldCh1cmk6c3RyaW5nKSB7XG5cdFx0bGV0IGhlYWRlciA9IHRoaXMuY3JlYXRlSGVhZGVycygpO1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KENvbmZpZy5BUEkrdXJpLCB7XG5cdCAgICAgIFx0aGVhZGVyczogaGVhZGVyLFxuXHQgICAgICBcdHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuXHQgICAgfSkubWFwKChyZXM6UmVzcG9uc2UpID0+IHtcblx0XHRcdGxldCByZXNwb25zZSA9IHJlcy5qc29uKCk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdFx0fSk7XG5cdH1cblx0cHVibGljIGdldE1hcCh1cmk6c3RyaW5nKSB7XG5cdFx0bGV0IGhlYWRlciA9IHRoaXMuY3JlYXRlSGVhZGVycygpO1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KENvbmZpZy5BUEkrdXJpLCB7XG5cdCAgICAgIFx0aGVhZGVyczogaGVhZGVyLFxuXHQgICAgICBcdHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuXHQgICAgfSkubWFwKChyZXM6UmVzcG9uc2UpID0+IHtcblx0XHRcdGxldCByZXNwb25zZSA9IHJlcy5qc29uKCk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdFx0fSk7XG5cdH1cblx0cHVibGljIGRlbGV0ZShpZDpudW1iZXIsdXJpOnN0cmluZykge1xuXHRcdGxldCBoZWFkZXIgPSB0aGlzLmNyZWF0ZUhlYWRlcnMoKTtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShDb25maWcuQVBJK3VyaStcIi9cIitpZCwge1xuXHQgICAgICBcdGhlYWRlcnM6IGhlYWRlcixcblx0ICAgICAgXHR3aXRoQ3JlZGVudGlhbHM6IHRydWVcblx0ICAgIH0pLm1hcCgocmVzOlJlc3BvbnNlKSA9PiB7XG5cdFx0XHRsZXQgcmVzcG9uc2UgPSByZXMuanNvbigpO1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHRcdH0pO1xuXHR9XG5cdHB1dCgpIHtcblxuXHR9XG59XG4iXX0=
