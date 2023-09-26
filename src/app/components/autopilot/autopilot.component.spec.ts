import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopilotComponent } from './autopilot.component';

describe('AutopilotComponent', () => {
  let component: AutopilotComponent;
  let fixture: ComponentFixture<AutopilotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutopilotComponent]
    });
    fixture = TestBed.createComponent(AutopilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
