import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataService} from '../data.service'
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {

  term: any

  ninjas = [] as any

  constructor(
    private logger: LoggingService,
    private db: AngularFireDatabase
  ) {}

  logIt(){
    this.logger.log()
  }

  ngOnInit(): void {
    this.fbGetData(this.db)
  }

  fbGetData(db: any) {
    db.database.ref('/').on('child_added', (snapshot :any)=>{
      this.ninjas.push(snapshot.val())
    })
  }
}
