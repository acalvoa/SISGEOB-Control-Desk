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
var modal_component_1 = require('ng2-bootstrap/components/modal/modal.component');
var BSComponentComponent = (function () {
    function BSComponentComponent() {
        this.singleModel = '1';
        this.radioModel = 'Middle';
        this.checkModel = { left: false, middle: true, right: false };
        this.disabled = false;
        this.status = { isopen: false };
        this.items = ['The first choice!', 'And another choice for you.', 'but wait! A third!'];
        this.totalItems = 64;
        this.currentPage = 4;
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigCurrentPage = 1;
        this.alerts = [{
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.',
                closable: true
            }
        ];
        this.max = 200;
        this.stacked = [];
        this.x = 5;
        this.y = 2;
        this.maxRating = 10;
        this.rate = 7;
        this.isReadonly = false;
        this.ratingStates = [
            { stateOn: 'fa fa-check', stateOff: 'fa fa-check-circle' },
            { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
            { stateOn: 'fa fa-heart', stateOff: 'fa fa-ban' },
            { stateOn: 'fa fa-heart' },
            { stateOff: 'fa fa-power-off' }
        ];
        this.tabs = [
            { title: 'Title 1', content: 'Dynamic content 1' },
            { title: 'Title 2', content: 'Dynamic content 2', disabled: true },
            { title: 'Title 3', content: 'Dynamic content 3', removable: true }
        ];
        this.selected = '';
        this.asyncSelected = '';
        this.typeaheadLoading = false;
        this.typeaheadNoResults = false;
        this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas',
            'California', 'Colorado',
            'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
            'Illinois', 'Indiana', 'Iowa',
            'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
            'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico',
            'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon',
            'Pennsylvania', 'Rhode Island',
            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington',
            'West Virginia', 'Wisconsin', 'Wyoming'];
        this.statesComplex = [
            { id: 1, name: 'Alabama' }, { id: 2, name: 'Alaska' }, { id: 3, name: 'Arizona' },
            { id: 4, name: 'Arkansas' }, { id: 5, name: 'California' },
            { id: 6, name: 'Colorado' }, { id: 7, name: 'Connecticut' },
            { id: 8, name: 'Delaware' }, { id: 9, name: 'Florida' },
            { id: 10, name: 'Georgia' }, { id: 11, name: 'Hawaii' },
            { id: 12, name: 'Idaho' }, { id: 13, name: 'Illinois' },
            { id: 14, name: 'Indiana' }, { id: 15, name: 'Iowa' },
            { id: 16, name: 'Kansas' }, { id: 17, name: 'Kentucky' },
            { id: 18, name: 'Louisiana' }, { id: 19, name: 'Maine' },
            { id: 21, name: 'Maryland' }, { id: 22, name: 'Massachusetts' },
            { id: 23, name: 'Michigan' }, { id: 24, name: 'Minnesota' },
            { id: 25, name: 'Mississippi' }, { id: 26, name: 'Missouri' },
            { id: 27, name: 'Montana' }, { id: 28, name: 'Nebraska' },
            { id: 29, name: 'Nevada' }, { id: 30, name: 'New Hampshire' },
            { id: 31, name: 'New Jersey' }, { id: 32, name: 'New Mexico' },
            { id: 33, name: 'New York' }, { id: 34, name: 'North Dakota' },
            { id: 35, name: 'North Carolina' }, { id: 36, name: 'Ohio' },
            { id: 37, name: 'Oklahoma' }, { id: 38, name: 'Oregon' },
            { id: 39, name: 'Pennsylvania' }, { id: 40, name: 'Rhode Island' },
            { id: 41, name: 'South Carolina' }, { id: 42, name: 'South Dakota' },
            { id: 43, name: 'Tennessee' }, { id: 44, name: 'Texas' },
            { id: 45, name: 'Utah' }, { id: 46, name: 'Vermont' },
            { id: 47, name: 'Virginia' }, { id: 48, name: 'Washington' },
            { id: 49, name: 'West Virginia' }, { id: 50, name: 'Wisconsin' },
            { id: 51, name: 'Wyoming' }];
        this.random();
        this.randomStacked();
    }
    BSComponentComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    BSComponentComponent.prototype.addAlert = function () {
        this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
    };
    BSComponentComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    BSComponentComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    BSComponentComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    ;
    BSComponentComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    ;
    BSComponentComponent.prototype.random = function () {
        var value = Math.floor((Math.random() * 100) + 1);
        var type;
        if (value < 25) {
            type = 'success';
        }
        else if (value < 50) {
            type = 'info';
        }
        else if (value < 75) {
            type = 'warning';
        }
        else {
            type = 'danger';
        }
        this.showWarning = (type === 'danger' || type === 'warning');
        this.dynamic = value;
        this.type = type;
    };
    ;
    BSComponentComponent.prototype.randomStacked = function () {
        var types = ['success', 'info', 'warning', 'danger'];
        this.stacked = [];
        var total = 0;
        var n = Math.floor((Math.random() * 4) + 1);
        for (var i = 0; i < n; i++) {
            var index = Math.floor((Math.random() * 4));
            var value = Math.floor((Math.random() * 30) + 1);
            total += value;
            this.stacked.push({
                value: value,
                max: value,
                type: types[index]
            });
        }
    };
    ;
    BSComponentComponent.prototype.hoveringOver = function (value) {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };
    ;
    BSComponentComponent.prototype.resetStar = function () {
        this.overStar = void 0;
    };
    BSComponentComponent.prototype.alertMe = function () {
        setTimeout(function () {
            alert('You\'ve selected the alert tab!');
        });
    };
    ;
    BSComponentComponent.prototype.setActiveTab = function (index) {
        this.tabs[index].active = true;
    };
    ;
    BSComponentComponent.prototype.removeTabHandler = function () {
        console.log('Remove Tab handler');
    };
    ;
    BSComponentComponent.prototype.getContext = function () {
        return this;
    };
    BSComponentComponent.prototype.getAsyncData = function (context) {
        if (this._prevContext === context) {
            return this._cache;
        }
        this._prevContext = context;
        var f = function () {
            var p = new Promise(function (resolve) {
                setTimeout(function () {
                    var query = new RegExp(context.asyncSelected, 'ig');
                    return resolve(context.states.filter(function (state) {
                        return query.test(state);
                    }));
                }, 200);
            });
            return p;
        };
        this._cache = f;
        return this._cache;
    };
    BSComponentComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    BSComponentComponent.prototype.changeTypeaheadNoResults = function (e) {
        this.typeaheadNoResults = e;
    };
    BSComponentComponent.prototype.typeaheadOnSelect = function (e) {
        console.log("Selected value: " + e.item);
    };
    __decorate([
        core_1.ViewChild('childModal'), 
        __metadata('design:type', modal_component_1.ModalDirective)
    ], BSComponentComponent.prototype, "childModal", void 0);
    BSComponentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bs-component',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            templateUrl: './bs-component.component.html',
            styles: ["\n    \t.tooltip.customClass .tooltip-inner {\n    \t\tcolor: #880000;\n    \t\tbackground-color: #ffff66;\n    \t\tbox-shadow: 0 6px 12px rgba(0,0,0,.175);\n    \t}\n    \t.tooltip.customClass .tooltip-arrow {\n    \t\tdisplay: none;\n    \t}\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], BSComponentComponent);
    return BSComponentComponent;
}());
exports.BSComponentComponent = BSComponentComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Rhc2hib2FyZC9leGFtcGxlcy9icy1jb21wb25lbnQvYnNDb21wb25lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEQsZUFBZSxDQUFDLENBQUE7QUFFOUUsZ0NBQStCLGdEQUFnRCxDQUFDLENBQUE7QUFtQmhGO0lBa0hDO1FBN0dPLGdCQUFXLEdBQVUsR0FBRyxDQUFDO1FBQ3pCLGVBQVUsR0FBVSxRQUFRLENBQUM7UUFDN0IsZUFBVSxHQUFPLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUczRCxhQUFRLEdBQVcsS0FBSyxDQUFDO1FBQ3pCLFdBQU0sR0FBb0IsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDMUMsVUFBSyxHQUFrQixDQUFDLG1CQUFtQixFQUFFLDZCQUE2QixFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFHbEcsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFVLENBQUMsQ0FBQztRQUV2QixZQUFPLEdBQVUsQ0FBQyxDQUFDO1FBQ25CLGtCQUFhLEdBQVUsR0FBRyxDQUFDO1FBQzNCLG1CQUFjLEdBQVUsQ0FBQyxDQUFDO1FBRzFCLFdBQU0sR0FBa0IsQ0FBQztnQkFDL0IsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsR0FBRyxFQUFFLDJEQUEyRDthQUMvRDtZQUNEO2dCQUNDLElBQUksRUFBRSxTQUFTO2dCQUNmLEdBQUcsRUFBRSxnRUFBZ0U7Z0JBQ3JFLFFBQVEsRUFBRSxJQUFJO2FBQ2Q7U0FDRCxDQUFDO1FBR0ssUUFBRyxHQUFVLEdBQUcsQ0FBQztRQUlqQixZQUFPLEdBQVMsRUFBRSxDQUFDO1FBR25CLE1BQUMsR0FBVSxDQUFDLENBQUM7UUFDYixNQUFDLEdBQVUsQ0FBQyxDQUFDO1FBQ2IsY0FBUyxHQUFVLEVBQUUsQ0FBQztRQUN0QixT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RUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQztZQUMxRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDO1lBQzFELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQztZQUN4RCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQ3BELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUM7WUFDOUQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDO1lBQ2hFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUM7WUFDcEQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztZQUNqRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDO1lBQ3hELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVB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RyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLGdEQUFpQixHQUF4QixVQUF5QixDQUFLO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQW1CLENBQUMsQ0FBQyxJQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBbFBEO1FBQUMsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7OzREQUFBO0lBbkJ6QjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDaEIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07WUFDL0MsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxNQUFNLEVBQUUsQ0FBQywyUEFTUixDQUFDO1NBQ0wsQ0FBQzs7NEJBQUE7SUF1UEYsMkJBQUM7QUFBRCxDQXJQQSxBQXFQQyxJQUFBO0FBclBZLDRCQUFvQix1QkFxUGhDLENBQUEiLCJmaWxlIjoiYXBwL21vZHVsZXMvZGFzaGJvYXJkL2V4YW1wbGVzL2JzLWNvbXBvbmVudC9ic0NvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tICduZzItYm9vdHN0cmFwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdicy1jb21wb25lbnQnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9icy1jb21wb25lbnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW2BcbiAgICBcdC50b29sdGlwLmN1c3RvbUNsYXNzIC50b29sdGlwLWlubmVyIHtcbiAgICBcdFx0Y29sb3I6ICM4ODAwMDA7XG4gICAgXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmNjY7XG4gICAgXHRcdGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KTtcbiAgICBcdH1cbiAgICBcdC50b29sdGlwLmN1c3RvbUNsYXNzIC50b29sdGlwLWFycm93IHtcbiAgICBcdFx0ZGlzcGxheTogbm9uZTtcbiAgICBcdH1cbiAgICBgXVxufSlcblxuZXhwb3J0IGNsYXNzIEJTQ29tcG9uZW50Q29tcG9uZW50IHtcblxuXHRAVmlld0NoaWxkKCdjaGlsZE1vZGFsJykgcHVibGljIGNoaWxkTW9kYWw6TW9kYWxEaXJlY3RpdmU7XG5cblx0Ly8gQnV0dG9uXG5cdHB1YmxpYyBzaW5nbGVNb2RlbDpzdHJpbmcgPSAnMSc7XG5cdHB1YmxpYyByYWRpb01vZGVsOnN0cmluZyA9ICdNaWRkbGUnO1xuXHRwdWJsaWMgY2hlY2tNb2RlbDphbnkgPSB7bGVmdDogZmFsc2UsIG1pZGRsZTogdHJ1ZSwgcmlnaHQ6IGZhbHNlfTtcblxuXHQvLyBEcm9wZG93biBcblx0cHVibGljIGRpc2FibGVkOmJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljIHN0YXR1czp7aXNvcGVuOmJvb2xlYW59ID0ge2lzb3BlbjogZmFsc2V9O1xuXHRwdWJsaWMgaXRlbXM6IEFycmF5PHN0cmluZz4gPSBbJ1RoZSBmaXJzdCBjaG9pY2UhJywgJ0FuZCBhbm90aGVyIGNob2ljZSBmb3IgeW91LicsICdidXQgd2FpdCEgQSB0aGlyZCEnXTtcblxuXHQvLyBQYWdpbmF0aW9uXG5cdHB1YmxpYyB0b3RhbEl0ZW1zOm51bWJlciA9IDY0O1xuXHRwdWJsaWMgY3VycmVudFBhZ2U6bnVtYmVyID0gNDtcblxuXHRwdWJsaWMgbWF4U2l6ZTpudW1iZXIgPSA1O1xuXHRwdWJsaWMgYmlnVG90YWxJdGVtczpudW1iZXIgPSAxNzU7XG5cdHB1YmxpYyBiaWdDdXJyZW50UGFnZTpudW1iZXIgPSAxO1xuXG5cdC8vIEFsZXJ0XG5cdHB1YmxpYyBhbGVydHM6IEFycmF5PE9iamVjdD4gPSBbe1xuXHRcdHR5cGU6ICdkYW5nZXInLFxuXHRcdG1zZzogJ09oIHNuYXAhIENoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLidcblx0XHR9LFxuXHRcdHtcblx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdG1zZzogJ1dlbGwgZG9uZSEgWW91IHN1Y2Nlc3NmdWxseSByZWFkIHRoaXMgaW1wb3J0YW50IGFsZXJ0IG1lc3NhZ2UuJyxcblx0XHRcdGNsb3NhYmxlOiB0cnVlXG5cdFx0fVxuXHRdO1xuXG5cdC8vIFByb2dyZXNzYmFyXG5cdHB1YmxpYyBtYXg6bnVtYmVyID0gMjAwO1xuXHRwdWJsaWMgc2hvd1dhcm5pbmc6Ym9vbGVhbjtcblx0cHVibGljIGR5bmFtaWM6bnVtYmVyO1xuXHRwdWJsaWMgdHlwZTpzdHJpbmc7XG5cdHB1YmxpYyBzdGFja2VkOmFueVtdID0gW107XG5cblx0Ly8gUmF0aW5nXG5cdHB1YmxpYyB4Om51bWJlciA9IDU7XG5cdHB1YmxpYyB5Om51bWJlciA9IDI7XG5cdHB1YmxpYyBtYXhSYXRpbmc6bnVtYmVyID0gMTA7XG5cdHB1YmxpYyByYXRlOm51bWJlciA9IDc7XG5cdHB1YmxpYyBpc1JlYWRvbmx5OmJvb2xlYW4gPSBmYWxzZTtcblxuXHRwdWJsaWMgb3ZlclN0YXI6bnVtYmVyO1xuXHRwdWJsaWMgcGVyY2VudDpudW1iZXI7XG5cblx0cHVibGljIHJhdGluZ1N0YXRlczphbnkgPSBbXG5cdFx0e3N0YXRlT246ICdmYSBmYS1jaGVjaycsIHN0YXRlT2ZmOiAnZmEgZmEtY2hlY2stY2lyY2xlJ30sXG5cdFx0e3N0YXRlT246ICdmYSBmYS1zdGFyJywgc3RhdGVPZmY6ICdmYSBmYS1zdGFyLW8nfSxcblx0XHR7c3RhdGVPbjogJ2ZhIGZhLWhlYXJ0Jywgc3RhdGVPZmY6ICdmYSBmYS1iYW4nfSxcblx0XHR7c3RhdGVPbjogJ2ZhIGZhLWhlYXJ0JyB9LFxuXHRcdHtzdGF0ZU9mZjogJ2ZhIGZhLXBvd2VyLW9mZid9XG5cdF07XG5cblx0Ly8gVGFic1xuXHRwdWJsaWMgdGFiczpBcnJheTxhbnk+ID0gW1xuXHQgICAge3RpdGxlOiAnVGl0bGUgMScsIGNvbnRlbnQ6ICdEeW5hbWljIGNvbnRlbnQgMSd9LFxuXHQgICAge3RpdGxlOiAnVGl0bGUgMicsIGNvbnRlbnQ6ICdEeW5hbWljIGNvbnRlbnQgMicsIGRpc2FibGVkOiB0cnVlfSxcblx0ICAgIHt0aXRsZTogJ1RpdGxlIDMnLCBjb250ZW50OiAnRHluYW1pYyBjb250ZW50IDMnLCByZW1vdmFibGU6IHRydWV9XG5cdF07XG5cblx0Ly8gVHlwZWhlYWRcblx0cHVibGljIHNlbGVjdGVkOnN0cmluZyA9ICcnO1xuXHRwdWJsaWMgYXN5bmNTZWxlY3RlZDpzdHJpbmcgPSAnJztcblx0cHVibGljIHR5cGVhaGVhZExvYWRpbmc6Ym9vbGVhbiA9IGZhbHNlO1xuXHRwdWJsaWMgdHlwZWFoZWFkTm9SZXN1bHRzOmJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljIHN0YXRlczpBcnJheTxzdHJpbmc+ID0gWydBbGFiYW1hJywgJ0FsYXNrYScsICdBcml6b25hJywgJ0Fya2Fuc2FzJyxcblx0J0NhbGlmb3JuaWEnLCAnQ29sb3JhZG8nLFxuXHQnQ29ubmVjdGljdXQnLCAnRGVsYXdhcmUnLCAnRmxvcmlkYScsICdHZW9yZ2lhJywgJ0hhd2FpaScsICdJZGFobycsXG5cdCdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnLFxuXHQnS2Fuc2FzJywgJ0tlbnR1Y2t5JywgJ0xvdWlzaWFuYScsICdNYWluZScsICdNYXJ5bGFuZCcsICdNYXNzYWNodXNldHRzJyxcblx0J01pY2hpZ2FuJywgJ01pbm5lc290YScsXG5cdCdNaXNzaXNzaXBwaScsICdNaXNzb3VyaScsICdNb250YW5hJywgJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJyxcblx0J05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsXG5cdCdOZXcgWW9yaycsICdOb3J0aCBEYWtvdGEnLCAnTm9ydGggQ2Fyb2xpbmEnLCAnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nLFxuXHQnUGVubnN5bHZhbmlhJywgJ1Job2RlIElzbGFuZCcsXG5cdCdTb3V0aCBDYXJvbGluYScsICdTb3V0aCBEYWtvdGEnLCAnVGVubmVzc2VlJywgJ1RleGFzJywgJ1V0YWgnLCAnVmVybW9udCcsXG5cdCdWaXJnaW5pYScsICdXYXNoaW5ndG9uJyxcblx0J1dlc3QgVmlyZ2luaWEnLCAnV2lzY29uc2luJywgJ1d5b21pbmcnXTtcblx0cHVibGljIHN0YXRlc0NvbXBsZXg6QXJyYXk8YW55PiA9IFtcblx0e2lkOiAxLCBuYW1lOiAnQWxhYmFtYSd9LCB7aWQ6IDIsIG5hbWU6ICdBbGFza2EnfSwge2lkOiAzLCBuYW1lOiAnQXJpem9uYSd9LFxuXHR7aWQ6IDQsIG5hbWU6ICdBcmthbnNhcyd9LCB7aWQ6IDUsIG5hbWU6ICdDYWxpZm9ybmlhJ30sXG5cdHtpZDogNiwgbmFtZTogJ0NvbG9yYWRvJ30sIHtpZDogNywgbmFtZTogJ0Nvbm5lY3RpY3V0J30sXG5cdHtpZDogOCwgbmFtZTogJ0RlbGF3YXJlJ30sIHtpZDogOSwgbmFtZTogJ0Zsb3JpZGEnfSxcblx0e2lkOiAxMCwgbmFtZTogJ0dlb3JnaWEnfSwge2lkOiAxMSwgbmFtZTogJ0hhd2FpaSd9LFxuXHR7aWQ6IDEyLCBuYW1lOiAnSWRhaG8nfSwge2lkOiAxMywgbmFtZTogJ0lsbGlub2lzJ30sXG5cdHtpZDogMTQsIG5hbWU6ICdJbmRpYW5hJ30sIHtpZDogMTUsIG5hbWU6ICdJb3dhJ30sXG5cdHtpZDogMTYsIG5hbWU6ICdLYW5zYXMnfSwge2lkOiAxNywgbmFtZTogJ0tlbnR1Y2t5J30sXG5cdHtpZDogMTgsIG5hbWU6ICdMb3Vpc2lhbmEnfSwge2lkOiAxOSwgbmFtZTogJ01haW5lJ30sXG5cdHtpZDogMjEsIG5hbWU6ICdNYXJ5bGFuZCd9LCB7aWQ6IDIyLCBuYW1lOiAnTWFzc2FjaHVzZXR0cyd9LFxuXHR7aWQ6IDIzLCBuYW1lOiAnTWljaGlnYW4nfSwge2lkOiAyNCwgbmFtZTogJ01pbm5lc290YSd9LFxuXHR7aWQ6IDI1LCBuYW1lOiAnTWlzc2lzc2lwcGknfSwge2lkOiAyNiwgbmFtZTogJ01pc3NvdXJpJ30sXG5cdHtpZDogMjcsIG5hbWU6ICdNb250YW5hJ30sIHtpZDogMjgsIG5hbWU6ICdOZWJyYXNrYSd9LFxuXHR7aWQ6IDI5LCBuYW1lOiAnTmV2YWRhJ30sIHtpZDogMzAsIG5hbWU6ICdOZXcgSGFtcHNoaXJlJ30sXG5cdHtpZDogMzEsIG5hbWU6ICdOZXcgSmVyc2V5J30sIHtpZDogMzIsIG5hbWU6ICdOZXcgTWV4aWNvJ30sXG5cdHtpZDogMzMsIG5hbWU6ICdOZXcgWW9yayd9LCB7aWQ6IDM0LCBuYW1lOiAnTm9ydGggRGFrb3RhJ30sXG5cdHtpZDogMzUsIG5hbWU6ICdOb3J0aCBDYXJvbGluYSd9LCB7aWQ6IDM2LCBuYW1lOiAnT2hpbyd9LFxuXHR7aWQ6IDM3LCBuYW1lOiAnT2tsYWhvbWEnfSwge2lkOiAzOCwgbmFtZTogJ09yZWdvbid9LFxuXHR7aWQ6IDM5LCBuYW1lOiAnUGVubnN5bHZhbmlhJ30sIHtpZDogNDAsIG5hbWU6ICdSaG9kZSBJc2xhbmQnfSxcblx0e2lkOiA0MSwgbmFtZTogJ1NvdXRoIENhcm9saW5hJ30sIHtpZDogNDIsIG5hbWU6ICdTb3V0aCBEYWtvdGEnfSxcblx0e2lkOiA0MywgbmFtZTogJ1Rlbm5lc3NlZSd9LCB7aWQ6IDQ0LCBuYW1lOiAnVGV4YXMnfSxcblx0e2lkOiA0NSwgbmFtZTogJ1V0YWgnfSwge2lkOiA0NiwgbmFtZTogJ1Zlcm1vbnQnfSxcblx0e2lkOiA0NywgbmFtZTogJ1ZpcmdpbmlhJ30sIHtpZDogNDgsIG5hbWU6ICdXYXNoaW5ndG9uJ30sXG5cdHtpZDogNDksIG5hbWU6ICdXZXN0IFZpcmdpbmlhJ30sIHtpZDogNTAsIG5hbWU6ICdXaXNjb25zaW4nfSxcblx0e2lkOiA1MSwgbmFtZTogJ1d5b21pbmcnfV07XG5cblx0cHJpdmF0ZSBfY2FjaGU6YW55O1xuXHRwcml2YXRlIF9wcmV2Q29udGV4dDphbnk7XG5cblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMucmFuZG9tKCk7XG5cdFx0dGhpcy5yYW5kb21TdGFja2VkKCk7XG5cdH1cblxuXHQvLyBBbGVydFxuXHRwdWJsaWMgY2xvc2VBbGVydChpOm51bWJlcik6dm9pZCB7XG5cdFx0dGhpcy5hbGVydHMuc3BsaWNlKGksIDEpO1xuXHR9XG5cdHB1YmxpYyBhZGRBbGVydCgpOnZvaWQge1xuXHRcdHRoaXMuYWxlcnRzLnB1c2goe21zZzogJ0Fub3RoZXIgYWxlcnQhJywgdHlwZTogJ3dhcm5pbmcnLCBjbG9zYWJsZTogdHJ1ZX0pO1xuXHR9XG5cblx0Ly8gRHJvcGRvd25cblx0cHVibGljIHRvZ2dsZWQob3Blbjpib29sZWFuKTp2b2lkIHtcblx0XHRjb25zb2xlLmxvZygnRHJvcGRvd24gaXMgbm93OiAnLCBvcGVuKTtcblx0fVxuXG5cdHB1YmxpYyB0b2dnbGVEcm9wZG93bigkZXZlbnQ6TW91c2VFdmVudCk6dm9pZCB7XG5cdFx0JGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuc3RhdHVzLmlzb3BlbiA9ICF0aGlzLnN0YXR1cy5pc29wZW47XG5cdH1cblxuXHQvLyBQYWdpbmF0aW9uXG5cdHB1YmxpYyBzZXRQYWdlKHBhZ2VObzpudW1iZXIpOnZvaWQge1xuXHRcdHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlTm87XG5cdH07XG5cblx0cHVibGljIHBhZ2VDaGFuZ2VkKGV2ZW50OmFueSk6dm9pZCB7XG5cdFx0Y29uc29sZS5sb2coJ1BhZ2UgY2hhbmdlZCB0bzogJyArIGV2ZW50LnBhZ2UpO1xuXHRcdGNvbnNvbGUubG9nKCdOdW1iZXIgaXRlbXMgcGVyIHBhZ2U6ICcgKyBldmVudC5pdGVtc1BlclBhZ2UpO1xuXHR9O1xuXHQvLyBQcm9ncmVzc2JhclxuXHRwdWJsaWMgcmFuZG9tKCk6dm9pZCB7XG5cdFx0bGV0IHZhbHVlID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxKTtcblx0XHRsZXQgdHlwZTpzdHJpbmc7XG5cblx0XHRpZiAodmFsdWUgPCAyNSkge1xuXHRcdFx0dHlwZSA9ICdzdWNjZXNzJztcblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgNTApIHtcblx0XHRcdHR5cGUgPSAnaW5mbyc7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IDc1KSB7XG5cdFx0XHR0eXBlID0gJ3dhcm5pbmcnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0eXBlID0gJ2Rhbmdlcic7XG5cdFx0fVxuXG5cdFx0dGhpcy5zaG93V2FybmluZyA9ICh0eXBlID09PSAnZGFuZ2VyJyB8fCB0eXBlID09PSAnd2FybmluZycpO1xuXHRcdHRoaXMuZHluYW1pYyA9IHZhbHVlO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdH07XG5cblx0cHVibGljIHJhbmRvbVN0YWNrZWQoKTp2b2lkIHtcblx0XHRsZXQgdHlwZXMgPSBbJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2RhbmdlciddO1xuXG5cdFx0dGhpcy5zdGFja2VkID0gW107XG5cdFx0bGV0IHRvdGFsID0gMDtcblx0XHRsZXQgbiA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRsZXQgaW5kZXggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkpO1xuXHRcdFx0bGV0IHZhbHVlID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDMwKSArIDEpO1xuXHRcdFx0dG90YWwgKz0gdmFsdWU7XG5cdFx0XHR0aGlzLnN0YWNrZWQucHVzaCh7XG5cdFx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0ICAgICAgICBtYXg6IHZhbHVlLCAvLyBpICE9PSAobiAtIDEpID8gdmFsdWUgOiAxMDAsXG5cdCAgICAgICAgdHlwZTogdHlwZXNbaW5kZXhdXG5cdCAgICB9KTtcblx0XHR9XG5cdH07XG5cdC8vIFJhdGluZ1xuXHRwdWJsaWMgaG92ZXJpbmdPdmVyKHZhbHVlOm51bWJlcik6dm9pZCB7XG5cdFx0dGhpcy5vdmVyU3RhciA9IHZhbHVlO1xuXHRcdHRoaXMucGVyY2VudCA9IDEwMCAqICh2YWx1ZSAvIHRoaXMubWF4KTtcblx0fTtcblxuXHRwdWJsaWMgcmVzZXRTdGFyKCk6dm9pZCB7XG5cdFx0dGhpcy5vdmVyU3RhciA9IHZvaWQgMDtcblx0fVxuXHQvLyBUYWJzXG5cdHB1YmxpYyBhbGVydE1lKCk6dm9pZCB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKTp2b2lkIHtcblx0XHRcdGFsZXJ0KCdZb3VcXCd2ZSBzZWxlY3RlZCB0aGUgYWxlcnQgdGFiIScpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHB1YmxpYyBzZXRBY3RpdmVUYWIoaW5kZXg6bnVtYmVyKTp2b2lkIHtcblx0XHR0aGlzLnRhYnNbaW5kZXhdLmFjdGl2ZSA9IHRydWU7XG5cdH07XG5cblx0cHVibGljIHJlbW92ZVRhYkhhbmRsZXIoLyp0YWI6YW55Ki8pOnZvaWQge1xuXHRcdGNvbnNvbGUubG9nKCdSZW1vdmUgVGFiIGhhbmRsZXInKTtcblx0fTtcblxuXHQvLyBUeXBlaGVhZFxuXHRwdWJsaWMgZ2V0Q29udGV4dCgpOmFueSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRwdWJsaWMgZ2V0QXN5bmNEYXRhKGNvbnRleHQ6YW55KTpGdW5jdGlvbiB7XG5cdFx0aWYgKHRoaXMuX3ByZXZDb250ZXh0ID09PSBjb250ZXh0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fY2FjaGU7XG5cdFx0fVxuXG5cdFx0dGhpcy5fcHJldkNvbnRleHQgPSBjb250ZXh0O1xuXHRcdGxldCBmOkZ1bmN0aW9uID0gZnVuY3Rpb24gKCk6UHJvbWlzZTxzdHJpbmdbXT4ge1xuXHRcdFx0bGV0IHA6UHJvbWlzZTxzdHJpbmdbXT4gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZTpGdW5jdGlvbikgPT4ge1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRsZXQgcXVlcnkgPSBuZXcgUmVnRXhwKGNvbnRleHQuYXN5bmNTZWxlY3RlZCwgJ2lnJyk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUoY29udGV4dC5zdGF0ZXMuZmlsdGVyKChzdGF0ZTphbnkpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBxdWVyeS50ZXN0KHN0YXRlKTtcblx0XHRcdFx0XHR9KSk7XG5cdFx0XHRcdH0sIDIwMCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cdFx0dGhpcy5fY2FjaGUgPSBmO1xuXHRcdHJldHVybiB0aGlzLl9jYWNoZTtcblx0fVxuXG5cdHB1YmxpYyBjaGFuZ2VUeXBlYWhlYWRMb2FkaW5nKGU6Ym9vbGVhbik6dm9pZCB7XG5cdFx0dGhpcy50eXBlYWhlYWRMb2FkaW5nID0gZTtcblx0fVxuXG5cdHB1YmxpYyBjaGFuZ2VUeXBlYWhlYWROb1Jlc3VsdHMoZTpib29sZWFuKTp2b2lkIHtcblx0XHR0aGlzLnR5cGVhaGVhZE5vUmVzdWx0cyA9IGU7XG5cdH1cblxuXHRwdWJsaWMgdHlwZWFoZWFkT25TZWxlY3QoZTphbnkpOnZvaWQge1xuXHRcdGNvbnNvbGUubG9nKGBTZWxlY3RlZCB2YWx1ZTogJHtlLml0ZW19YCk7XG5cdH1cbn1cbiJdfQ==
