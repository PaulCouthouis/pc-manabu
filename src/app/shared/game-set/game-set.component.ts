import { Component, OnInit } from '@angular/core';
import { GameSetService } from './game-set.service';
import { Content } from './game/game.model';

@Component({
  selector: 'mnb-game-set',
  templateUrl: './game-set.component.html',
  styleUrls: ['./game-set.component.scss']
})
export class GameSetComponent implements OnInit {
  constructor(private service: GameSetService) {}

  get currentContent(): Content {
    return this.service.currentContent;
  }

  get lblCompleted(): string {
    const score = this.service.score / this.service.limit * 20;
    return '試験が終了しました ： ' + score + ' / 20';
  }

  onCloseGame(score: number): void {
    this.service.nextContent(score);
  }

  ngOnInit() {}
}
