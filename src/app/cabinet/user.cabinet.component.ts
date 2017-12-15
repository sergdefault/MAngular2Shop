/**
 * Created by SerhiiTsymbaliuk on 12/6/17.
 */
import {Component, OnInit} from "@angular/core";
import {UserService} from "./user.service";
import {User} from "./User";
import {Order} from "../order/order";
import {OrderService} from "../order/order.service";

@Component({
  templateUrl: './user.cabinet.component.html',
})

export class UserCabinetComponent implements OnInit{
  user : User;
  orders : Order[];

  constructor(private userService: UserService,
              private orderService: OrderService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(u => this.user = u);
    this.orderService.getOrders().subscribe(o=>this.orders=o);
  }
}
