import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  cardStack: number[] = [0, 1, 2, 3];
  pickCardAnimation = false;
  game = new Game();

  ngOnInit(): void {
    console.log(this.game);
  }

  newGame(){
    this.game;
  }

  pickCard() {
    this.pickCardAnimation = true;
  }

}
