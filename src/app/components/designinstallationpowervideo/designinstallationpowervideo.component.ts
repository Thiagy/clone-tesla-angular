import { Component, Input } from '@angular/core';

interface Video {
  title: string;
  src: string;
  description: string;
}

@Component({
  selector: 'app-designinstallationpowervideo',
  templateUrl: './designinstallationpowervideo.component.html',
  styleUrls: ['./designinstallationpowervideo.component.css']
})
export class DesigninstallationpowervideoComponent {

  videos: Video[] = [
    {
      title: 'Design',
      src: '/assets/videos/videos-common/design-installation-power-on/1.webm',
      description: 'Aerial imagery and 3D modeling determine your custom design'
    },
    {
      title: 'Installation',
      src: '/assets/videos/videos-common/design-installation-power-on/2.webm',
      description: 'Our integrated design enables quick tile and Powerwall installation'
    },
    {
      title: 'Poer On',
      src: '/assets/videos/videos-common/design-installation-power-on/3.mp4',
      description: 'Final cleanup is completed before system activation'
    }
  ];

  currentVideoIndex: number = 0;

  constructor() {
    setInterval(() => {
      this.moveToNextVideo();
    }, 10000);
  }

  playVideo(index: number): void {
    const video = document.getElementById("video-des-instll-po") as HTMLVideoElement;
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
