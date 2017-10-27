import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'

import {Program} from '../interfaces/program';
import {environment} from '../../environments/environment';

@Injectable()
export class ProgramService {
    private url = environment.assets + 'program_blueprints.json';

    constructor(private http: Http) {
    }

    getPrograms(): Observable<Array<Program>> {
        return this.http.get(this.url).map((response: Response) => {
            return response.json().program_blueprints.sort(this.comparator);
        });
    }

    getProgram(id: string): Observable<Program> {
        return this.getPrograms().map((programs: Array<Program>) => {
            return programs.find((program: Program) => {
                return program.guid === id;
            });
        });
    }

    private comparator(p1: Program, p2: Program) {
        return p1.display_order > p2.display_order;
    }
}
