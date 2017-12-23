import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSetComponent } from './game-set.component';
import { GameModule } from './game/game.module';
import { GameSetService } from './game-set.service';

@NgModule({
  imports: [CommonModule, GameModule],
  providers: [GameSetService],
  declarations: [GameSetComponent],
  exports: [GameSetComponent]
})
export class GameSetModule {}
