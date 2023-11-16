import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent {

  employee: Employee = new Employee();
  employeeDb: Employee = new Employee();
  constructor( private employeeService : EmployeeService,
    private route : ActivatedRoute,
    private router : Router)
    {}
  id: number= 0;
  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employeeDb=data;
    });
    console.log(this.employeeDb.name)
  }
updateEmployee() {
  this.employeeService.updateEmployee(this.id, this.employee);
}
}
