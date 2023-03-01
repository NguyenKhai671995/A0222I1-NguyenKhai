import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Contract} from "../../../model/contract/Contract";
import {Customer} from "../../../model/customer/Customer";
import {Facility} from "../../../model/facility/Facility";
import {ActivatedRoute, Router} from "@angular/router";
import {ContractService} from "../../../service/contract/contract.service";
import {CustomerServiceService} from "../../../service/customer/customer-service.service";
import {FacilityService} from "../../../service/facility/facility.service";

@Component({
  selector: 'app-contract-update',
  templateUrl: './contract-update.component.html',
  styleUrls: ['./contract-update.component.css']
})
export class ContractUpdateComponent implements OnInit {
  formUpdate : FormGroup;
  contractUpdate : Contract = {};
  customers : Customer[] = [];
  facilities : Facility[] = [] ;
  constructor(private formBuilder: FormBuilder,
              private route : Router,
              private activatedRoute : ActivatedRoute,
              private contractService : ContractService,
              private customerService : CustomerServiceService,
              private facilityService : FacilityService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(x => {
      this.customers = x;
    })
    this.facilityService.findALl().subscribe(x => {
      this.facilities = x;
    })
    this.buildForm();
    if (this.route.url.includes("create")) return;
    console.log(this.formUpdate.value)

    this.activatedRoute.paramMap.subscribe(value => {
      let id = +value.get("id");
      this.contractService.findById(id).subscribe(data => {
        this.contractUpdate = data;
        this.buildForm();
      })
    })
  }

  private buildForm() {
    this.formUpdate = this.formBuilder.group({
      id: [this.contractUpdate.id],
      customer: [this.contractUpdate.customer == undefined ? '' : this.contractUpdate.customer],
      facility: [this.contractUpdate.facility == undefined ? '' : this.contractUpdate.facility],
      dateIn: [this.contractUpdate.dateIn,[Validators.required]],
      dateOut: [this.contractUpdate.dateOut,[Validators.required]],
      deposit: [this.contractUpdate.deposit,[Validators.required]],
    })
  }
  saveData() {

    this.contractService.save(this.formUpdate.value).subscribe(value => {
      this.route.navigateByUrl("/contract/contract-list").then(data => {
        this.formUpdate.reset();
        this.contractUpdate = {};
      })
    });
  }
}
