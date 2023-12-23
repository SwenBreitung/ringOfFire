import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from './../../models/game';
import { PlayerComponent } from '../player/player.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { GameDiscriptionComponent } from '../game-discription/game-discription.component';
import { DialogAddPayerComponent } from '../dialog-add-payer/dialog-add-payer.component';
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule,
  PlayerComponent,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,FormsModule ,
  MatInputModule,
  MatFormFieldModule,
  DialogAddPayerComponent,
  GameDiscriptionComponent,
  
],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'] 
})


export class GameComponent {
  pickCardAnimation = false;
  game: Game;
  currentCard:string ="";

  constructor(public dialog: MatDialog) {
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
this.game.currentPlayer++;
this.game.currentPlayer= this.game.currentPlayer % this.game.player.length;
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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPayerComponent, {

    });
  dialogRef.afterClosed().subscribe(name=> {
      console.log('The dialog was closed',name);
     this.game.player.push(name)
    });
  }
}


