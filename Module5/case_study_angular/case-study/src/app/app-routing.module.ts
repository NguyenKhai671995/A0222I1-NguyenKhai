import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {HomeComponent} from "./component/home/home.component";
import {CustomerCreateComponent} from "./component/customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "./component/customer/customer-edit/customer-edit.component";


const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "customer/customer-list", component: CustomerListComponent
  },
  {
    path: "customer/customer-create", component: CustomerCreateComponent
  } ,
  {
    path: "customer/customer-edit/:id",component: CustomerEditComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
