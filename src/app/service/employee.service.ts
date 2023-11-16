import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {




  private baseUrl = "http://localhost:8081/ems";

  constructor(private httpClient : HttpClient) { }

  getEmployeesList():Observable<Employee[]>{

  return this.httpClient.get<Employee[]>(`${this.baseUrl}/list`);

} 
  saveEmployee(employee : Employee):void{
    this.httpClient.post(`${this.baseUrl}/save`, employee).subscribe();
  }
  getEmployeeById(id: number):Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/get/`+id);
  }  
  updateEmployee(id: number, employee: Employee):void {
    this.httpClient.put<Employee>(`${this.baseUrl}/update/`+id, employee).subscribe();
  }  
  deleteEmployee(id: number):void {
    this.httpClient.delete<Employee>(`${this.baseUrl}/delete/`+id).subscribe();
  }
}
