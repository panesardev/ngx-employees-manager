import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  dob: string;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.params.id;
    this.employee = await this.employeeService.find(id).toPromise();
    this.dob = new Date(this.employee.dob).toLocaleDateString();
  }

}
