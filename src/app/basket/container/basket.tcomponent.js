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
var order_service_util_1 = require("../../utils/order/order.service.util");
var order_1 = require("../../order/order");
var BasketComponent = (function () {
    function BasketComponent(service) {
        this.service = service;
        this.order = new order_1.Order();
    }
    BasketComponent.prototype.ngOnInit = function () {
        this.order = this.service.getOrder();
    };
    BasketComponent.prototype.deleteProduct = function (product) {
        this.service.deleteItem(product);
    };
    BasketComponent.prototype.save = function () {
        //this.pr.save(this.p);
        //todo
    };
    return BasketComponent;
}());
BasketComponent = __decorate([
    core_1.Component({
        selector: 'app-basket',
        templateUrl: './basket.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [order_service_util_1.OrderServiceUtil])
], BasketComponent);
exports.BasketComponent = BasketComponent;
//# sourceMappingURL=basket.tcomponent.js.map