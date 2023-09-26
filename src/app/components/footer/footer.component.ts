import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  animal = [
    {name: 'Tom', type: 'cat'},
    {name: 'Frida', type: 'dog'},
    {name: 'Adonis', type: 'Girafa'},
    {name: 'Mickey', type: 'mouse'},
    {name: 'Betowen', type: 'dog'}
  ]
}
