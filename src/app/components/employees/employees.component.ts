import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee.model';
import { FindAllEmployees } from 'src/app/store/employees.actions';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  @Select(state => state.employees.employees) employees$: Observable<Employee[]>

  constructor(private router: Router) { }

  ngOnInit(): void {}

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
