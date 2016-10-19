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
var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        core_1.Pipe({ name: 'keys' }), 
        __metadata('design:paramtypes', [])
    ], KeysPipe);
    return KeysPipe;
}());
exports.KeysPipe = KeysPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9waXBlcy9rZXlzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQUVwRDtJQUFBO0lBUUEsQ0FBQztJQVBDLDRCQUFTLEdBQVQsVUFBVSxLQUFTLEVBQUUsSUFBYTtRQUNoQyxJQUFJLElBQUksR0FBUyxFQUFFLENBQUM7UUFDcEIsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFSSDtRQUFDLFdBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzs7Z0JBQUE7SUFTckIsZUFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksZ0JBQVEsV0FRcEIsQ0FBQSIsImZpbGUiOiJhcHAvcGlwZXMva2V5cy5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQFBpcGUoe25hbWU6ICdrZXlzJ30pXG5leHBvcnQgY2xhc3MgS2V5c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOmFueSwgYXJnczpzdHJpbmdbXSkgOiBhbnkge1xuICAgIGxldCBrZXlzOmFueVtdID0gW107XG4gICAgZm9yIChsZXQga2V5IGluIHZhbHVlKSB7XG4gICAgICBrZXlzLnB1c2goe2tleToga2V5LCB2YWx1ZTogdmFsdWVba2V5XX0pO1xuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbiAgfVxufSJdfQ==
