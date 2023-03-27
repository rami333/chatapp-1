import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../app.component';
import { UsersComponent } from '../users/users.component';
import { ChatsComponent } from '../chats/chats.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, UsersComponent, ChatsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
