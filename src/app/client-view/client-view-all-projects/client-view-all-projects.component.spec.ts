import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientViewAllProjectsComponent } from './client-view-all-projects.component';

describe('ClientViewAllProjectsComponent', () => {
  let component: ClientViewAllProjectsComponent;
  let fixture: ComponentFixture<ClientViewAllProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientViewAllProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientViewAllProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
