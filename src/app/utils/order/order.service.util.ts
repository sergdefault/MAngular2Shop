import {Injectable} from '@angular/core';
import {IProduct} from '../../products/product';
import {Order} from "../../order/order";
import {AuthenticationService} from "../../login/authentication.service";
import {OrderItem} from "../../order/order.item";

@Injectable()
export class OrderServiceUtil {
    order = new Order();
    total: number = 0;

    constructor(private authService: AuthenticationService) {
        if (authService.isLoggedIn()) {
            //todo;
        }
    }

    addProduct(product: IProduct): void {
        if (this.order.items.length == 0) {
            this.order.items.push(new OrderItem(product, 1));
        } else {
            let index: number;
            this.order.items.forEach(i => {
                    if (product.product_id == i.product_id) {
                        index = this.order.items.indexOf(i);
                    }
                }
            );
            if (index == null) {
                this.order.items.push(new OrderItem(product, 1));
            } else {
                this.order.items[index].quantity++;
            }
        }
    }

    getOrder(): Order {
        return this.order;
    }

    deleteItem(product: IProduct): void {
        this.order.items.forEach(i => {
            if (i.product_id == product.product_id) {
                this.order.items.splice(this.order.items.indexOf(i));
            }
        });
    }

    getTotal(): number {
        this.total = 0;
        this.order.items.forEach(i => this.total += i.price * i.quantity);
        return this.total;
    }
}
