import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelyComponent } from './modely.component';

describe('ModelyComponent', () => {
  let component: ModelyComponent;
  let fixture: ComponentFixture<ModelyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelyComponent]
    });
    fixture = TestBed.createComponent(ModelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
