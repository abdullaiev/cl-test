import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

import {Program} from "../../interfaces/program";
import {Goal} from "../../interfaces/goal";
import {ProgramService} from "../../services/program.service";
import {GoalService} from "../../services/goal.service";

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
    program: Program;
    goals: Observable<Array<Goal>>;
    sum = 0;

    constructor(private programService: ProgramService,
                private goalService: GoalService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.programService.getProgram(id).subscribe((program: Program) => {
            this.program = program;
            this.goals = this.goalService.getGoals(this.program.goals);
            this.goals.subscribe((goals: Array<Goal>) => {
                goals.forEach((goal: Goal) => {
                    return this.sum += goal.incentive_value;
                });
            });
        })
    }
}
