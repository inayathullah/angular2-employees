import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent} from './employee-list/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeDetailsComponent} from './employee-detail/employee-detail.component';
import { EmployeeService } from './shared/employees.service';
import { appRoutes } from '../routes';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    EmployeesComponent,
    DepartmentsComponent,
    DepartmentComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
