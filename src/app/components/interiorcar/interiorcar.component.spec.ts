import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorcarComponent } from './interiorcar.component';

describe('InteriorcarComponent', () => {
  let component: InteriorcarComponent;
  let fixture: ComponentFixture<InteriorcarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteriorcarComponent]
    });
    fixture = TestBed.createComponent(InteriorcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
