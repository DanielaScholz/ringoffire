import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { Firestore, collection, doc, docData, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EditPlayerComponent } from '../edit-player/edit-player.component';
import { MinPlayerComponent } from '../min-player/min-player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  cardStack: number[] = [0, 1, 2, 3];
  game: Game;
  gameId: string;
  game$: Observable<any>;
  gameOver: boolean = false;


  constructor(private route: ActivatedRoute, private firestore: Firestore, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.newGame();
    //Hier werden die Parameter der Route mit .subscribe abbonniert...
    this.route.params.subscribe((params) => {
      // console.log(params['id']);
      // console.log(this.route.params)
      this.gameId = params['id']; //...um dann die Parameter in der lokal angelegten Variable zu speichern 
      const coll = collection(this.firestore, 'games'); //mit collection greift man auf den Firestore Database auf den Pfad 'games' zu
      const docRef = doc(coll, this.gameId); //hier greift man auf das Dokument mit der gameId(=params) zu
      this.game$ = docData(docRef); //Daten (v.a. JSONS) aus einem Dokument abrufen und im Observable abspeichern
      this.game$.subscribe((newGameData) => {
        console.log('Game update is:', newGameData);
        this.game.players = newGameData.players;
        this.game.playerImage = newGameData.playerImage;
        this.game.stack = newGameData.stack;
        this.game.playedCards = newGameData.playedCards;
        this.game.currentPlayer = newGameData.currentPlayer;
        this.game.pickCardAnimation = newGameData.pickCardAnimation;
        this.game.currentCard = newGameData.currentCard;
      })
    });
  }


  newGame() {
    this.game = new Game();
    // console.log(this.game);
  }

  restartGame(){
    this.gameOver = false;
    this.newGame();
  }


  pickCard() {
    if (this.game.players.length < 2) {
      // console.log('füge mind 2 spieler hinzu');
      this.minPlayerDialog();
    } else if (this.game.stack.length == 0) {
      this.gameOver = true;
      console.log(this.gameOver);
    } else if (!this.game.pickCardAnimation) {
      this.game.currentCard = this.game.stack.pop(); //pop()removes the last card of the stack
      // console.log(this.currentCard);
      // console.log(this.game);
      this.game.pickCardAnimation = true;
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      this.updateGame();

      setTimeout(() => {
        this.game.playedCards.push(this.game.currentCard); //this array collects all played cards
        this.game.pickCardAnimation = false;
        this.updateGame();
      }, 1000);
    }
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        this.game.playerImage.push('1.webp');
        this.updateGame();
      }
    });
  }

  updateGame() {
    const coll = collection(this.firestore, 'games');
    const docRef = doc(coll, this.gameId);
    updateDoc(docRef, this.game.convertIntoJSON())
  }


  editPlayer(playerId: number) {
    // console.log('edit player on position', playerId);
    const dialogRef = this.dialog.open(EditPlayerComponent);
    dialogRef.afterClosed().subscribe((change: string) => {
      if (change) {
        if (change == 'Delete') {
          this.game.playerImage.splice(playerId, 1);
          this.game.players.splice(playerId, 1);
        } else {
          // console.log('received change', change)
          this.game.playerImage[playerId] = change;
        }
        this.updateGame;
      }
    });
  }

  minPlayerDialog() {
    const dialogRef = this.dialog.open(MinPlayerComponent);
    dialogRef.afterClosed().subscribe((minplaer: string) => {
      console.log(minplaer);
    });
  }


}



