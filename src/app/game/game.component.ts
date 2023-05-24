import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  cardStack: number[] = [0, 1, 2, 3];
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;

  constructor(public dialog: MatDialog){}
  

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.game = new Game();
    console.log(this.game);
  }

  pickCard() {
    if (!this.pickCardAnimation) { 
      this.currentCard =this.game.stack.pop(); //pop()removes the last card of the stack
      console.log(this.currentCard);
      console.log(this.game);
      this.pickCardAnimation = true;
  
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard); //this array collects all played cards
        this.pickCardAnimation = false;
      }, 1000); 
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name:string) => {
      this.game.players.push(name)
    });
  }

}
