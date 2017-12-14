/**
 * Created by SerhiiTsymbaliuk on 12/8/17.
 */
import {Component} from "@angular/core";
import {OrderServiceUtil} from "../utils/order/order.service.util";
import {Order} from "./order";
import {OrderItem} from "./order.item";


@Component({
  selector: 'app-accept-order',
  templateUrl: './order.component.html',
})

export class OrderComponent {
  order = new Order();

  constructor(private service: OrderServiceUtil) {
  }

  ngOnInit(): void {
    this.order = this.service.getOrder();
  }

  deleteProduct(item:OrderItem) {
    this.service.deleteItem(item);
  }

  save(): void {
    //this.pr.save(this.p);
    //todo
  }

}
