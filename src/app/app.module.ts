import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoModule } from './todo/todo.module';
import { ContactModule } from './contact/contact.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, TodoModule, ContactModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
