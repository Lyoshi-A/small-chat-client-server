import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Action } from './../shared/model/action';
import { User } from './../shared/model/user';
import { List } from './../shared/model/list';
import { ChatComponent } from './../messages/chat.component';
import { SocketService } from './../shared/services/socket.service';

@Component({
  selector: 'tcc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit  {
  action = Action;
  users: User[] = [];

  @Input() chat: ChatComponent;

  constructor(private socketService: SocketService, private route: ActivatedRoute) { }

  @Input()  message: string;
  @Output() addNameToMessage = new EventEmitter<string>();

  ngOnInit() {
   this.getList();
  }

  private initModel(): void {
  }

  private getList(): void {
    this.socketService.initSocket();
    const list = this.socketService.onUpdateList()
      .subscribe((list: List) => {
        this.users = [];
        for (let conn in list)
           this.users.push(list[conn]);
        this.users.sort((a,b)=>a.name<b.name?-1:1);
      }); 
      
  }

  public onClickListUser(user) {
    console.log(user);
    this.addNameToMessage.emit(`@${user.name}`);
  }

}
