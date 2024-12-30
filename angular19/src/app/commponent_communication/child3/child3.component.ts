import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  imports: [],
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.scss'
})
export class Child3Component {
  @Input() data:string ='';
  @Output() child3Event = new EventEmitter<string>();
  child3Name:string = "Sanjaya child 3";

  sendToParent(){
    this.child3Event.emit(this.child3Name);
  }

}
