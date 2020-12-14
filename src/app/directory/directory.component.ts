import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {

  term: any
  name: string = ''
  belt: string = ''

  ninjasRef: AngularFireList<any>;
  ninjas: Observable<any[]>;

  constructor(
    private logger: LoggingService,
    private db: AngularFireDatabase
  ) {
    //this.ninjas = db.list('/').valueChanges();
    this.ninjasRef = db.list('/');
    this.ninjas = this.ninjasRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...(c.payload.val() as object) }))
      )
    );
  }

  logIt(){
    this.logger.log()
  }

  ngOnInit(): void {
  }

  fbPostData(name: any, belt: any){
    this.ninjasRef.push({name,belt});
    this.name = ''
    this.belt = ''
  }

  fbDeleteItem(key: string) {
      this.ninjasRef.remove(key);
  }

  fbUpdateItem(key: string, belt: string) {
    this.ninjasRef.update(key, { belt });
  }
}
