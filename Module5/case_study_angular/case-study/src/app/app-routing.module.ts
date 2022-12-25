import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {HomeComponent} from "./component/home/home.component";
import {CustomerCreateComponent} from "./component/customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "./component/customer/customer-edit/customer-edit.component";
import {EmployeeListComponent} from "./component/employee/employee-list/employee-list.component";
import {EmployeeCreateComponent} from "./component/employee/employee-create/employee-create.component";
import {EmployeeEditComponent} from "./component/employee/employee-edit/employee-edit.component";
import {FacilityListComponent} from "./component/facility/facility-list/facility-list.component";
import {FacilityDetailComponent} from "./component/facility/facility-detail/facility-detail.component";


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

  },
  {
    path: "employee/employee-list",component: EmployeeListComponent

  },
  {
    path: "employee/employee-create", component: EmployeeCreateComponent
  },
  {
    path: "employee/employee-edit/:id",component: EmployeeEditComponent
  },
  {
    path: "facility/facility-list",component: FacilityListComponent
  },{
    path: "facility/facility-detail/:id",component: FacilityDetailComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
