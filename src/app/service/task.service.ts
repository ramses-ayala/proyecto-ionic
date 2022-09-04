import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public url: string;
  public user: User;
  public users: Array<User>;


  constructor(private _http: HttpClient) { 
    this.url = "https://jsonplaceholder.typicode.com/users";

  }

  getUsers():Observable<any> {
    return this._http.get(this.url);
  }

  getUser(userId): Observable<any>{

    return this._http.get(this.url+"/"+userId);
    
  }



}
