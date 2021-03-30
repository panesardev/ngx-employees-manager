import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.params.id;
    this.employee = await this.employeeService.find(id).toPromise();
  }

  async delete(): Promise<void> {
    await this.employeeService.delete(this.employee.id).toPromise();
    await this.home();
  }

  async home(): Promise<void> {
    document.querySelector('section').classList.add('fadeOutDown');
    await this.router.navigate(['home']);
  }
  
}
