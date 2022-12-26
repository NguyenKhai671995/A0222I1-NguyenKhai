import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../../model/Category";
import {ProductService} from "../../../service/product.service";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categorys: Category[] = [];
  formUpdate: FormGroup;
  constructor( private categoriesService: CategoryService,
               private produceService: ProductService,
               private route: Router) {

  }

  ngOnInit(): void {
    this.categorys = this.categoriesService.findAll();
    this.buildForm()

  }

  buildForm() {
    this.formUpdate = new FormGroup(
      {
        id: new FormControl(),
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        dateOfBirth: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.pattern("^[\\w\\-.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),
        phone: new FormControl('', [Validators.required, Validators.pattern("^([0-9]{9})$")]),
        manufacture: new FormControl('', [Validators.required]),
        category: new FormControl('', [Validators.required])
      }
    )
  }

  saveCreate() {
    console.log();
    this.produceService.save(this.formUpdate.value).subscribe(value => {
      this.route.navigateByUrl('').then(result => {
        this.formUpdate.reset();
      })
    })
  }

}
