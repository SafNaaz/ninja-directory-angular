import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  term: any

  ninjas = [
    {name: "Yoshi", belt : "black"},
    {name: "Ryu", belt : "red"},
    {name: "Crystal", belt : "purple"},
  ]

  ngOnInit(): void {
  }

}
