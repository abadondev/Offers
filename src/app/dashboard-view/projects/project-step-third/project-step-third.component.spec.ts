import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStepThirdComponent } from './project-step-third.component';

describe('ProjectStepThirdComponent', () => {
  let component: ProjectStepThirdComponent;
  let fixture: ComponentFixture<ProjectStepThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStepThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStepThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
