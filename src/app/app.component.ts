import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rps-client';

  playername: undefined | string;
  usernameSet = false;
  userInputerrormessageVisible = false;

  gameBoardVisible = false;
  gameHistVisible = false;

  showPlayGameButton = false;

  // checks , if the username input is ok
  checkUserNameInput(userinput: string | any){
    if(typeof userinput === 'string'){
      this.playername = userinput.toString();
      if(userinput?.length >= 3 && userinput?.length <= 20){
        this.showPlayGameButton = true;
      }
      else {
        this.showPlayGameButton = false;
      }
    }
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
