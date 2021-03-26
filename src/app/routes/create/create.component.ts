import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  employee: Employee = new Employee();
  error: string = null;
  
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  async create(): Promise<void> {
    if (this.employeeService.validate(this.employee)) {
      await this.employeeService.create(this.employee).toPromise();
      await this.router.navigate(['home']);
    } else {
      this.error = 'ERROR! all fields are required';
    }
  }
  
  parseDate(dateString: string): Date {
    if (dateString)
      return new Date(dateString);
    return null;
  }

  calculateAge(dob: Date): number {
    const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.2425;
    return Math.floor((new Date().getTime() - dob.getTime()) / MS_PER_YEAR);
  }

}
