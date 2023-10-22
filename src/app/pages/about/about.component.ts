import { Component } from '@angular/core';
import { Contacts } from 'src/app/models/contact.model';
import { Links } from 'src/app/models/links.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  portfolio: Links = new Contacts()
    .contacts.find(contact => contact.label.includes('Portfolio')) as Links;
  
  github: Links = new Contacts()
    .contacts.find(contact => contact.label.includes('GitHub')) as Links;
}
