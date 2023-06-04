import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-min-player',
  templateUrl: './min-player.component.html',
  styleUrls: ['./min-player.component.scss']
})

export class MinPlayerComponent {

  constructor(public dialogRef: MatDialogRef<MinPlayerComponent>){}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
