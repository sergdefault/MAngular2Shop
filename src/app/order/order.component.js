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
var order_service_util_1 = require("../utils/order/order.service.util");
var order_1 = require("./order");
var order_service_1 = require("./order.service");
var authentication_service_1 = require("../login/authentication.service");
var user_service_1 = require("../cabinet/user.service");
var OrderComponent = (function () {
    function OrderComponent(util, orderService, authService, userService) {
        this.util = util;
        this.orderService = orderService;
        this.authService = authService;
        this.userService = userService;
        this.order = new order_1.Order();
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.order = this.util.getOrder();
        if (this.authService.isLoggedIn()) {
            this.userService.getUser().subscribe(function (u) { return _this.order.userId = u.id; });
        }
    };
    OrderComponent.prototype.deleteProduct = function (item) {
        this.util.deleteItem(item);
    };
    OrderComponent.prototype.saveOrder = function (order) {
        this.orderService.save(order);
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    core_1.Component({
        selector: 'app-accept-order',
        templateUrl: './order.component.html',
    }),
    __metadata("design:paramtypes", [order_service_util_1.OrderServiceUtil,
        order_service_1.OrderService,
        authentication_service_1.AuthenticationService,
        user_service_1.UserService])
], OrderComponent);
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map