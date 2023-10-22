import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-mobile-button',
  templateUrl: './header-mobile-button.component.html',
  styleUrls: ['./header-mobile-button.component.scss']
})
export class HeaderMobileButtonComponent {
  @Output() toggleMenu: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.toggleMenu.emit();
  }
}
