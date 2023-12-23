import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; 

@Component({
  selector: 'app-game-discription',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-discription.component.html',
  styleUrl: './game-discription.component.scss'
})
export class GameDiscriptionComponent implements OnInit, OnChanges {
 
  titel:string ='';
  text:string = '';
  @Input() card!: string;
  constructor() {
    
  }
  
  ngOnChanges(): void {
    if(this.card){
      console.log('Änderung der Eigenschaft card', this.card);
      console.log('Änderung der Eigenschaft card', +this.card.split('_')[1]);
      let cardNumber = +this.card.split('_')[1];
      this.titel = this.cardActionArry[cardNumber - 1].title; // Zugriff auf das Array-Element mit eckigen Klammern
      this.text = this.cardActionArry[cardNumber - 1].text; // Zugriff auf das Array-Element mit eckigen Klammern
      
    }
 
  }

  ngOnInit(): void {
   
  }
  cardActionArry: { title: string; text: string }[]  = [
    { title: 'Zwei - Du', text: 'Wähle jemanden zum Trinken' },
    { title: 'Drei - Ich', text: 'Du musst trinken' },
    { title: 'Vier - Boden', text: 'Alle berühren Boden' },
    { title: 'Fünf - Jungs', text: 'Jungs trinken' },
    { title: 'Sechs - Mädels', text: 'Mädels trinken' },
    { title: 'Sieben - Himmel', text: 'Alle zeigen hoch' },
    { title: 'Acht - Partner', text: 'Wähle Trinkpartner' },
    { title: 'Neun - Reim', text: 'Starte Reimspiel' },
    { title: 'Zehn - Kategorien', text: 'Nenne Kategorien' },
    { title: 'Bube - Regel', text: 'Erstelle Regel' },
    { title: 'Dame - Frage', text: 'Fragerunde beginnt' },
    { title: 'König - Becher', text: 'Fülle Zentralbecher' },
    { title: 'Ass - Wasserfall', text: 'Wasserfall starten' }
  ]
}
 





