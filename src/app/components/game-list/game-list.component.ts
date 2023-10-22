import { Component } from '@angular/core';
import { Game, Games } from 'src/app/models/games.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent {
  games: Game[] = new Games().games;
}
