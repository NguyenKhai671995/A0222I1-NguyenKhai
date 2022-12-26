import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/Product";
import {Category} from "../../../model/Category";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categorys: Category[] = [];
  produceSelect: Product= {};
  formSearch: FormGroup;
  config: any;

  constructor(private productService: ProductService,
              private route: Router,
              private categoriesService: CategoryService) {
  }

  ngOnInit(): void {
    this.loadPage('', '');
    this.formSearch = new FormGroup({
      name: new FormControl(""),
      category_id: new FormControl("")
    });
  }
  loadPage(name: string, category: string) {
    this.productService.findAllByNameAndCategory(name, category).subscribe(value => {
      this.categorys = this.categoriesService.findAll();
      this.products = value;
      console.log(this.products)
    });
    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.products.length
    };
  }

  wantDeleteIt(product: Product) {
    this.produceSelect = product;
  }

  deleteThis(id: number) {
    this.productService.deleteById(id).subscribe(data => {
      this.produceSelect = {};
      alert("delete ok");
      document.getElementById("deleteModal").click();
      this.ngOnInit();
    })
  }

  findByNameAndCategory() {
    this.loadPage(this.formSearch.value.name, this.formSearch.value.category_id)
  }

  pageChanged(event: number) {
    this.config.currentPage = event;
  }
}
