import { Component } from '@angular/core';
import { PageScrollService, EasingLogic } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent {

  constructor(private pageScrollService: PageScrollService) { }

  scrollToTop() {
    const body = document.querySelector('body');
    if (body) {
      body.scrollIntoView({ behavior: 'smooth' });
    }
  }
}


