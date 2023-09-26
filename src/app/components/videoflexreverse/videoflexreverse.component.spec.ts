import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoflexreverseComponent } from './videoflexreverse.component';

describe('VideoflexreverseComponent', () => {
  let component: VideoflexreverseComponent;
  let fixture: ComponentFixture<VideoflexreverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoflexreverseComponent]
    });
    fixture = TestBed.createComponent(VideoflexreverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
