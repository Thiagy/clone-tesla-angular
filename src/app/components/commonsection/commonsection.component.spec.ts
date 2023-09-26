import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonsectionComponent } from './commonsection.component';

describe('CommonsectionComponent', () => {
  let component: CommonsectionComponent;
  let fixture: ComponentFixture<CommonsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonsectionComponent]
    });
    fixture = TestBed.createComponent(CommonsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
