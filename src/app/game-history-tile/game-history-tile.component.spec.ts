import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHistoryTileComponent } from './game-history-tile.component';

describe('GameHistoryTileComponent', () => {
  let component: GameHistoryTileComponent;
  let fixture: ComponentFixture<GameHistoryTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameHistoryTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameHistoryTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
