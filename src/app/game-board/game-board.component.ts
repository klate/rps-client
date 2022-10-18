import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GameResult } from '../types/game/GameResult';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// class that handles the game logic -> Smart component
export class GameBoardComponent implements OnInit{
  
  // the avalable choices as squares for the Gameboard
  availableChoices: any[];

  // the username of the user playing this game
  @Input()
  username: string | undefined;

  // TODO: fix the allowed datatypes below
  // the choice by the user & server ([r]ock, [p]aper, [s]cissors)
  serverChoice: undefined | string; // TODO: remove string here
  // the game state -> finished or not
  gamefinished: boolean | undefined;
  // the winner of the game ([s]erver, [p]layer, [d]raw)
  winner: undefined | string;


  gameServerUrl = 'http://localhost:8080/api/play';


  // constructs a new gameboard
  constructor() {
    this.availableChoices =  ['r', 'p', 's'];
    this.gamefinished = false;
  }


  ngOnInit(): void {
    this.startNewGame();
  }

  // resets the game variables
  startNewGame(): void {
    this.winner = undefined;
    this.gamefinished = false;
  }

  // event handler for the user choice (player plays the game)
  async playGame(choice: string) {
    if(this.gamefinished){
      return;
    }

    const result = await this.makePlayHTTPRequest(this.username, choice);

    this.serverChoice = result.serverChoice;
    this.winner = result.winner;
    this.gamefinished = true;  
  }


  // calls the backend game api and returnes the response
  async makePlayHTTPRequest(username: string | undefined, userchoice: string) : Promise<GameResult> {
    const requParams = '?name=' + username + '&c=' + userchoice;

    return await this.fetchObjData<GameResult>(this.gameServerUrl + requParams);
  }

  // TODO: move this to util folder (with function ***)
  async fetchObjData<T>(url: string) : Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  }


}
