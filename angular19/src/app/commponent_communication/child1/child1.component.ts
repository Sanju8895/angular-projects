import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss'
})
export class Child1Component {
  @Input()  data: string = '';
  @Output() child1data = new EventEmitter();

  child1Name:string = "Sanjaya child 1";

  sendToParent(){
    this.child1data.emit(this.child1Name);
  }

}
