import { Component, OnInit } from '@angular/core';
import { GameResult } from '../types/game/GameResult';

@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.scss']
})
export class GameHistoryComponent implements OnInit {

  gameResultHistoryData: GameResult[];

  constructor() { 
    this.gameResultHistoryData = [];
  }

  gameHistoryUrl = 'http://localhost:8080/api/history';

  ngOnInit(): void {
    this.gameResultHistoryData = [];
    this.loadGameHistoryData();
  }

  // loads the game data from the game server
  loadGameHistoryData(){
    
    let eventSource = new EventSource(this.gameHistoryUrl);
    eventSource.addEventListener('message', message => {
      let json = JSON.parse(message.data);
      console.log('received: ' + message.data);
      this.gameResultHistoryData.push(new GameResult(json['id'], json['winner'], json['userName'], json['date'], json['playerChoice'], json['serverChoice']));
    });

    eventSource.addEventListener('error', error => {
      console.error(error);
      eventSource.close();
    });
    
  }


}
