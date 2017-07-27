import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientViewProjectDetailsComponent } from './client-view-project-details.component';

describe('ClientViewProjectDetailsComponent', () => {
  let component: ClientViewProjectDetailsComponent;
  let fixture: ComponentFixture<ClientViewProjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientViewProjectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientViewProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
