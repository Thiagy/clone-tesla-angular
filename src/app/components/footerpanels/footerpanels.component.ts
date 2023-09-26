import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footerpanels',
  templateUrl: './footerpanels.component.html',
  styleUrls: ['./footerpanels.component.css']
})
export class FooterpanelsComponent {
  
  @Input() title!: string;

}
