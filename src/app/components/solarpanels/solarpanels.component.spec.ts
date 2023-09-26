import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarpanelsComponent } from './solarpanels.component';

describe('SolarpanelsComponent', () => {
  let component: SolarpanelsComponent;
  let fixture: ComponentFixture<SolarpanelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolarpanelsComponent]
    });
    fixture = TestBed.createComponent(SolarpanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
