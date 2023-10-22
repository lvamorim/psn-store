import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMobileMenuClosed: boolean = true;
  buttonClicked: boolean = false;

  constructor() {
    document.addEventListener('click', () => {
      this.isMobileMenuClosed = !this.buttonClicked;
      this.buttonClicked = false;
    });
  }

  toggleMenu () {
    this.isMobileMenuClosed = !this.isMobileMenuClosed;
    this.buttonClicked = !this.isMobileMenuClosed;
  }
}
