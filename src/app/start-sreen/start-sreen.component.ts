import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { Router } from '@angular/router';
@Component({
  selector: 'app-start-sreen',
  standalone: true,
  imports: [],
  templateUrl: './start-sreen.component.html',
  styleUrl: './start-sreen.component.scss'
})
export class StartSreenComponent {
  constructor(private router:Router){
  }
  newGame(){
  //startGame
  this.router.navigateByUrl('/game')
  }
  
}
