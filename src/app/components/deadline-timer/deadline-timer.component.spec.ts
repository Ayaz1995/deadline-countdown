import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlineTimerComponent } from './deadline-timer.component';

describe('DeadlineTimerComponent', () => {
  let component: DeadlineTimerComponent;
  let fixture: ComponentFixture<DeadlineTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeadlineTimerComponent]
    });
    fixture = TestBed.createComponent(DeadlineTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
