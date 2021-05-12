import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee.model';
import { DeleteEmployee, FindEmployee } from 'src/app/store/employees.actions';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {

  @Select(state => state.employees.employee) employee$: Observable<Employee>;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.params.id;
    this.store.dispatch(new FindEmployee(id));    
  }

  async delete(id: string): Promise<void> {
    this.store.dispatch(new DeleteEmployee(id));
    await this.home();
  }

  async home(): Promise<void> {
    document.querySelector('section').classList.add('fadeOutDown');
    await this.router.navigate(['home']);
  }
  
}
