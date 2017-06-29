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
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var SharedSlides = (function () {
    function SharedSlides() {
        this.selectedBookingSource = new BehaviorSubject_1.BehaviorSubject('slideOne');
        this.currentMessage = this.selectedBookingSource.asObservable();
        this.CostSelectedSourceMain = new BehaviorSubject_1.BehaviorSubject(null);
        this.cutCostSelected = this.CostSelectedSourceMain.asObservable();
        this.barberUIDIndictor = new BehaviorSubject_1.BehaviorSubject([""]);
        this.barberUIDSelected = this.barberUIDIndictor.asObservable();
        this.dataArray = [];
    }
    SharedSlides.prototype.setIndividualUID = function (UID) {
        this.selectedBookingSource.next(UID);
    };
    SharedSlides.prototype.addToArray = function (barbersArray) {
        this.barberUIDIndictor.next(barbersArray);
    };
    SharedSlides.prototype.insertData = function (data) {
        this.dataArray.unshift(data);
        // this.setArray(this.dataArray);
    };
    SharedSlides = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SharedSlides);
    return SharedSlides;
}());
exports.SharedSlides = SharedSlides;
//# sourceMappingURL=sharedSlides.js.map