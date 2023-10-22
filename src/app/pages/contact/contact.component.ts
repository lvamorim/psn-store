import { Component } from '@angular/core';
import { Contacts } from 'src/app/models/contact.model';
import { Links } from 'src/app/models/links.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  contacts: Links[] = new Contacts().contacts;
}
