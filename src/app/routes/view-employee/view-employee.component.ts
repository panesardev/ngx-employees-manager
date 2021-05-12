import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { FindEmployee } from 'src/app/store/employees.actions';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss'],
})
export class ViewEmployeeComponent implements OnInit {

  @Select(state => state.employees.employee) employee$: Observable<Employee>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.params.id;
    this.store.dispatch(new FindEmployee(id));    
  }

  async goto(to: string): Promise<void> {
    document.querySelector('section').classList.add('fadeOutDown');
    await this.router.navigate([to]);
  }
}
