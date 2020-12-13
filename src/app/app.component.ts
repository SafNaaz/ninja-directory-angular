import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ninja-directory';
  name = 'Safnas';
  ninja = {
    name : "Ryu",
    belt : "red"
  }

  yell(e: any){
    alert('I am yelling')
    console.log(e)
  }
}
