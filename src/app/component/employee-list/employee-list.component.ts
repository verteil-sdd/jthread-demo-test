import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees!: Employee[];

  employee: Employee = new Employee();

  constructor( private employeeService : EmployeeService){}


  ngOnInit() : void{

    this.getEmployees();

  }

  private getEmployees(){

   this.employeeService.getEmployeesList().subscribe(data=>{
    this.employees = data;
    console.log(this.employees);
   })
}
deleteEmployee(id:number) {
  console.log('clicked');
  this.employeeService.deleteEmployee(id);
}

}