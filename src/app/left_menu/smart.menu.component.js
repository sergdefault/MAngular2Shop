/**
 * Created by SerhiiTsymbaliuk on 7/16/17.
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var categories_sercice_1 = require("../category/categories.sercice");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../login/authentication.service");
var SmartMenuComponent = (function () {
    function SmartMenuComponent(router, categoriesService, authService) {
        var _this = this;
        this.router = router;
        this.categoriesService = categoriesService;
        this.authService = authService;
        this.categoriesService.getAll().subscribe(function (p) { return _this.categories = p; });
    }
    SmartMenuComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return SmartMenuComponent;
}());
SmartMenuComponent = __decorate([
    core_1.Component({
        selector: 'smart-menu',
        providers: [categories_sercice_1.CategoriesService],
        templateUrl: './smart.menu.html',
        styles: ['./smart-menu.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, categories_sercice_1.CategoriesService,
        authentication_service_1.AuthenticationService])
], SmartMenuComponent);
exports.SmartMenuComponent = SmartMenuComponent;
//# sourceMappingURL=smart.menu.component.js.map