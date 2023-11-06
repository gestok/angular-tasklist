import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoModule } from './todo/todo.module';
import { ContactModule } from './contact/contact.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodoModule, ContactModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
