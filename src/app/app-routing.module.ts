import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { AddComponent } from './component/add/add.component';
import { EmployeeDetailComponent } from './component/employee-detail/employee-detail.component';
import { EmployeeUpdateComponent } from './component/employee-update/employee-update.component';

const routes: Routes = [
  {
    path : "list" , component : EmployeeListComponent
  },  
  {
    path : "add" , component : AddComponent
  },
  {
    path :'employee-details/:id', component : EmployeeDetailComponent
  },
  {
    path : "update-employee/:id", component : EmployeeUpdateComponent
  },
  {
    path : "" , redirectTo : "list", pathMatch : "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
