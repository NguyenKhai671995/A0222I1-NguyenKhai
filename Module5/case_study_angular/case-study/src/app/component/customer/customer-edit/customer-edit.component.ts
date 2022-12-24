import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/Customer";
import {CustomerType} from "../../../model/Customer-type";
import {CustomerServiceService} from "../../../service/customer-service.service";
import {CustomerTypeService} from "../../../service/customer-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerFormEdit: FormGroup;
  // @ts-ignore
  customerSelect: Customer = {};
  customerTypes: CustomerType[]= [];

  constructor(private customerService : CustomerServiceService,
              private customerTypeService : CustomerTypeService,
              private activatedRoute : ActivatedRoute,
              private route : Router) { }

  ngOnInit(): void {
    this.buildEditForm();
    this.customerTypes = this.customerTypeService.findAll()
    this.activatedRoute.paramMap.subscribe(data => {
      const id = +(data.get('id'));
      this.customerService.findById(id).subscribe(value => {
        this.customerSelect = value;
        this.buildEditForm();
      })
    })
  }
  buildEditForm(){
    this.customerFormEdit = new FormGroup(
      {
        id : new FormControl(),
        customerName : new FormControl(this.customerSelect.customerName),
        birthday : new FormControl(this.customerSelect.birthday),
        gender : new FormControl(this.customerSelect.gender),
        idCard : new FormControl(this.customerSelect.idCard),
        phone : new FormControl(this.customerSelect.phone),
        email : new FormControl(this.customerSelect.email),
        customerType : new FormControl(this.customerSelect.customerType),
        address : new FormControl(this.customerSelect.address),

      }
    )
  }

  saveEdit(){
    // @ts-ignore
    this.customerService.updateById(this.customerFormEdit().value).subscribe(data => {
        this.route.navigateByUrl('customer-list').then(result => {
          this.customerFormEdit.reset();
          // @ts-ignore
          this.customerSelect = {};
        })
    })

  }
}
