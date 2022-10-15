import { Component, Input } from '@angular/core';
import { GameResult } from '../types/game/GameResult';

@Component({
  selector: 'app-game-history-tile',
  templateUrl: './game-history-tile.component.html',
  styleUrls: ['./game-history-tile.component.scss']
})
// component, the displays the data for one game
export class GameHistoryTileComponent {

  @Input()
  gameResultData: GameResult | undefined;
  
  @Input()
  index: number | undefined;

}
