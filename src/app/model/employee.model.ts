export class Employee {
	id?: string;
	firstName: string;
	lastName: string;
	dob: Date;
	age: number;
	gender: 'm' | 'f' = 'm';
	jobTitle: string;
}