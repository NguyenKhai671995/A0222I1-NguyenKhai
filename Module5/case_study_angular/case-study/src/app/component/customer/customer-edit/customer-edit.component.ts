import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/customer/Customer";
import {CustomerType} from "../../../model/customer/Customer-type";
import {CustomerServiceService} from "../../../service/customer/customer-service.service";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";
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
        console.log(this.customerSelect)
        this.buildEditForm();
      })
    })
  }

  buildEditForm(){
    this.customerFormEdit = new FormGroup(
      {
        id : new FormControl(this.customerSelect.id),
        customerName : new FormControl(this.customerSelect.customerName,[Validators.required]),
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
    this.customerService.updateById(this.customerFormEdit.value).subscribe(data => {
        this.route.navigateByUrl('/customer/customer-list').then(result => {
          this.customerFormEdit.reset();
          this.customerSelect = {};
        })
    })

  }
}
