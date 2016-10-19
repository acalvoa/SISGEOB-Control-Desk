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
var TotalPipe = (function () {
    function TotalPipe() {
    }
    TotalPipe.prototype.transform = function (value, args) {
        var total = 0;
        for (var i = 0; i < value.length; i++) {
            total += value[i].MONTO;
        }
        value = "$" + total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return value;
    };
    TotalPipe = __decorate([
        core_1.Pipe({ name: 'TOTAL' }), 
        __metadata('design:paramtypes', [])
    ], TotalPipe);
    return TotalPipe;
}());
exports.TotalPipe = TotalPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9waXBlcy90b3RhbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFFcEQ7SUFBQTtJQVNBLENBQUM7SUFSQyw2QkFBUyxHQUFULFVBQVUsS0FBUyxFQUFFLElBQWE7UUFDakMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDL0IsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDekIsQ0FBQztRQUNBLEtBQUssR0FBRyxHQUFHLEdBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuRSxNQUFNLENBQUMsS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQVRIO1FBQUMsV0FBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUFDOztpQkFBQTtJQVV0QixnQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksaUJBQVMsWUFTckIsQ0FBQSIsImZpbGUiOiJhcHAvcGlwZXMvdG90YWwucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBQaXBlKHtuYW1lOiAnVE9UQUwnfSlcbmV4cG9ydCBjbGFzcyBUb3RhbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOmFueSwgYXJnczpzdHJpbmdbXSkgOiBhbnkge1xuICBcdHZhciB0b3RhbCA9IDA7XG4gIFx0Zm9yKGxldCBpPTA7aTx2YWx1ZS5sZW5ndGg7aSsrKXtcbiAgXHRcdHRvdGFsICs9IHZhbHVlW2ldLk1PTlRPO1xuICBcdH1cbiAgICB2YWx1ZSA9IFwiJFwiK3RvdGFsLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIuXCIpO1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG59Il19
