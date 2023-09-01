import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  user_name:string = "";
  user_password:string = "";

  constructor(private auth:AuthService){

  }

  on_login(){

    console.log(this.user_name);
    console.log(this.user_password);

    this.auth.get_user_api_key(this.user_name, this.user_password);

  }

}
