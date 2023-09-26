import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreedomtotravelComponent } from './freedomtotravel.component';

describe('FreedomtotravelComponent', () => {
  let component: FreedomtotravelComponent;
  let fixture: ComponentFixture<FreedomtotravelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreedomtotravelComponent]
    });
    fixture = TestBed.createComponent(FreedomtotravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
