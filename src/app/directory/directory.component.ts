import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataService} from '../data.service'

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers : [DataService]
})
export class DirectoryComponent implements OnInit {

  term: any

  ninjas = []

  constructor(private logger: LoggingService, private dataService: DataService) { }

  logIt(){
    this.logger.log()
  }

  ngOnInit(): void {
    this.dataService.fetchData().subscribe(data=> console.log(data.body))
  }

}
