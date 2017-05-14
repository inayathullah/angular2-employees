import { Component, OnChanges } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent{
    selectedMenu: any;

    constructor(private router: ActivatedRoute){
        this.selectedMenu = 'Departments';

        
    }
    
}

