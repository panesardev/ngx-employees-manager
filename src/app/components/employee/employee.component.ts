import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @Input() employee: Employee;

  @Output() onUpdate = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onView = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  view(): void {
    this.onView.emit(this.employee.id);
  }

  update(): void {
    this.onUpdate.emit(this.employee.id);
  }

  delete(): void {
    this.onDelete.emit(this.employee.id);
  }

}
