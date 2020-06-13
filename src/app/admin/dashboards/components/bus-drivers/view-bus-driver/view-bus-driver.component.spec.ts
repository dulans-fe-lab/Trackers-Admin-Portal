import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBusDriverComponent } from './view-bus-driver.component';

describe('ViewBusDriverComponent', () => {
  let component: ViewBusDriverComponent;
  let fixture: ComponentFixture<ViewBusDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBusDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBusDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
