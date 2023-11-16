import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './component/add/add.component';
import { FormsModule } from '@angular/forms';
import { EmployeeDetailComponent } from './component/employee-detail/employee-detail.component';
import { EmployeeUpdateComponent } from './component/employee-update/employee-update.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddComponent,
    EmployeeDetailComponent,
    EmployeeUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
