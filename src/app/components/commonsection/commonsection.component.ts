import { Component, Input } from '@angular/core';


interface Attribute {
  title: string;
  content: string;
}

@Component({
  selector: 'app-commonsection',
  templateUrl: './commonsection.component.html',
  styleUrls: ['./commonsection.component.css']
})
export class CommonsectionComponent {
  @Input() video: Boolean = false
  @Input() selectColor: Boolean = false
  @Input() pathvideo!: string;
  @Input() secondaryClass!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() content!: string;
  @Input() attributes!: Attribute[];
}
