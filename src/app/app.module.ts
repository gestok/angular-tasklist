import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskWrapperModule } from './task-wrapper/task-wrapper.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TaskWrapperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
