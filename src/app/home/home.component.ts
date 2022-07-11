import { Component, OnInit } from '@angular/core';
import {DurationService} from "../duration.service";
import {MatDialog} from "@angular/material/dialog";
import {UserInputDialogComponent} from "../user-input-dialog/user-input-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private duration: DurationService, public dialog: MatDialog) { }

  startTimer() {
    this.duration.startTimer();
  }

  openDialog() {
    const dialogRef = this.dialog.open(UserInputDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
