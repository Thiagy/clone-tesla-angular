import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectioncarhomepageComponent } from './sectioncarhomepage.component';

describe('SectioncarhomepageComponent', () => {
  let component: SectioncarhomepageComponent;
  let fixture: ComponentFixture<SectioncarhomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectioncarhomepageComponent]
    });
    fixture = TestBed.createComponent(SectioncarhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
