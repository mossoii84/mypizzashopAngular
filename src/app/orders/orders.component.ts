import { Component, OnInit } from '@angular/core';
import {ServiceOrders} from './serviceOrders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private serviceOrders: ServiceOrders) { }
  allOrders;


  ngOnInit() {
    this.serviceOrders.getOrder().subscribe(data => this.allOrders = data);
  }
}
