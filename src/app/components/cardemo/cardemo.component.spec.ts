import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardemoComponent } from './cardemo.component';

describe('CardemoComponent', () => {
  let component: CardemoComponent;
  let fixture: ComponentFixture<CardemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardemoComponent]
    });
    fixture = TestBed.createComponent(CardemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
