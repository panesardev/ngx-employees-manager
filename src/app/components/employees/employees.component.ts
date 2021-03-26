import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  
  employees: Employee[];
  loading: boolean;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.subscription = this.employeeService.findAll().subscribe(employees => {
      this.employees = employees;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  view(id: string) {
    this.router.navigate(['/employee/' + id]);
  }

  update(id: string): void {
    this.router.navigate(['/update/' + id]);
  }

  delete(id: string): void {
    this.router.navigate(['/delete/' + id]);
  }

}
