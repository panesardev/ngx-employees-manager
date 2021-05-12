import { Employee } from "src/app/model/employee.model";

export class CreateEmployee {
	static readonly type = '[Employee] create';
	constructor(public payload: Employee) {}
}

export class UpdateEmployee {
	static readonly type = '[Employee] update';
	constructor(public payload: Employee) {}
}

export class DeleteEmployee {
	static readonly type = '[Employee] delete';
	constructor(public id: string) {}
}

export class FindEmployee {
	static readonly type = '[Employee] find';
	constructor(public id: string) {}
}

export class FindAllEmployees {
	static readonly type = '[Employee] findAll';
}
