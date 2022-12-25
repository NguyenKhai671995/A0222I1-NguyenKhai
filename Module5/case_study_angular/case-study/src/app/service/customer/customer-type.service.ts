import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CustomerType} from "../../model/customer/Customer-type";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerTypeis : CustomerType[] = []

  constructor() {
    this.customerTypeis.push({id: 1, name: 'Diamond'})
    this.customerTypeis.push({id: 2, name: 'Platinum'})
    this.customerTypeis.push({id: 3, name: 'gold'})
    this.customerTypeis.push({id: 4, name: 'Silver'})
    this.customerTypeis.push({id: 5, name: 'Member'})
  }
  findAll(): CustomerType[] {
    return this.customerTypeis;
  }




}
