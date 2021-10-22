import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  doneList: string[] = [];
  toDoList: Array<string> = [];
  activeList: Array<string> = [];
  colors: string[] = [];
  inputText: string = "";
  colorNumber: number = 0;

  ngOnInit() {
    this.toDoList = ['Gotowanie', 'Mycie okien', 'Zakupy'];
    this.activeList = ['Szukanie pracy', 'Nauka programowania'];
    this.doneList = ['Zrobić obiad'];
    // this.colors = ['rgba(224, 195, 27, 0.601)', 'rgba(255, 255, 255, 0.601)', 'rgba(57, 243, 72, 0.601)','rgba(206, 58, 58, 0.664)'] 
  }

  add() {
    if (this.inputText.length !== 0) {
      this.toDoList.push(this.inputText)
      this.inputText = "";
    } else {
      return alert('Wprowadź zadania do wykonania!')
    }
  }

  done(task: string) {
    this.doneList.push(task)
    this.removeActive(task)
  }

  active(task:string){
    this.activeList.push(task);
    this.removeToDo(task)
  }

  removeToDo(task: string) {
    const index2: number = this.toDoList.indexOf(task);
    if (index2 !== -1) {
      this.toDoList.splice(index2, 1);
    }
  }
  
  removeActive(task:string) {
    const index1: number = this.activeList.indexOf(task);
    if (index1 !== -1) {
      this.activeList.splice(index1, 1);
    }
  }

  clear(){
    this.doneList = [];
  }

  color() {
    //Naciśnięcie tego powoduje zmiane koloru czcionki
    return alert('Choice Color-style')
  }
}


