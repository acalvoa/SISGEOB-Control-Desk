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
var clpPipe = (function () {
    function clpPipe() {
    }
    clpPipe.prototype.transform = function (value, args) {
        value = "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return value;
    };
    clpPipe = __decorate([
        core_1.Pipe({ name: 'CLP' }), 
        __metadata('design:paramtypes', [])
    ], clpPipe);
    return clpPipe;
}());
exports.clpPipe = clpPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9waXBlcy9jbHAucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBRXBEO0lBQUE7SUFLQSxDQUFDO0lBSkMsMkJBQVMsR0FBVCxVQUFVLEtBQVksRUFBRSxJQUFhO1FBQ25DLEtBQUssR0FBRyxHQUFHLEdBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuRSxNQUFNLENBQUMsS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQUxIO1FBQUMsV0FBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDOztlQUFBO0lBTXBCLGNBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUxZLGVBQU8sVUFLbkIsQ0FBQSIsImZpbGUiOiJhcHAvcGlwZXMvY2xwLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AUGlwZSh7bmFtZTogJ0NMUCd9KVxuZXhwb3J0IGNsYXNzIGNscFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOnN0cmluZywgYXJnczpzdHJpbmdbXSkgOiBhbnkge1xuICAgIHZhbHVlID0gXCIkXCIrdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIi5cIik7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbn0iXX0=
