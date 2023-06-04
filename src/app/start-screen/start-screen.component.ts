import { Component, OnInit } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {
  cardStack = ['clubs_8', 'spade_6', 'clubs_11', 'hearts_10', 'hearts_3', 'diamonds_7', 'diamonds_8', 'diamonds_3', 'diamonds_10', 'diamonds_5', 'clubs_12', 'diamonds_1', 'hearts_8', 'hearts_11', 'hearts_6', 'hearts_2', 'hearts_7', 'spade_11', 'diamonds_9', 'clubs_7', 'hearts_12', 'spade_4', 'diamonds_11', 'clubs_4', 'clubs_9', 'hearts_1', 'spade_1', 'spade_13', 'spade_3', 'clubs_10', 'spade_10', 'clubs_6', 'clubs_2', 'clubs_5', 'clubs_13', 'spade_2', 'diamonds_12', 'diamonds_6', 'spade_9', 'hearts_5', 'clubs_3', 'spade_12', 'hearts_13', 'diamonds_4', 'spade_8', 'diamonds_13', 'hearts_9', 'spade_7', 'clubs_1', 'hearts_4', 'spade_5', 'diamonds_2'];

  constructor(private router: Router, private firestore: Firestore) {}

  ngOnInit(): void {

  }

  async newGame(){
    let game = new Game;
    const coll = collection(this.firestore, 'games');
    await addDoc(coll, game.convertIntoJSON())
    .then((gameInfo:any) =>{
      console.log(gameInfo)
      console.log(gameInfo.id)
      this.router.navigateByUrl('/game/' + gameInfo.id)
    })
  }

}
