import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-autopilot',
  templateUrl: './autopilot.component.html',
  styleUrls: ['./autopilot.component.css']
})
export class AutopilotComponent {
  @Input() content!: string;
}
