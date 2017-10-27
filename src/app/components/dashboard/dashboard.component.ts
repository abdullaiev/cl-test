import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

import {Program} from "../../interfaces/program";
import {ProgramService} from "../../services/program.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    title = 'Dashboard';
    programs: Observable<Array<Program>>;

    constructor(private programService: ProgramService) {
    }

    ngOnInit() {
        this.programs = this.programService.getPrograms();
    }
}
