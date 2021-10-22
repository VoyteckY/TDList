import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class ToDoListComponent implements OnInit {

  @Input() toDoList:string[] = [];

  @Output() x = new EventEmitter<string>();
  @Output() z = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  removeToDo(task: string) {
    this.x.emit(task)
  }
  active(task: string) {
    this.z.emit(task)
  }
}
