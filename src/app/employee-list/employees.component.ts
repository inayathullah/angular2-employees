import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employees.service';
@Component({
    templateUrl: 'employees.component.html'
})
export class EmployeesComponent implements OnInit {
    employees: Array<any>;
    constructor(private employeeService: EmployeeService){

    }
    ngOnInit() {
        this.employees = this.employeeService.getEmployees();
    }

}
