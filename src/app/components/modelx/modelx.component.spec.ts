import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelxComponent } from './modelx.component';

describe('ModelxComponent', () => {
  let component: ModelxComponent;
  let fixture: ComponentFixture<ModelxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelxComponent]
    });
    fixture = TestBed.createComponent(ModelxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
