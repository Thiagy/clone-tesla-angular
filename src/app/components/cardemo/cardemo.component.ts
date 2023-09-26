import { Component } from '@angular/core';

interface Video {
  title: string;
  src: string;
  description: string;
}

@Component({
  selector: 'app-cardemo',
  templateUrl: './cardemo.component.html',
  styleUrls: ['./cardemo.component.css']
})
export class CardemoComponent {
  
  videos: Video[] = [
    {
      title: 'Navigate on Autopilot',
      src: '/assets/videos/videos-common/car-demo/2.1.mp4',
      description: 'Active guidance from on-ramp to off-ramp'
    },
    {
      title: 'Auto Lane Change',
      src: '/assets/videos/videos-common/car-demo/2.2.mp4',
      description: 'Automatically change lanes while driving on the highway'
    },
    {
      title: 'Summon',
      src: '/assets/videos/videos-common/car-demo/2.3.mp4',
      description: 'Automatically retrieve your car'
    },
    {
      title: 'Autopark',
      src: '/assets/videos/videos-common/car-demo/2.4.mp4',
      description: 'Parallel and perpendicular parking with a single touch'
    }
  ];

  currentVideoIndex: number = 0;

  constructor() {
    setInterval(() => {
      this.moveToNextVideo();
    }, 10000);
  }

  playVideo(index: number): void {
    const video = document.getElementById("demo-video") as HTMLVideoElement;
    video.src = this.videos[index].src;
    video.load();
    video.play();
    this.currentVideoIndex = index;
  }

  moveToNextVideo(): void {
    this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videos.length;
    this.playVideo(this.currentVideoIndex);
  }
}
