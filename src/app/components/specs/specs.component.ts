import { Component, Input } from '@angular/core';

interface Attribute {
  title: string;
  content: string;
}

@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.css']
})
export class SpecsComponent {
  @Input() secondaryClass!: string;
  @Input() title!: string;
  
}
