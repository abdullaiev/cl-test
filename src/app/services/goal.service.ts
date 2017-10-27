import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'

import {Goal} from "../interfaces/goal";
import {ID} from "../interfaces/id";
import {environment} from '../../environments/environment';

@Injectable()
export class GoalService {
    private url = environment.assets + 'goals.json';

    constructor(private http: Http) {
    }

    getGoals(IDs: Array<ID>): Observable<Array<Goal>> {
        return this.http.get(this.url).map((response: Response) => {
            let goals = response.json().goals;
            return this.filter(goals, IDs);
        });
    }

    private filter(goals: Array<Goal>, IDs: Array<ID>) {
        //use a map to find all matching goals with O(n) time complexity
        let map = {};

        IDs.forEach((id) => {
            map[id.guid] = true;
        });

        return goals.filter((goal) => {
            return map[goal.guid];
        });
    }
}
