import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { Employee } from '../model/employee.model';

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  private URL: string = env.serverURL + '/employee/';

  constructor(private http: HttpClient) { }

  create(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.URL, employee);
  } 

  update(employee: Employee): Observable<any> {
    return this.http.put<Employee>(this.URL + employee.id, employee);
  } 
  
  find(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.URL + id);
  } 

  findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.URL);
  } 
  
  delete(id: string): Observable<any> {
    return this.http.delete<Employee>(this.URL + id);
  } 

  validate(employee: Employee): boolean {
    let hasErrors: boolean = true;
    for (const field in employee) {
      if (field) hasErrors = false;
    }
    return hasErrors ? false : true;
  }

}
