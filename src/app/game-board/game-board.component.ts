import { Component, Input, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
// class that handles the game logic
export class GameBoardComponent implements OnInit {
  
  // the avalable choices as squares for the Gameboard
  availableChoices: SquareComponent[];

  // the username of the user playing this game
  @Input() 
  username: string | undefined;

  // the choice by the user & server ([r]ock, [p]aper, [s]cissors)
  userchoice: 'r' | 'p' | 's' | undefined | string; // TODO: remove string here
  serverChoice: 'r' | 'p' | 's' | undefined | string; // TODO: remove string here
  // the game state -> finished or not
  gamefinished: boolean | undefined;
  // the winner of the game ([s]erver, [p]layer, [d]raw)
  winner: 's' | 'p' | 'd' | undefined;

  // constructs a new gameboard
  constructor() {
    this.availableChoices = Array(3);
    this.availableChoices[0] = new SquareComponent('r');
    this.availableChoices[1] = new SquareComponent('p');
    this.availableChoices[2] = new SquareComponent('s');

    this.initGame();
  }

  ngOnInit(): void {
  }

  // resets the game variables
  initGame(): void{
    this.userchoice = undefined;
    this.winner = undefined;
    this.gamefinished = false;
  }

  // accessor for the username 
  get playerName(){
    return this.username;
  }

  // accessor for the player choice
  get playerChoice(){
    return this.userchoice;
  }

  // event handler for the user choice
  squareSelected(choice: string){
    // TODO: check if user input is correct
    this.userchoice = choice;

    // TODO: check username format

    // TODO: make HTTP request towards server with username & choice
    this.makeHTTPRequest(this.username, choice);

    // TODO: set results of the server
  }

  makeHTTPRequest(username: string | undefined, userchoice: string) : string {
    // TODO: replace response with response-obj
    return "";
  }

}
