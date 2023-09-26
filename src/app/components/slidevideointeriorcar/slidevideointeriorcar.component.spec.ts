import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidevideointeriorcarComponent } from './slidevideointeriorcar.component';

describe('SlidevideointeriorcarComponent', () => {
  let component: SlidevideointeriorcarComponent;
  let fixture: ComponentFixture<SlidevideointeriorcarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidevideointeriorcarComponent]
    });
    fixture = TestBed.createComponent(SlidevideointeriorcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
