import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-active-list',
  templateUrl: './active-list.component.html',
  styleUrls: ['./active-list.component.css']
})
export class ActiveListComponent implements OnInit {

  
@Input() activeList:string[] = [];
@Output() q = new EventEmitter<string>();
@Output() w = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  done(task: string) {
    this.q.emit(task);
  }

  removeActive(task: string) {
    this.w.emit(task)
  }

}
