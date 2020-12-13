import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {

  term: any
  name: string = ''
  belt: string = ''

  ninjas: Observable<any[]>;

  constructor(
    private logger: LoggingService,
    private db: AngularFireDatabase
  ) {
    this.ninjas = db.list('/').valueChanges();
  }

  logIt(){
    this.logger.log()
  }

  ngOnInit(): void {
  }

  fbPostData(name: any, belt: any){
    this.db.list('/').push({name,belt});
    this.name = ''
    this.belt = ''
  }
}
