import {Routes} from '@angular/router';
import { EmployeesComponent } from './app/employee-list/employees.component';
import { EmployeeDetailsComponent } from './app/employee-detail/employee-detail.component';
import { DepartmentsComponent } from './app/departments/departments.component';

export const appRoutes: Routes = [
    {path: 'Employees', component: EmployeesComponent},
    {path: 'Employees/:id', component: EmployeeDetailsComponent},
    {path: 'Departments', component: DepartmentsComponent},
    {path: '', redirectTo:'/Employees', pathMatch: 'full'},
];

