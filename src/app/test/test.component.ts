import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-test',
  standalone: false,
  imports: [
    MatButton
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {


  ngOnInit() {
  }


}
