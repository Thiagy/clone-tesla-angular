import { Component, Input, OnInit, OnDestroy } from '@angular/core';

interface Attribute {
  title: string;
  content: string;
}

@Component({
  selector: 'app-videoflexreverse',
  templateUrl: './videoflexreverse.component.html',
  styleUrls: ['./videoflexreverse.component.css']
})
export class VideoflexreverseComponent implements OnInit, OnDestroy {

  @Input() secondaryClass!: string;
  @Input() video: boolean = false;
  @Input() pathvideo!: string;
  @Input() div_flex_reverse: boolean = false;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() content!: string;
  @Input() attributes!: Attribute[];

  isScreenWidthAbove1200px: boolean = false;

  constructor() {}

  ngOnInit() {
    this.checkScreenWidth();
    window.addEventListener('resize', this.checkScreenWidth.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkScreenWidth.bind(this));
  }

  checkScreenWidth() {
    const screenWidth = window.innerWidth;
    this.isScreenWidthAbove1200px = screenWidth < 1200;
  }
}
