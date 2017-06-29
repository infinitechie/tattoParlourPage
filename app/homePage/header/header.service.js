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
// import { AngularFireAuth } from 'angularfire2/auth';
var firebase_config_service_1 = require('../../core/service/firebase-config.service');
var HeaderService = (function () {
    function HeaderService(fire) {
        this.fire = fire;
        this.bookingsDbRef = this.fire.database.ref().child('/services');
        this.barbersDBRef = this.fire.database.ref().child('/staff');
        this.customersRef = this.fire.database.ref().child('/users');
        this.auth = this.fire._firebaseAuthRef;
    }
    HeaderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [firebase_config_service_1.FirebaseConfigService])
    ], HeaderService);
    return HeaderService;
}());
exports.HeaderService = HeaderService;
//# sourceMappingURL=header.service.js.map