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

  ngOnInit(): void {
    this.generateSampleData();
  }

  // test method to generate sample data -> todo: replace with read method that call the rps service
  generateSampleData(){
    const maxdataCount = 10;

    // create new dummy game result every 2 seconds
    setInterval(() => {
      if(this.gameResultHistoryData.length < maxdataCount){
        this.gameResultHistoryData.push(this.generateDummyGameresult())
      }
    }, 2000);
  }

  dummynames = ['tick', 'trick', 'track', 'donald', 'gustav'];
  dummyChoices = ['r', 'p', 's'];
  
  // method for creating local dummy values
  generateDummyGameresult() : GameResult{
    const grs = new GameResult();
    
    grs.userName = GameHistoryComponent.getRandomArrayEntry(this.dummynames);
    grs.playerChoice = GameHistoryComponent.getRandomArrayEntry(this.dummyChoices);
    grs.serverChoice = GameHistoryComponent.getRandomArrayEntry(this.dummyChoices);

    return grs;
  }

  static getRandomArrayEntry(array: string[]) : string {
    const index = Math.round(Math.random() * (array.length))
    if(index < 0) {
      array[0];
    }
    if (index >= array.length) {
      array[array.length - 1];
    }
    return array[index];
  }

}
