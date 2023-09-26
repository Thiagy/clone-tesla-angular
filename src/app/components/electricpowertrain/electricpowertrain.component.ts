import { Component, Input } from '@angular/core';

interface Image {
  src: string;
}

interface Attributes {
  title: string;
  content: string;
}

@Component({
  selector: 'app-electricpowertrain',
  templateUrl: './electricpowertrain.component.html',
  styleUrls: ['./electricpowertrain.component.css']
})
export class ElectricpowertrainComponent {

  @Input() car!: Attributes[]

  images: Image[] = [

    {
      src: '/assets/motor-images/motor-1.jfif',
    },
    {
      src: '/assets/motor-images/motor-2.jfif',
    }

  ];

  currentImageIndex: number = 0;

  constructor() {
    setInterval(() => {
      this.moveToNextVideo();
    }, 10000);
  }

  changeImage(index: number): void {

    const image = document.getElementById("motor") as HTMLVideoElement;
    image.src = this.images[index].src;
    this.currentImageIndex = index;

  }

  moveToNextVideo(): void {

    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.changeImage(this.currentImageIndex);

  }

}
