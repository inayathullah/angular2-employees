import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'departments.component.html'
})
export class DepartmentsComponent implements OnInit {
    departments: Array<any>;
    ngOnInit(){
        this.departments = new Array();

        let department = {
            id: 2000,
            name: 'Information Technology',
            head: 'AR Mohamed Ismail'
        };
        this.departments.push(department);
        department = {
            id: 2001,
            name: 'Department of Tamil',
            head: 'Mansoor'
        };
        this.departments.push(department);
    }
}