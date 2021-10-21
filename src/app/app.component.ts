import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 doneList: Array<string>=[];
 activeList: Array<string> = [];
 inputText: string = "";

  add(){
    if (this.inputText.length !== 0) {
      this.activeList.push(this.inputText)
      this.inputText = "";
    // } else {
    //   return alert('Wprowadź najpierw temat zadania do wykonania!')
    }
  }
  remove(){}
  done(){}
}


