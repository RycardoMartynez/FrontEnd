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
    const easingLogic: EasingLogic = (t: number, b: number, c: number, d: number): number => {
      t /= d / 2;
      if (t < 1) {
        return c / 2 * t * t + b;
      }
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    this.pageScrollService.scroll({
      document: document,
      scrollTarget: 'body',
      duration: 500,
      easingLogic: easingLogic
    });
  }
}


