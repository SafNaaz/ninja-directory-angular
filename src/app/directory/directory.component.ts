import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataService} from '../data.service'
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers : [DataService]
})
export class DirectoryComponent implements OnInit {

  term: any

  ninjas = [] as any

  constructor(
    private logger: LoggingService,
    private dataService: DataService,
    private db: AngularFireDatabase
  ) {}

  logIt(){
    this.logger.log()
  }

  ngOnInit(): void {
    //this.dataService.fetchData().subscribe((data) => (this.ninjas = data.body));
    this.fbGetData(this.db)
    
  }

  fbGetData(db: any) {
    db.database.ref('/').on('child_added', (snapshot :any)=>{
      console.log(snapshot.val())
    })
  }
}
