import { Component } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';

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

  showPlayGameButton = false;

  // checks , if the username input is ok
  checkUserNameInput(userinput: string | any){
    if(typeof userinput === 'string'){
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
