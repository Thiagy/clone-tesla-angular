import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detailscarexterior',
  templateUrl: './detailscarexterior.component.html',
  styleUrls: ['./detailscarexterior.component.css']
})
export class DetailscarexteriorComponent {
  @Input() secondaryClass_image_1!: string;
  @Input() secondaryClass_image_2!: string;
  @Input() secondaryClass_image_3!: string;
}
