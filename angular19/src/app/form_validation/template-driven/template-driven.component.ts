import { Component } from '@angular/core';
import { RectiveFormComponent } from '../rective-form/rective-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  imports: [RectiveFormComponent, CommonModule, FormsModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})
export class TemplateDrivenComponent {
  formOneData = {
    user: '',
    email: '',
    age: ''
  }



  onSubmit(form:any){
   if(form.valid){
    alert("FormOne Submited");
    console.log("Form One Submited", this.formOneData);
    form.reset();
   }
  }


}
