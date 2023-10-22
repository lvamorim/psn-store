import { Component } from '@angular/core';
import { FooterLinks } from 'src/app/models/footer-links.model';
import { Links } from 'src/app/models/links.model';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss']
})
export class FooterMenuComponent {
  website: Links[] = new FooterLinks().website;
  products: Links[] = new FooterLinks().products;
  socials: Links[] = new FooterLinks().socials;
}
