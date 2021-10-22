import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  doneList: string[] = [];
  tasksList: Array<string> = [];
  activeList: Array<string> = [];
  colors: string[] = [];
  inputText: string = "";
  colorNumber: number = 0;

  ngOnInit() {
    this.tasksList = ['Gotowanie', 'Mycie okien', 'Zakupy'];
    this.activeList = ['Szukanie pracy', 'Nauka programowania'];
    this.doneList = ['Zrobić obiad'];
    this.colors = ['rgba(224, 195, 27, 0.601)', 'rgba(255, 255, 255, 0.601)', 'rgba(57, 243, 72, 0.601)','rgba(206, 58, 58, 0.664)'] 
  }

  add() {
    if (this.inputText.length !== 0) {
      this.tasksList.push(this.inputText)
      this.inputText = "";
    } else {
      return alert('Wprowadź zadania do wykonania!')
    }
  }

  removeToDo(task: string) {
    const index2: number = this.tasksList.indexOf(task);
    if (index2 !== -1) {
      this.tasksList.splice(index2, 1);
    }
  }
  
  removeActive(task: string) {
    const index1: number = this.activeList.indexOf(task);
    if (index1 !== -1) {
      this.activeList.splice(index1, 1);
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

  color() {
    //Naciśnięcie tego powoduje zmiane koloru czcionki
    
    return alert('Choice Color-style')
  }
}


