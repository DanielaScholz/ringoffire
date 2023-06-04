import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})

export class EditPlayerComponent implements OnInit {
  name: string = '';
  playerImages: Array<string> = ['1.webp', '2.png', 'monkey.png'];

  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>){}

  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}