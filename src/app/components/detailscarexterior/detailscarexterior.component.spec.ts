import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscarexteriorComponent } from './detailscarexterior.component';

describe('DetailscarexteriorComponent', () => {
  let component: DetailscarexteriorComponent;
  let fixture: ComponentFixture<DetailscarexteriorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailscarexteriorComponent]
    });
    fixture = TestBed.createComponent(DetailscarexteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
