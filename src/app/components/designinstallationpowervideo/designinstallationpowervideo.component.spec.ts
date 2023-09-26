import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesigninstallationpowervideoComponent } from './designinstallationpowervideo.component';

describe('DesigninstallationpowervideoComponent', () => {
  let component: DesigninstallationpowervideoComponent;
  let fixture: ComponentFixture<DesigninstallationpowervideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesigninstallationpowervideoComponent]
    });
    fixture = TestBed.createComponent(DesigninstallationpowervideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
