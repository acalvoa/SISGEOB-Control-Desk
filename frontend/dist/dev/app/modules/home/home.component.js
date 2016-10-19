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
var TimelineComponent = (function () {
    function TimelineComponent() {
    }
    TimelineComponent = __decorate([
        core_1.Component({
            selector: 'timeline-cmp',
            templateUrl: 'timeline.html',
            styleUrls: ['timeline.scss'],
        }), 
        __metadata('design:paramtypes', [])
    ], TimelineComponent);
    return TimelineComponent;
}());
exports.TimelineComponent = TimelineComponent;
var ChatComponent = (function () {
    function ChatComponent() {
    }
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'chat-cmp',
            templateUrl: 'chat.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    NotificationComponent = __decorate([
        core_1.Component({
            selector: 'notifications-cmp',
            templateUrl: 'notifications.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationComponent);
    return NotificationComponent;
}());
exports.NotificationComponent = NotificationComponent;
var HomeComponent = (function () {
    function HomeComponent() {
        this.myInterval = 5000;
        this.index = 0;
        this.slides = [];
        this.imgUrl = [
            "assets/img/slider1.jpg",
            "assets/img/slider2.jpg",
            "assets/img/slider3.jpg",
            "assets/img/slider0.jpg"
        ];
        this.alerts = [
            {
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.',
                closable: true
            }
        ];
        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    HomeComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    HomeComponent.prototype.addSlide = function () {
        var i = this.slides.length;
        this.slides.push({
            image: this.imgUrl[i],
            text: ['Dummy ', 'Dummy ', 'Dummy ', 'Dummy '][this.slides.length % 4] + "\n      \t\t\t" + ['text 0', 'text 1', 'text 2', 'text 3'][this.slides.length % 4]
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-cmp',
            templateUrl: 'home.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQVcxQztJQUFBO0lBQWlDLENBQUM7SUFMbEM7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLGVBQWU7WUFDNUIsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO1NBQzVCLENBQUM7O3lCQUFBO0lBQytCLHdCQUFDO0FBQUQsQ0FBakMsQUFBa0MsSUFBQTtBQUFyQix5QkFBaUIsb0JBQUksQ0FBQTtBQU1sQztJQUFBO0lBQTRCLENBQUM7SUFKN0I7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLFdBQVc7U0FDeEIsQ0FBQzs7cUJBQUE7SUFDMEIsb0JBQUM7QUFBRCxDQUE1QixBQUE2QixJQUFBO0FBQWhCLHFCQUFhLGdCQUFHLENBQUE7QUFNN0I7SUFBQTtJQUFxQyxDQUFDO0lBSnRDO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLG9CQUFvQjtTQUNqQyxDQUFDOzs2QkFBQTtJQUNtQyw0QkFBQztBQUFELENBQXJDLEFBQXNDLElBQUE7QUFBekIsNkJBQXFCLHdCQUFJLENBQUE7QUFPdEM7SUE4QkM7UUE1QkEsZUFBVSxHQUFXLElBQUksQ0FBQztRQUMxQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFlO1lBQ3BCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtTQUN4QixDQUFDO1FBR0ssV0FBTSxHQUFpQjtZQUMzQjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxHQUFHLEVBQUUsMkRBQTJEO2FBQ2pFO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsR0FBRyxFQUFFLGdFQUFnRTtnQkFDckUsUUFBUSxFQUFFLElBQUk7YUFDZjtTQUNGLENBQUM7UUFRRixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixDQUFDO0lBQ0YsQ0FBQztJQVRPLGtDQUFVLEdBQWpCLFVBQWtCLENBQVE7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFVRixnQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksRUFBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxzQkFDakUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUc7U0FDMUUsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQWpERjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUscUJBQXFCO1NBQ2xDLENBQUM7O3FCQUFBO0lBZ0RGLG9CQUFDO0FBQUQsQ0E5Q0EsQUE4Q0MsSUFBQTtBQTlDWSxxQkFBYSxnQkE4Q3pCLENBQUEiLCJmaWxlIjoiYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbipcdFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiovXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3RpbWVsaW5lLWNtcCcsXG5cdHRlbXBsYXRlVXJsOiAndGltZWxpbmUuaHRtbCcsXG5cdHN0eWxlVXJsczogWyd0aW1lbGluZS5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lQ29tcG9uZW50IHsgfVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjaGF0LWNtcCcsXG5cdHRlbXBsYXRlVXJsOiAnY2hhdC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25vdGlmaWNhdGlvbnMtY21wJyxcblx0dGVtcGxhdGVVcmw6ICdub3RpZmljYXRpb25zLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbkNvbXBvbmVudCB7IH1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnaG9tZS1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG5cdC8qIENhcm91c2VsIFZhcmlhYmxlICovXG5cdG15SW50ZXJ2YWw6IG51bWJlciA9IDUwMDA7XG5cdGluZGV4OiBudW1iZXIgPSAwO1xuXHRzbGlkZXM6IEFycmF5PGFueT4gPSBbXTtcblx0aW1nVXJsOiBBcnJheTxhbnk+ID0gW1xuXHRcdGBhc3NldHMvaW1nL3NsaWRlcjEuanBnYCxcblx0XHRgYXNzZXRzL2ltZy9zbGlkZXIyLmpwZ2AsXG5cdFx0YGFzc2V0cy9pbWcvc2xpZGVyMy5qcGdgLFxuXHRcdGBhc3NldHMvaW1nL3NsaWRlcjAuanBnYFxuXHRdO1xuXHQvKiBFTkQgKi9cblx0LyogQWxlcnQgY29tcG9uZW50ICovXG5cdHB1YmxpYyBhbGVydHM6QXJyYXk8T2JqZWN0PiA9IFtcblx0ICAge1xuXHQgICAgIHR5cGU6ICdkYW5nZXInLFxuXHQgICAgIG1zZzogJ09oIHNuYXAhIENoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLidcblx0ICAgfSxcblx0ICAge1xuXHQgICAgIHR5cGU6ICdzdWNjZXNzJyxcblx0ICAgICBtc2c6ICdXZWxsIGRvbmUhIFlvdSBzdWNjZXNzZnVsbHkgcmVhZCB0aGlzIGltcG9ydGFudCBhbGVydCBtZXNzYWdlLicsXG5cdCAgICAgY2xvc2FibGU6IHRydWVcblx0ICAgfVxuXHQgXTtcblxuXHQgcHVibGljIGNsb3NlQWxlcnQoaTpudW1iZXIpOnZvaWQge1xuXHQgICB0aGlzLmFsZXJ0cy5zcGxpY2UoaSwgMSk7XG5cdCB9XG5cdC8qIEVORCovXG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdHRoaXMuYWRkU2xpZGUoKTtcblx0XHR9XG5cdH1cblxuXHQvKiBDYXJvdXNlbCAqL1xuXHRhZGRTbGlkZSgpIHtcblx0XHRsZXQgaSA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcblx0XHR0aGlzLnNsaWRlcy5wdXNoKHtcblx0XHRcdGltYWdlOiB0aGlzLmltZ1VybFtpXSxcblx0XHRcdHRleHQ6IGAke1snRHVtbXkgJywgJ0R1bW15ICcsICdEdW1teSAnLCAnRHVtbXkgJ11bdGhpcy5zbGlkZXMubGVuZ3RoICUgNF19XG4gICAgICBcdFx0XHQke1sndGV4dCAwJywgJ3RleHQgMScsICd0ZXh0IDInLCAndGV4dCAzJ11bdGhpcy5zbGlkZXMubGVuZ3RoICUgNF19YFxuXHRcdH0pO1xuXHR9XG5cdC8qIEVORCAqL1xufVxuIl19
