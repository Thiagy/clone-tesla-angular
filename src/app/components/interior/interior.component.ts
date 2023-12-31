import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.css']
})
export class InteriorComponent {
  @Input() content!: string;
}
