import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './components/app/app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DetailsComponent} from './components/details/details.component';
import {AppRouterModule} from "../router/router.module";
import {ProgramService} from "./services/program.service";
import {GoalService} from "./services/goal.service";
import {NavbarComponent} from './components/navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        DetailsComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRouterModule,
        HttpModule
    ],
    providers: [
        ProgramService,
        GoalService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
