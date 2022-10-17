import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameHistoryComponent } from './game-history/game-history.component';
import { GameHistoryTileComponent } from './game-history-tile/game-history-tile.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    GameBoardComponent,
    GameHistoryComponent,
    GameHistoryTileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
