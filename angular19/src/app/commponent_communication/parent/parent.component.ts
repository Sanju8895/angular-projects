import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent',
  imports: [Child1Component, Child2Component, Child3Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  parentName:string = "Sanjaya Kumar Nayak";
  child1Data:string = ''
  child2data:string= '';
  child3data:string= '';

  receiveData(data:string){
    this.child2data = data;
  }

  receiveFromchild1(data:string){
    this.child1Data = data;
  }
  receiveFromchild3(data:string){
    this.child3data = data;
  }

}
