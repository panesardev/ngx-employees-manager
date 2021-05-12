import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './routes';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './routes/home/home.component';
import { CreateComponent } from './routes/create/create.component';
import { DeleteComponent } from './routes/delete/delete.component';
import { UpdateComponent } from './routes/update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewEmployeeComponent } from './routes/view-employee/view-employee.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NgxsModule } from '@ngxs/store';
import { EmployeesState } from './store/employees.state';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    HomeComponent,
    CreateComponent,
    DeleteComponent,
    UpdateComponent,
    ViewEmployeeComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([EmployeesState], { developmentMode: !environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
