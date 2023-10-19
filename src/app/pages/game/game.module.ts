import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { GamePageComponent } from './game-page/game-page.component';
import { CardGridComponent } from '../../components/card-grid/card-grid.component';


@NgModule({
  declarations: [
    GamePageComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    CardGridComponent
  ]
})
export class GameModule {}
