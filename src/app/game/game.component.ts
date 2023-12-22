import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from './../../models/game';
// import {Player} from './../player/player.component';
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'] 
})


export class GameComponent {
  pickCardAnimation = false;
  game: Game;
  currentCard:string ="";

  constructor() {
    this.game = new Game();
    console.log(this.game);
  }

  ngOnInit(): void {
    this.newGame(); 
  }

  pickCard() {
 if (!this.pickCardAnimation) {
    const card = this.game.stack.pop();
    if (card == undefined) {
      console.log('error',this.currentCard)
      return;
    }

    this.currentCard = card;
    this.pickCardAnimation = true;   
    
    console.log(this.game.playerCard)
    setTimeout(() => {
      this.game.playerCard.push(this.currentCard);
      this.pickCardAnimation = false;
    }, 1000);
  }
  }

  newGame() {
    this.game = new Game(); 
  }

  
}


