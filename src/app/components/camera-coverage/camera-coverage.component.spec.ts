import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraCoverageComponent } from './camera-coverage.component';

describe('CameraCoverageComponent', () => {
  let component: CameraCoverageComponent;
  let fixture: ComponentFixture<CameraCoverageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CameraCoverageComponent]
    });
    fixture = TestBed.createComponent(CameraCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
