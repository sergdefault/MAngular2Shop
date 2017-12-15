"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var order_1 = require("../../order/order");
var order_item_1 = require("../../order/order.item");
var OrderServiceUtil = (function () {
    function OrderServiceUtil() {
        this.order = new order_1.Order();
    }
    OrderServiceUtil.prototype.addProduct = function (product) {
        var _this = this;
        if (this.order.items.length == 0) {
            this.order.items.push(new order_item_1.OrderItem(product, 1));
        }
        else {
            var index_1;
            this.order.items.forEach(function (i) {
                if (product.product_id == i.product_id) {
                    index_1 = _this.order.items.indexOf(i);
                }
            });
            if (index_1 == null) {
                this.order.items.push(new order_item_1.OrderItem(product, 1));
            }
            else {
                this.order.items[index_1].quantity++;
            }
        }
        this.calculateTotal();
    };
    OrderServiceUtil.prototype.getOrder = function () {
        return this.order;
    };
    OrderServiceUtil.prototype.deleteItem = function (item) {
        this.order.items.splice(this.order.items.indexOf(item));
        this.calculateTotal();
    };
    OrderServiceUtil.prototype.calculateTotal = function () {
        var _this = this;
        this.order.totalPrice = 0;
        this.order.items.forEach(function (i) { return _this.order.totalPrice += i.price * i.quantity; });
    };
    return OrderServiceUtil;
}());
OrderServiceUtil = __decorate([
    core_1.Injectable()
], OrderServiceUtil);
exports.OrderServiceUtil = OrderServiceUtil;
//# sourceMappingURL=order.service.util.js.map