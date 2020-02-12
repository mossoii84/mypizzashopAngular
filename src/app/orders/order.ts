import {Cart} from '../cart/cart';
import {Pizza} from '../pizza/pizza';

export class Order {
  id: number;
  dateCreatOrder: Date;
  // client: Client;
  carts: Cart;
  pizzas: Pizza;


  constructor(id: number, dateCreatOrder: Date, carts: Cart, pizzas: Pizza) {
    this.id = id;
    this.dateCreatOrder = dateCreatOrder;
    this.carts = carts;
    this.pizzas = pizzas;
  }
}
