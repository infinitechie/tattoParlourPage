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
var booking_module_1 = require('../homePage/booking/booking.module');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var core_2 = require('@agm/core');
var core_module_1 = require('../core/core.module');
var homePage_routing_module_1 = require('./homePage-routing.module');
var portfolio_module_1 = require('./portfolio/portfolio.module');
var getTheApp_component_1 = require('./getTheApp/getTheApp.component');
var portfolio_component_1 = require('./portfolio/portfolio.component');
var testimonials_component_1 = require('./testimonials/testimonials.component');
var locations_component_1 = require('./locations/locations.component');
var aboutUs_component_1 = require('./aboutUs/aboutUs.component');
var booking_component_1 = require('./booking/booking.component');
var header_component_1 = require('./header/header.component');
var pricing_component_1 = require('./pricing/pricing.component');
var contactForm_component_1 = require('./contactForm/contactForm.component');
var footer_component_1 = require('./footer/footer.component');
var googleMaps_component_1 = require('./googleMaps/googleMaps.component');
var header_module_1 = require('./header/header.module');
// import {AgmMap} from '../../node_modules/@agm/core/directives/map'
var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        core_1.NgModule({
            imports: [core_module_1.CoreModule, homePage_routing_module_1.HomePageRoutingModule, portfolio_module_1.PortfolioModule, booking_module_1.BookingModule, header_module_1.HeaderModule, forms_1.FormsModule, core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCwyYoVPLnM3q29a2Ayo2ljkVLEHzE1j0E'
                }), platform_browser_1.BrowserModule],
            declarations: [getTheApp_component_1.GetTheAppComponent, portfolio_component_1.PortfoloComponent, testimonials_component_1.TestimonialComponent,
                locations_component_1.LocationComponent, aboutUs_component_1.AboutUsComponent, booking_component_1.BookingComponent, header_component_1.HeaderComponent,
                pricing_component_1.PricingComponent, contactForm_component_1.ContactFormComponent, footer_component_1.FooterComponent, googleMaps_component_1.GoogleMapsComponent],
            exports: [getTheApp_component_1.GetTheAppComponent, portfolio_component_1.PortfoloComponent, testimonials_component_1.TestimonialComponent,
                locations_component_1.LocationComponent, aboutUs_component_1.AboutUsComponent, booking_component_1.BookingComponent, header_component_1.HeaderComponent,
                pricing_component_1.PricingComponent, contactForm_component_1.ContactFormComponent, footer_component_1.FooterComponent, googleMaps_component_1.GoogleMapsComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], HomePageModule);
    return HomePageModule;
}());
exports.HomePageModule = HomePageModule;
//# sourceMappingURL=homePage.module.js.map