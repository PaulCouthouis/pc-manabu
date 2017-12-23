import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import { GameComponent } from './game.component';
import { GameFormComponent } from './game-form/game-form.component';
import { GameCorrectionComponent } from './game-correction/game-correction.component';
import { GameService } from './game.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [GameService],
  declarations: [GameComponent, GameFormComponent, GameCorrectionComponent],
  exports: [GameComponent]
})
export class GameModule {}
