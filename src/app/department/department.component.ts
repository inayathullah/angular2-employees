import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-department',
    templateUrl: 'department.component.html'
})
export class DepartmentComponent {
    @Input()department: any;

}