import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  company_types:any[] = [
    {oragnization_type_ID:1, oragnization_type_label:"Zoo"},
    {oragnization_type_ID:2, oragnization_type_label:"Sanctuary"},
    {oragnization_type_ID:3, oragnization_type_label:"Game Reserve"},
  ]


}
