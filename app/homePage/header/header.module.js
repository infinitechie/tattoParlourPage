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
// Modules
var core_1 = require('@angular/core');
var core_module_1 = require('../../core/core.module');
var common_1 = require('@angular/common');
// Services
// import { BookingService } from './service/booking.service';
var firebase_config_service_1 = require('../../core/service/firebase-config.service');
var sharedSlides_1 = require("./sharedSlides");
var header_service_1 = require("./header.service");
var slideOne_component_1 = require("./slideOne/slideOne.component");
var slideTwo_component_1 = require("./slideTwo/slideTwo.component");
var slideThree_component_1 = require("./slideThree/slideThree.component");
var HeaderModule = (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        core_1.NgModule({
            imports: [core_module_1.CoreModule, common_1.CommonModule],
            declarations: [slideOne_component_1.SlideOneComponent, slideThree_component_1.SlideThreeComponent, slideTwo_component_1.SlideTwoComponent],
            exports: [slideOne_component_1.SlideOneComponent, slideThree_component_1.SlideThreeComponent, slideTwo_component_1.SlideTwoComponent],
            providers: [sharedSlides_1.SharedSlides, firebase_config_service_1.FirebaseConfigService, header_service_1.HeaderService]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderModule);
    return HeaderModule;
}());
exports.HeaderModule = HeaderModule;
//# sourceMappingURL=header.module.js.map