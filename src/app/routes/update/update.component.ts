import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee.model';
import { FindEmployee, UpdateEmployee } from 'src/app/store/employees.actions';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {

  @Select(state => state.employees.employee) employee$: Observable<Employee>;
  employee: Employee = new Employee();
  error: string = null;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.employee$.subscribe(e => {
      this.employee = { ...e };
    });
  }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.params.id;
    this.store.dispatch(new FindEmployee(id));    
  }

  async update(): Promise<void> { 
    this.store.dispatch(new UpdateEmployee(this.employee));
    await this.home();
  }

  async home(): Promise<void> {
    document.querySelector('section').classList.add('fadeOutDown');
    await this.router.navigate(['home']);
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

  validate(employee: Employee): boolean {
    let hasErrors: boolean = true;
    for (const field in employee) {
      if (field) hasErrors = false;
    }
    return hasErrors ? false : true;
  }

}
