import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slidevideointeriorcar',
  templateUrl: './slidevideointeriorcar.component.html',
  styleUrls: ['./slidevideointeriorcar.component.css']
})
export class SlidevideointeriorcarComponent {

  @ViewChild('video') videoElement!: ElementRef;
  currentVideoIndex: number = 0;
  videos: string[] = [
    "/assets/videos/slideinteriorcar/1.mp4",
    "/assets/videos/slideinteriorcar/2.mp4",
    "/assets/videos/slideinteriorcar/3.mp4",
    "/assets/videos/slideinteriorcar/4.mp4",
    "/assets/videos/slideinteriorcar/5.mp4"
  ];
  selectedLabelIndex: number = 0; 
  titles: string[] = [
    "Cinematic Experience",
    "Yoke Steering",
    "Perfect Environment Redesigned Second Row",
    "Perfect Environment",
    "Console-Grade Gaming"
  ];
  contents: string[] = [
    "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
    "A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.",
    "Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.",
    "Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.",
    "Up to 10 teraflops of processing power unlock in-car gaming on-par with todays newest consoles. Play from any seat with wireless controller and headset compatibility."
  ];

  constructor(private renderer: Renderer2) {
    setInterval(() => {
      this.moveToNextVideo();
    }, 5000);
  }

  playVideo(index: number): void {
    const video = this.videoElement.nativeElement;
    video.src = this.videos[index];
    video.load();
    video.play();
    this.currentVideoIndex = index;
    this.selectedLabelIndex = index; 
    this.updateTitleAndContent(index);
  }

  moveToNextVideo(): void {
    this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videos.length;
    this.playVideo(this.currentVideoIndex);
  }

  updateTitleAndContent(index: number): void {
    const titleElement = document.getElementById("title_slide_car");
    const contentElement = document.getElementById("content_slide_car");
    if (titleElement && contentElement) {
      titleElement.textContent = this.titles[index];
      contentElement.textContent = this.contents[index];
    }
  }
}
