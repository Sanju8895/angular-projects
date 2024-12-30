import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rective-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './rective-form.component.html',
  styleUrl: './rective-form.component.scss'
})
export class RectiveFormComponent {

  employeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl()
  });


  employeeFormSubmit(){
    let data = this.employeeForm.value;
    console.log(data, "Employee data");
  }
}
