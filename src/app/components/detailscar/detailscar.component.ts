import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detailscar',
  templateUrl: './detailscar.component.html',
  styleUrls: ['./detailscar.component.css']
})
export class DetailscarComponent {
  @Input() secondaryClass_image_1!: string;
  @Input() secondaryClass_image_2!: string;
  @Input() secondaryClass_image_3!: string;

}
