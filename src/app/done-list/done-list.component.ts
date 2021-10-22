import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {

  @Input() doneList: string[] = [];
  @Output() e = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  clear(){
    this.e.emit()
  }
  
}
