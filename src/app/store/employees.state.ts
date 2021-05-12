import { Injectable } from "@angular/core";
import { State, Action, StateContext } from '@ngxs/store';
import { Employee } from "../model/employee.model";
import { EmployeeService } from "../services/employee.service";
import { CreateEmployee, DeleteEmployee, FindAllEmployees, FindEmployee, UpdateEmployee } from './employees.actions';
import { tap } from 'rxjs/operators';

export interface EmployeesStateType {
	employees: Employee[];
	employee: Employee,
}

@State({
	name: 'employees',
	defaults: {
		employees: [],
		employee: {},
	},
})
@Injectable()
export class EmployeesState {
	constructor(private employeeService: EmployeeService) {}

	@Action(CreateEmployee) 
	create(ctx: StateContext<EmployeesStateType>, { payload }: CreateEmployee) {
		return this.employeeService.create(payload).pipe(
			tap(employees => ctx.patchState({ employees })),
		);
	}
	
	@Action(UpdateEmployee) 
	update(ctx: StateContext<EmployeesStateType>, { payload }: UpdateEmployee) {
		return this.employeeService.update(payload).pipe(
			tap(employees => ctx.patchState({ employees })),
		);
	}
	
	@Action(DeleteEmployee) 
	delete(ctx: StateContext<EmployeesStateType>, { id }: DeleteEmployee) {
		return this.employeeService.delete(id).pipe(
			tap(employees => ctx.patchState({ employees })),
		);
	}
	
	@Action(FindEmployee) 
	find(ctx: StateContext<EmployeesStateType>, { id }: FindEmployee) {
		return this.employeeService.find(id).pipe(
			tap(employee => ctx.patchState({ employee })),
		);
	}

	@Action(FindAllEmployees) 
	findAll(ctx: StateContext<EmployeesStateType>) {
		return this.employeeService.findAll().pipe(
			tap(employees => ctx.patchState({ employees })),
		);
	}
}
