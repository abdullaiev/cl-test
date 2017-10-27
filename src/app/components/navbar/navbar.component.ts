import {Component, Input} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    @Input() title: string;
    @Input() backArrow: boolean;

    constructor(private location: Location) {
    }

    goBack() {
        this.location.back();
    }
}
