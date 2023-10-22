import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderComponent } from './header.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderMobileButtonComponent } from './header-mobile-button/header-mobile-button.component';

const components = [
  HeaderComponent,
  HeaderLogoComponent,
  HeaderMenuComponent,
  HeaderMobileButtonComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ...components
  ]
})
export class HeaderModule { }
