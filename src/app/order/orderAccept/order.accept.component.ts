/**
 * Created by SerhiiTsymbaliuk on 12/8/17.
 */
import {Component} from "@angular/core";
import {IProduct} from "../../products/product";
import {OrderServiceUtil} from "../../utils/order/order.service.util";
import {Order} from "../order";


@Component({
  selector: 'app-accept-order',
  templateUrl: './order.accept.component.html',
})

export class OrderAcceptComponent {
  order = new Order();

  constructor(private service: OrderServiceUtil) {
  }

  ngOnInit(): void {
    this.order = this.service.getOrder();
  }

  deleteProduct(product: IProduct) {
    this.service.deleteItem(product);
  }

  save(): void {
    //this.pr.save(this.p);
    //todo
  }

}
