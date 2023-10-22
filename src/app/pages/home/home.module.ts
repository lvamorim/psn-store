import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GameListModule } from 'src/app/components/game-list/game-list.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    GameListModule
  ]
})
export class HomeModule { }
