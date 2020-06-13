import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusOwnerComponent } from './add-bus-owner.component';

describe('AddBusOwnerComponent', () => {
  let component: AddBusOwnerComponent;
  let fixture: ComponentFixture<AddBusOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBusOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBusOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
