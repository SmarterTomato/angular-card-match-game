import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeConstants } from '@core/constants/home.constants';
import { GameConstants } from '@core/constants/game.constants';

const routes: Routes = [
  {
    path: GameConstants.route.root,
    loadChildren: () => import('@pages/game/game.module').then(m => m.GameModule)
  },
  {
    path: HomeConstants.route.root,
    loadChildren: () => import('@pages/home/home.module').then(m => m.HomeModule)
  },
  { path: '', redirectTo: `/${HomeConstants.route.root}`, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
