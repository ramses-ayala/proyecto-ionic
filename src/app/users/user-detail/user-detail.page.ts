import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TaskService } from 'src/app/service/task.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {

  private api: string;
  private user: {};

  constructor(private activatedRoute: ActivatedRoute, private _taskService: TaskService) { 
    
  }


  ngOnInit() {

    this.user = {};

    this.activatedRoute.paramMap.subscribe(paramMap=>{

      this._taskService.getUser(paramMap.get("userId")).subscribe(
        response=>{
          this.user = response;
        },

        error=>{
          console.log("error al mostrar el usuario");
        }
      )
      

    })
  }

}
