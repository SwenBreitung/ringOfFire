import { Routes } from '@angular/router';
import { StartSreenComponent } from './start-sreen/start-sreen.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
    { path: '', component: StartSreenComponent },
    { path: 'game', component: GameComponent },

];
