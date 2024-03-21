import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header/header.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {DialogComponent} from "./dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'lr-website-placeholder';

  constructor(public dialog: MatDialog) {
  }


  ngOnInit() {
    this.showDialog();
  }

  showDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
      height: '200px'
    });
    setTimeout(() => {
      dialogRef.close();
    }, 1000000)
  }
}
