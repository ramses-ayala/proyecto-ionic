import { Component } from '@angular/core';

import { TaskService } from '../service/task.service';
import { User } from '../model/User';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //private api: string;
  public arrUsers: Array<User>;

  //"https://jsonplaceholder.typicode.com/users";
  //private users = [];

  constructor(private _taskService: TaskService) { 
  }

  ngOnInit(){
    this._taskService.getUsers().subscribe(
      response=>{
        this.arrUsers = response;
        console.log("response: ", response);
      },
      error=>{
        console.log("error: ", error);
      }
    )
  }

}
