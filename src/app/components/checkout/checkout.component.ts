import { Component, HostListener } from '@angular/core';

interface Attribute {
  title: string;
  content: string;
  namebutton1: string;
  namebutton2: string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  indexItem: number = 0
  item: Attribute[] = [
    {
      title: 'Model 3',
      content: 'Schedule a Test Drive',
      namebutton1: 'Custom Order',
      namebutton2: 'Demo Drive'
    },
    {
      title: 'Model Y',
      content: 'Schedule a Test Drive',
      namebutton1: 'Buy Now',
      namebutton2: 'Custom Order'
    },
    {
      title: 'Model S',
      content: 'Schedule a Test Drive',
      namebutton1: 'Buy Now',
      namebutton2: 'View Inventory'
    },
    {
      title: 'Model X',
      content: 'Schedule a Test Drive',
      namebutton1: 'Buy Now',
      namebutton2: 'View Inventory'
    },
    {
      title: 'Solar Roof',
      content: 'Schedule a Test Drive',
      namebutton1: 'Order Now',
      namebutton2: 'Learn More'
    },
    {
      title: 'Solar Panels',
      content: 'Schedule a Test Drive',
      namebutton1: 'Order Now',
      namebutton2: 'Learn More'
    },
    {
      title: 'Accessories',
      content: '',
      namebutton1: 'Shop',
      namebutton2: ''
    },
  ];

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.scroll();
  }

  scroll(): void {
    let box_checkout = document.getElementById("box_checkout")
    let btn_existing_inventory = document.getElementById('secondary_button')
    let arrow_homepage = document.getElementById('arrow_homepage')
    let height_top_page = document.documentElement.scrollTop
    let height_current = box_checkout!.clientHeight

    if (height_top_page >= 0) {/*Opacity 1 model 3*/
      box_checkout!.style.opacity = '1'
      arrow_homepage!.style.opacity = '1'
      this.indexItem = 0
    }
    if (height_top_page > (0.24 * height_current)) {
      box_checkout!.style.opacity = '0'
      arrow_homepage!.style.opacity = '0'
    }
    if (height_top_page > (0.72 * height_current)) {/*Opacity 1 model Y*/
      box_checkout!.style.opacity = '1'
      this.indexItem = 1
    }
    if (height_top_page > (1.2368 * height_current)) {
      box_checkout!.style.opacity = '0'
    }
    if (height_top_page > (1.72 * height_current)) {/*Opacity 1 model S*/
      box_checkout!.style.opacity = '1'
      this.indexItem = 2
    }
    if (height_top_page > (2.24 * height_current)) {
      box_checkout!.style.opacity = '0'
    }
    if (height_top_page > (2.72 * height_current)) {/*Opacity 1 model X*/
      box_checkout!.style.opacity = '1'
      this.indexItem = 3
    }
    if (height_top_page > (3.232 * height_current)) {
      box_checkout!.style.opacity = '0'
    }
    if (height_top_page > (3.72 * height_current)) {/*Opacity 1 Solar Roof*/
      box_checkout!.style.opacity = '1'
      this.indexItem = 4
    }
    if (height_top_page > (4.239 * height_current)) {
      box_checkout!.style.opacity = '0'
    }
    if (height_top_page > (4.72 * height_current)) {/*Opacity 1 Solar Panels*/
      box_checkout!.style.opacity = '1'
      this.indexItem = 5
    }
    if (height_top_page > (5.233 * height_current)) {
      box_checkout!.style.opacity = '0'
      btn_existing_inventory!.style.display = 'block'
    }
    if (height_top_page > (5.712 * height_current)) {/*Opacity 1 Acessories */
      box_checkout!.style.opacity = '1'
      this.indexItem = 6
      btn_existing_inventory!.style.display = 'none'
    }
  }
}
