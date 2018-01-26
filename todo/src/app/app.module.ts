import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { TaskService } from './task.service';
import { ListComponent } from './list/list.component';
import { TaskInputComponent } from './task-input/task-input.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TaskInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ TaskService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
