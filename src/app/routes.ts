import { Routes } from '@angular/router';
import { CreateComponent } from './routes/create/create.component';
import { DeleteComponent } from './routes/delete/delete.component';
import { HomeComponent } from './routes/home/home.component';
import { UpdateComponent } from './routes/update/update.component';
import { ViewEmployeeComponent } from './routes/view-employee/view-employee.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
	{ path: 'update/:id', component: UpdateComponent },
	{ path: 'delete/:id', component: DeleteComponent },
	{ path: 'create', component: CreateComponent },
	{ path: 'employee/:id', component: ViewEmployeeComponent },
	{ path: '**', redirectTo: '/home', pathMatch: 'full' }
];
