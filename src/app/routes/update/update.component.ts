import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  employee: Employee = new Employee();
  error: string = null;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.params.id;
    this.employeeService.find(id).subscribe(employee => {
      this.employee = employee;
      this.employee.dob = this.parseDate(employee.dob.toString());
    });
  }

  async update(): Promise<void> { 
    if (this.employeeService.validate(this.employee)) {
      await this.employeeService.update(this.employee).toPromise();
      await this.router.navigate(['home']);
    } else {
      this.error = 'ERROR! all fields are required';
    }
  }

  parseDate(dateString: string): Date {
    const year = dateString.substring(0, 4);
    const month = dateString.substring(5, 7);
    const day = dateString.substring(8, 10);

    return dateString ? new Date(+year, +month - 1, +day) : null;
  }
  
  calculateAge(dob: Date): number {
    const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.2425;
    return Math.floor((new Date().getTime() - dob.getTime()) / MS_PER_YEAR);
  }

}
