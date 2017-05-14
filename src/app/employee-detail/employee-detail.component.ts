import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employees.service';
import {ActivatedRoute} from '@angular/router';
@Component({
    selector: 'app-employee-details',
    templateUrl: 'employee-detail.component.html'
})
export class EmployeeDetailsComponent implements OnInit {
    employee:any;
    constructor(private employeeService: EmployeeService,
            private activatedRoute: ActivatedRoute){

    }

    ngOnInit(){
        this.employee=this.employeeService.getEmployee(+this.activatedRoute.snapshot.params['id']);
    }

}
