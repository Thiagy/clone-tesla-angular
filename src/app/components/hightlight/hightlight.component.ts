import { Component, Input } from '@angular/core';

interface Attribute {
  title: string;
  content: string;
}

@Component({
  selector: 'app-hightlight',
  templateUrl: './hightlight.component.html',
  styleUrls: ['./hightlight.component.css']
})

export class HightlightComponent {
  @Input() secondaryClass!: string;
  @Input() title!: string;
  @Input() content!: string;
  @Input() attributes!: Attribute[];
}
