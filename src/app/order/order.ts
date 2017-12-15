import {OrderItem} from "./order.item";
/**
 * Created by SerhiiTsymbaliuk on 12/8/17.
 */

export class Order {
  userId: number;
  items: OrderItem[]=[];
  date: Date;
  totalPrice:number;
  constructor(){
  }
}
