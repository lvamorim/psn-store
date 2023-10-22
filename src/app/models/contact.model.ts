import { Links } from './links.model';

export class Contacts {
  user: string = 'lvamorim';

  contacts: Links[] = [
    {
      label: 'GitHub',
      link: `https://github.com/${this.user}`
    },
    {
      label: 'Email',
      link: `mailto:${this.user}.dev@gmail.com`
    },
    {
      label: 'LinkedIn',
      link: `https://www.linkedin.com/in/${this.user}`
    },
    {
      label: 'Portfolio',
      link: `https://${this.user}.github.io/portfolio`
    }
  ];
}
