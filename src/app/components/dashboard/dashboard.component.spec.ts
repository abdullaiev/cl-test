import {TestBed, ComponentFixture} from "@angular/core/testing";
import {HttpModule} from "@angular/http";
import {RouterTestingModule} from '@angular/router/testing';
import {Observable} from "rxjs";

import {DashboardComponent} from "./dashboard.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {ProgramService} from "../../services/program.service";

describe('DashboardComponent', () => {
    let fixture: ComponentFixture<DashboardComponent>;
    let component: DashboardComponent;
    let element: Element;
    let programService: ProgramService;
    let mockPrograms = [
        {
            title: 'test1 program'
        },
        {
            title: 'test2 program'
        }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpModule
            ],
            declarations: [
                DashboardComponent,
                NavbarComponent
            ],
            providers: [
                ProgramService
            ]
        });

        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement.nativeElement;
        programService = TestBed.get(ProgramService);
        spyOn(programService, 'getPrograms').and.returnValue(Observable.of(mockPrograms));
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should display "Dashboard" title', () => {
        expect(component.title).toEqual('Dashboard');
    });

    it('should fetch the programs', () => {
        expect(component.programs).toBeTruthy();
        expect(element.querySelectorAll('.program').length).toEqual(mockPrograms.length);
    });

    it('should display correct program title', () => {
        let caption = element.querySelectorAll('.program figcaption')[0];
        expect(caption.innerHTML).toContain(mockPrograms[0].title);
    });
});