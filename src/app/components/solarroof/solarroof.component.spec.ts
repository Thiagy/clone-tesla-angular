import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarroofComponent } from './solarroof.component';

describe('SolarroofComponent', () => {
  let component: SolarroofComponent;
  let fixture: ComponentFixture<SolarroofComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolarroofComponent]
    });
    fixture = TestBed.createComponent(SolarroofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
