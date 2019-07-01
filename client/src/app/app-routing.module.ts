import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/messages/chat.component';
import { ListComponent } from './chat/list/list.component';

const routes: Routes = [
  {
    path: '', component: ChatComponent
  },
  {
    path: 'message/:user', component: ChatComponent
  },
  {
    path: 'list', component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
