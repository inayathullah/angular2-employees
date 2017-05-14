import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
    getEmployees(){
        return EMPLOYEES;
    }

    getEmployee(id: number){
        return EMPLOYEES.find( employee => employee.id === id);
    }
}


const EMPLOYEES = [
    {
        id: 1001,
        employeeName: 'employee01',
        dob: '01/01/2009',
    },
    {
        id: 1002,
        employeeName: 'employee02',
        dob: '23/01/2009'
    },
    {
        id: 1003,
        employeeName: 'employee03',
        dob: '01/12/2009'
    },{
        id: 1004,
        employeeName: 'employee04',
        dob: '23/12/1982'
    },{
        id: 1005,
        employeeName: 'employee05',
        dob: '01/01/1909'
    },{
        id: 1006,
        employeeName: 'employee06',
        dob: '01/01/1989'
    },{
        id: 1007,
        employeeName: 'employee07',
        dob: '01/05/2009'
    },{
        id: 1008,
        employeeName: 'employee08',
        dob: '01/04/2009'
    },{
        id: 1009,
        employeeName: 'employee09',
        dob: '01/06/1909'
    },{
        id: 1010,
        employeeName: 'employee10',
        dob: '23/01/1999'
    }

]