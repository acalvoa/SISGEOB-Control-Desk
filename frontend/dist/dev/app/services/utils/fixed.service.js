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
var FixedHeaderService = (function () {
    function FixedHeaderService() {
    }
    FixedHeaderService.prototype.addToTop = function (element) {
        this.elements.push(element);
    };
    FixedHeaderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FixedHeaderService);
    return FixedHeaderService;
}());
exports.FixedHeaderService = FixedHeaderService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy91dGlscy9maXhlZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFFMUM7SUFBQTtJQU1BLENBQUM7SUFIQyxxQ0FBUSxHQUFSLFVBQVMsT0FBb0I7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQU5IO1FBQUMsaUJBQVUsRUFBRTs7MEJBQUE7SUFPYix5QkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksMEJBQWtCLHFCQU05QixDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy91dGlscy9maXhlZC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRml4ZWRIZWFkZXJTZXJ2aWNle1xuICBlbGVtZW50czogSFRNTEVsZW1lbnRbXTtcblxuICBhZGRUb1RvcChlbGVtZW50OiBIVE1MRWxlbWVudCl7XG4gICAgdGhpcy5lbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICB9XG59Il19
