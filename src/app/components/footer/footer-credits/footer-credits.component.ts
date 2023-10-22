import { Component } from '@angular/core';
import { Contacts } from 'src/app/models/contact.model';
import { Links } from 'src/app/models/links.model';

@Component({
  selector: 'app-footer-credits',
  templateUrl: './footer-credits.component.html',
  styleUrls: ['./footer-credits.component.scss']
})
export class FooterCreditsComponent {
  github: Links = new Contacts()
    .contacts.find(contact => contact.label.includes('GitHub')) as Links;
}
