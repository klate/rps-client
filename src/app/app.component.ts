import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rps-client';

  playername = undefined;
  usernameSet = false;
  userInputerrormessageVisible = false;

  gameBoardVisible = false;
  gameHistVisible = false;

  // checks , if the username input is ok
  checkUserNameInput(){

    // if ok -> show gameboard

    // if not ok -> show error message

  }

  // enables the gameboard visibility and disables the gameHistoryBoard
  setGameBoardVisible(){
    this.gameHistVisible = false;
    this.gameBoardVisible = true;
  }

  setGameHistVisible(){
    this.gameBoardVisible = false;
    this.gameHistVisible = true;
  }

}
