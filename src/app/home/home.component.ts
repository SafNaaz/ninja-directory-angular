import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  inputs : ["ninja"],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle = "Welcome to the ninja directory!"

  @Input() ninja: any;
  @Output() onYell = new EventEmitter();

  fireYellEvent(e: any){
    this.onYell.emit(e)
  }
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
