import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchData(){
    return this.http.get('https://nn-angular-basic-a213f-default-rtdb.firebaseio.com/.json',{observe:'response'})
  }
}
