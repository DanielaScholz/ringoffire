import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-rules',
  templateUrl: './game-rules.component.html',
  styleUrls: ['./game-rules.component.scss']
})

export class GameRulesComponent implements OnInit, OnChanges {
  title: string = '';
  desciption: string = '';
  @Input() card: string;

  cardInfo = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Chicks', description: 'All girls must drink!' },
    { title: 'Thumb master', description: 'The person with this card may place their thumb on the table at any time during the game and the last person to do so has to drink.' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Rhyme', description: 'You say a word, and the person to your right has to say a word that rhymes.' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
    { title: 'Question master', description: 'I have never ...' },
    { title: 'King', description: 'Add some of your drink to the dirty pint. Whoever draws the last king has to down the dirty pint.' },
  ];

  ngOnInit(): void {

    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardInfo[cardNumber-1].title;
      this.desciption = this.cardInfo[cardNumber-1].description;
    }

  }

}
