import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgClassDirective } from './custom-directives/custom-ng_class/ng-class.directive';
import { NgStyleDirective } from './custom-directives/custom-ng_style/ng-style.directive';
import { FormsModule } from '@angular/forms';
import { NgIfDirective } from './custom-directives/custom-ng_if/ng-if.directive';

@Component({
  selector: 'app-directives',
  imports: [CommonModule, NgClassDirective, NgStyleDirective,FormsModule, NgIfDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  isActive:boolean= true;
  dynamicClasses = {
    active: false
  }
  textColor = 'red';
  fontSize:number = 30;
  styleObject = {
    'color': 'red',
    'font-weight': 'bold',
    'background-color': 'yellow'
  };
  name!:string;
  isLoggedIn:boolean = true;
  buttonText:string = "LogOut";
  

  showHidePara(){
    if(this.isActive){
      this.isActive= false;
    }else{
      this.isActive = true;
    }
  }

  loginAction(){
    if(this.isLoggedIn){
      this.buttonText = "Login"
      this.isLoggedIn = false;
    }else{
      this.buttonText = "Logout";
      this.isLoggedIn = true;
    }
  }
}
