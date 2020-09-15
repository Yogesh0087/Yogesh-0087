import { Observable } from 'rxjs';
import { StaticDataSource } from './static.datasource';
import { Order } from './order.model';
import { Injectable } from '@angular/core';



@Injectable()

export class OrderRepository {

    private orders: Order[] = [];
    constructor(private datasource: StaticDataSource) {

    }

    getOrders(): Order[] {
        return this.orders;
    }

    saveOrder(Order : Order ) : Observable<Order>
    {
        return this.datasource.saveOrder(Order);
    }
}