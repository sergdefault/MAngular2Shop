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
var user_service_1 = require("../../cabinet/user.service");
var forms_1 = require("@angular/forms");
var CreateNewUserComponent = (function () {
    function CreateNewUserComponent(userService, fb) {
        var _this = this;
        this.userService = userService;
        this.fb = fb;
        this.model = {};
        this.loading = false;
        this.userService.getUser().subscribe(function (u) { return _this.model = u; });
    }
    CreateNewUserComponent.prototype.register = function () {
        this.loading = true;
        console.log(this.model.json);
        this.userService.create(this.model);
    };
    return CreateNewUserComponent;
}());
CreateNewUserComponent = __decorate([
    core_1.Component({
        selector: 'new-user',
        templateUrl: './new.user.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, forms_1.FormBuilder])
], CreateNewUserComponent);
exports.CreateNewUserComponent = CreateNewUserComponent;
//# sourceMappingURL=new.user.component.js.map