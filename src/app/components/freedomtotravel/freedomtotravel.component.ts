import { Component } from '@angular/core';

interface Image {
  src: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-freedomtotravel',
  templateUrl: './freedomtotravel.component.html',
  styleUrls: ['./freedomtotravel.component.css']
})
export class FreedomtotravelComponent {

  images: Image[] = [

    {
      src: '/assets/freendomtravel.jfif',
      title: 'San Francisco to Los Angeles',
      content: '383 miles'
    },
    {
      src: '/assets/freendomtravel.jfif',
      title: 'Berkeley to Lake Tahoe',
      content: '178 miles'
    },
    {
      src: '/assets/freendomtravel.jfif',
      title: 'Manhattan to Boston',
      content: '211 miles'
    },
    {
      src: '/assets/freendomtravel.jfif',
      title: 'Fort Lauderdale to Orlando',
      content: '195 miles'
    },

  ];

  currentImageIndex: number = 0;

  constructor() {
    setInterval(() => {
      this.moveToNextImage();
    }, 10000);
  }

  changeImage(index: number): void {

    const image = document.getElementById("freedomtravel") as HTMLVideoElement;
    image.src = this.images[index].src;
    this.currentImageIndex = index;

  }

  moveToNextImage(): void {

    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.changeImage(this.currentImageIndex);

  }

}
