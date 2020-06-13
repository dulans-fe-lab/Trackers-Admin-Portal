import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBusLocationComponent } from './view-bus-location.component';

describe('ViewBusLocationComponent', () => {
  let component: ViewBusLocationComponent;
  let fixture: ComponentFixture<ViewBusLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBusLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBusLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
