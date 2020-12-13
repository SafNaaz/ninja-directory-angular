import { Component, Input, OnInit } from '@angular/core';

@Component({
  inputs : ["ninja"],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() ninja: any;

  homeTitle = "Welcome to the ninja directory!"
  
  constructor() { }

  ngOnInit(): void {
  }

}
