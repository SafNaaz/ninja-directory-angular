import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  inputs : ["ninja"],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle = "Welcome to the ninja directory!"

  constructor() { }

  ngOnInit(): void {
  }

}
