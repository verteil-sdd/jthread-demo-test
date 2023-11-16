import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  employee: Employee = new Employee();
  constructor(private employeeService : EmployeeService){}
  saveEmployee(){
    this.employeeService.saveEmployee(this.employee);
    
  }
}
