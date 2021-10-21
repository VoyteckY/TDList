import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  doneList: Array<string> = [];
  tasksList: Array<string> = [];
  activeList: Array<string> = [];
  inputText: string = "";

  ngOnInit() {
    this.tasksList = ['Gotowanie', 'Mycie okien', 'Zakupy'];
    this.activeList = ['Szukanie pracy', 'Nauka programowania'];
    this.doneList = ['Zrobić obiad'];
  }


  add() {
    if (this.inputText.length !== 0) {
      this.activeList.push(this.inputText)
      this.inputText = "";
    } else {
      return alert('Wprowadź zadania do wykonania!')
    }
  }
  remove(task: string) {
    //Sprawdzić metode forEach
    this.activeList = this.activeList.filter(e => e !== task);
    this.tasksList = this.tasksList.filter(e => e !== task);
  }
  done(task: string) {
    this.doneList.push(task)
    this.remove(task)
  }
  color() {
    //Naciśnięcie tego powoduje zmiane koloru czcionki
    //
    return alert('Choice Color-style')
  }
}


