import { Component, Input, OnInit } from '@angular/core';
import { GameResult } from '../types/game/GameResult';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
// class that handles the game logic -> Smart component
export class GameBoardComponent implements OnInit {
  
  // the avalable choices as squares for the Gameboard
  availableChoices: any[];


  // the username of the user playing this game
  // TODO: get from input box
  username: string | undefined;

  // TODO: fix the allowed datatypes below
  // the choice by the user & server ([r]ock, [p]aper, [s]cissors)
  userchoice: 'r' | 'p' | 's' | undefined | string; // TODO: remove string here
  serverChoice: 'r' | 'p' | 's' | undefined | string; // TODO: remove string here
  // the game state -> finished or not
  gamefinished: boolean | undefined;
  // the winner of the game ([s]erver, [p]layer, [d]raw)
  winner: 's' | 'p' | 'd' | undefined | string;

  // constructs a new gameboard
  constructor() {
    this.availableChoices =  ['r', 'p', 's'];

    // TODO: remove -> for testing only
    this.username = 'Testusername';
    this.serverChoice = 'r'
  }

  ngOnInit(): void {
    this.startNewGame();
  }

  // resets the game variables
  startNewGame(): void {
    this.userchoice = undefined;
    this.winner = undefined;
    this.gamefinished = false;
  }

  // accessor for the username (data binding)
  get playerName(){
    return this.username;
  }

  // event handler for the user choice (player plays the game)
  async playGame(choice: string){
    // TODO: check if user input is correct
    this.userchoice = choice

    // TODO: check username format -> username has to be set beforehand


    const result = await this.makePlayHTTPRequest(this.username, choice);

    this.serverChoice = result.serverChoice;
    this.winner = result.winner;
    this.gamefinished = true;  
  }


  // calls the backend game api and returnes the response
  async makePlayHTTPRequest(username: string | undefined, userchoice: string) : Promise<GameResult> {
    const requParams = '?name=' + username + '&c=' + userchoice;
    // TODO; make global
    const gameServerUrl = 'http://localhost:8080/api/play'

    return await this.fetchObjData<GameResult>(gameServerUrl + requParams);
  }

  // TODO: move this to util folder (with function ***)
  async fetchObjData<T>(url: string) : Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      // TODO: show errors as toast
      throw new Error(response.statusText);
    }
    return await response.json();
  }


}
