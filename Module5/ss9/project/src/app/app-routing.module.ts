import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from "./component/product/product-list/product-list.component";
import {ProductEditComponent} from "./component/product/product-edit/product-edit.component";
import {ProductCreateComponent} from "./component/product/product-create/product-create.component";


const routes: Routes = [
  {
    path: "", component: ProductListComponent
  },
  {
    path: "edit/:id", component: ProductEditComponent
  },
  {
    path: "create", component: ProductCreateComponent
  }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
