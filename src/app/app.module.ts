import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoneListComponent } from './done-list/done-list.component';
import { ActiveListComponent } from './active-list/active-list.component';
import { FormsModule } from '@angular/forms';
import { UpperPipe } from './upper.pipe';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DoneListComponent,
    ActiveListComponent,
    UpperPipe,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
