import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sectioncarhomepage',
  templateUrl: './sectioncarhomepage.component.html',
  styleUrls: ['./sectioncarhomepage.component.css']
})
export class SectioncarhomepageComponent {
  @Input() id: string = '';
}
