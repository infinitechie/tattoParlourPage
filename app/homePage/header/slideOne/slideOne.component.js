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
var header_service_1 = require('../header.service');
var Rx_1 = require('rxjs/Rx');
var sharedSlides_1 = require('../sharedSlides');
var Subscription_1 = require('rxjs/Subscription');
var SlideOneComponent = (function () {
    function SlideOneComponent(bookingService, _sharedService) {
        this.bookingService = bookingService;
        this._sharedService = _sharedService;
        this.subscription = new Subscription_1.Subscription();
        // ngDoCheck(){
        //     if(this.pageIndex == "services") {
        //         this._sharedService.setIndex("u22");
        //         this.getAddedBugs();
        //     } else {
        //     }
        // }
        this.state = 'small';
    }
    SlideOneComponent.prototype.animateMe = function () {
        this.state = (this.state === 'small' ? 'large' : 'small');
    };
    SlideOneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.animateMe();
        // this._sharedService.barberArray.subscribe(message => this.barbersArray = message);
        this._sharedService.currentMessage.subscribe(function (message) { return _this.pageIndex = message; });
        //    this.surf();
    };
    SlideOneComponent.prototype.surf = function () {
        //  IntervalObservable.create(5000).take(10).map((x) => x + 1)
        var observable = Rx_1.Observable.interval(100);
        var subscription = observable.subscribe(function (value) {
            console.log(value);
        });
        //         this.subscription = Observable.interval(20 * 60).subscribe(x => {
        //         this.setNewData();
        //   }));
    };
    SlideOneComponent.prototype.goBackData = function () {
        this._sharedService.setIndividualUID("slideThree");
    };
    SlideOneComponent.prototype.setNewData = function () {
        this._sharedService.setIndividualUID("slideTwo");
    };
    // passCutData(cut: string){
    //     this._sharedService.setCut(cut);
    //     this._sharedService.setCost(booking.cost);
    //     if (this.pageIndex == "services"){
    //         this._sharedService.setIndex("barbers");
    //     } else {
    //         console.log("first time on barber page");
    //     }
    // }
    SlideOneComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SlideOneComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'slideOne',
            templateUrl: 'slideOne.component.html',
            styleUrls: ['slideOne.component.css'],
            animations: [
                core_1.trigger('fadeInOut', [
                    core_1.transition(':enter', [
                        core_1.style({ opacity: 0 }),
                        core_1.animate(300, core_1.style({ opacity: 1 }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [header_service_1.HeaderService, sharedSlides_1.SharedSlides])
    ], SlideOneComponent);
    return SlideOneComponent;
}());
exports.SlideOneComponent = SlideOneComponent;
//# sourceMappingURL=slideOne.component.js.map