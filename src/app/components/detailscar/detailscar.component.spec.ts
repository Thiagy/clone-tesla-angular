import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscarComponent } from './detailscar.component';

describe('DetailscarComponent', () => {
  let component: DetailscarComponent;
  let fixture: ComponentFixture<DetailscarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailscarComponent]
    });
    fixture = TestBed.createComponent(DetailscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
