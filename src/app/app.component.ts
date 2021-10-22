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
      this.tasksList.push(this.inputText)
      this.inputText = "";
    } else {
      return alert('Wprowadź zadania do wykonania!')
    }
  }

  remove(task: string) {
    const index1: number = this.activeList.indexOf(task);
    if (index1 !== -1) {
      this.activeList.splice(index1, 1);
    }
    const index2: number = this.tasksList.indexOf(task);
    if (index2 !== -1) {
      this.tasksList.splice(index2, 1);
    }
  }

  done(task: string) {
    this.doneList.push(task)
    this.remove(task)
  }

  active(task: string) {
    this.activeList.push(task);
  }

  color() {
    //Naciśnięcie tego powoduje zmiane koloru czcionki
    //
    return alert('Choice Color-style')
  }
}


