import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusOwnersComponent } from './bus-owners.component';

describe('BusOwnersComponent', () => {
  let component: BusOwnersComponent;
  let fixture: ComponentFixture<BusOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
