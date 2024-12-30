import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss'
})
export class Child2Component {
  @Output() childData = new EventEmitter();
  childName:string = "sanjaya child 2"

  sendDataToparent(){
    this.childData.emit(this.childName);
  }
}
