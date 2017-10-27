import {TestBed, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpModule} from "@angular/http";

import {AppComponent} from './app.component';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {DetailsComponent} from "../details/details.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {ProgramService} from "../../services/program.service";

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    let element: Element;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                RouterTestingModule
            ],
            declarations: [
                AppComponent,
                DashboardComponent,
                DetailsComponent,
                NavbarComponent
            ],
            providers: [
                ProgramService
            ]
        });

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement.nativeElement;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should contain router-outlet', () => {
        let routerOutlet = element.querySelector('router-outlet');
        expect(routerOutlet).toBeTruthy();
    });
});
