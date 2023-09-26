import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterpanelsComponent } from './footerpanels.component';

describe('FooterpanelsComponent', () => {
  let component: FooterpanelsComponent;
  let fixture: ComponentFixture<FooterpanelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterpanelsComponent]
    });
    fixture = TestBed.createComponent(FooterpanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
