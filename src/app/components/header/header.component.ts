import { Component } from '@angular/core';
import { OpenmenuService } from 'src/app/services/openmenu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isOpen$ = this.openmenuService.isOpen$;
  
  constructor(private openmenuService: OpenmenuService) {}

  toggleMenu() {
    this.openmenuService.toggleMenu();
    // Adicione a classe ao body quando o menu estiver aberto
    if (this.isOpen$) {
      document.body.classList.add('overflow-hidden');
    } else {
      // Remova a classe quando o menu estiver fechado
      document.body.classList.remove('overflow-hidden');
    }
  }
}
