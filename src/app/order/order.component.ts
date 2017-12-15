/**
 * Created by SerhiiTsymbaliuk on 12/8/17.
 */
import {Component} from "@angular/core";
import {OrderServiceUtil} from "../utils/order/order.service.util";
import {Order} from "./order";
import {OrderItem} from "./order.item";
import {OrderService} from "./order.service";
import {AuthenticationService} from "../login/authentication.service";
import {UserService} from "../cabinet/user.service";


@Component({
    selector: 'app-accept-order',
    templateUrl: './order.component.html',
})

export class OrderComponent {
    order = new Order();

    constructor(private util: OrderServiceUtil,
                private orderService: OrderService,
                private authService: AuthenticationService,
                private userService:UserService) {
    }

    ngOnInit(): void {
        this.order = this.util.getOrder();
        if(this.authService.isLoggedIn()){
            this.userService.getUser().subscribe(u=>this.order.userId=u.id);
        }
    }

    deleteProduct(item: OrderItem) {
        this.util.deleteItem(item);
    }

    saveOrder(order: Order): void {
        this.orderService.save(order);
    }

}
