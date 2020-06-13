import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBusOwnerComponent } from './view-bus-owner.component';

describe('ViewBusOwnerComponent', () => {
  let component: ViewBusOwnerComponent;
  let fixture: ComponentFixture<ViewBusOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBusOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBusOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
