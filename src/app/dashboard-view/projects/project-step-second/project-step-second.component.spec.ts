import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStepSecondComponent } from './project-step-second.component';

describe('ProjectStepSecondComponent', () => {
  let component: ProjectStepSecondComponent;
  let fixture: ComponentFixture<ProjectStepSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStepSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStepSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
