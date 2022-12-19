import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './ss7-product/product-list/product-list.component';
import {ProductCreateComponent} from "./ss7-product/product-create/product-create.component";


const routes: Routes = [{
  path: 'list',
  component: ProductListComponent
},
  {
    path: 'create',
    component: ProductCreateComponent
  },


  ]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
