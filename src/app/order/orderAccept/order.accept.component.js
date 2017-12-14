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
/**
 * Created by SerhiiTsymbaliuk on 12/8/17.
 */
var core_1 = require("@angular/core");
var order_service_util_1 = require("../../utils/order/order.service.util");
var order_1 = require("../order");
var OrderAcceptComponent = (function () {
    function OrderAcceptComponent(service) {
        this.service = service;
        this.order = new order_1.Order();
    }
    OrderAcceptComponent.prototype.ngOnInit = function () {
        this.order = this.service.getOrder();
    };
    OrderAcceptComponent.prototype.deleteProduct = function (product) {
        this.service.deleteItem(product);
    };
    OrderAcceptComponent.prototype.save = function () {
        //this.pr.save(this.p);
        //todo
    };
    return OrderAcceptComponent;
}());
OrderAcceptComponent = __decorate([
    core_1.Component({
        selector: 'app-accept-order',
        templateUrl: './order.accept.component.html',
    }),
    __metadata("design:paramtypes", [order_service_util_1.OrderServiceUtil])
], OrderAcceptComponent);
exports.OrderAcceptComponent = OrderAcceptComponent;
//# sourceMappingURL=order.accept.component.js.map