import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FooterLogoComponent } from './footer-logo/footer-logo.component';
import { FooterCreditsComponent } from './footer-credits/footer-credits.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { RouterLink } from '@angular/router';

const components = [
  FooterComponent,
  FooterLogoComponent,
  FooterMenuComponent,
  FooterCreditsComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    ...components
  ]
})
export class FooterModule { }
