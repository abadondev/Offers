import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientViewProjectComponent } from './client-view-project.component';

describe('ClientViewProjectComponent', () => {
  let component: ClientViewProjectComponent;
  let fixture: ComponentFixture<ClientViewProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientViewProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientViewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
