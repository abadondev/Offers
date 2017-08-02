import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStepFirstComponent } from './project-step-first.component';

describe('ProjectStepFirstComponent', () => {
  let component: ProjectStepFirstComponent;
  let fixture: ComponentFixture<ProjectStepFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStepFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStepFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
