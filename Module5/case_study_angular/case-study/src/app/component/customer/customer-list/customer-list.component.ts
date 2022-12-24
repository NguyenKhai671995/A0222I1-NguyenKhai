import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/Customer";
import {CustomerServiceService} from "../../../service/customer-service.service";
import {CustomerTypeService} from "../../../service/customer-type.service";
import {CustomerType} from "../../../model/Customer-type";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  // @ts-ignore
  customerSelect : Customer = {};
  customerTypes : CustomerType[] = [];

  constructor(private customerService: CustomerServiceService,
              private customerTypeService : CustomerTypeService) { }

  ngOnInit(): void {
    this.findALl();
  }


  private findALl(){
    this.customerService.getAllCustomer().subscribe(data => {
      this.customerTypes = this.customerTypeService.findAll();
      this.customers = data;
      console.log(data)
    })
  }

  deleteThis(id: number) {
    this.customerService.deleteById(id).subscribe(value => {
      // @ts-ignore
      this.customerSelect = {};
      document.getElementById("deleteModal").click();
      this.ngOnInit();

    })
  }

  wantDeleteIt(customer: Customer) {
    this.customerSelect = customer;
  }
}
