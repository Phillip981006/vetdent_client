import { Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  @ViewChild('login_register_form') form!: ElementRef;

  register?:boolean = false ;
  login?:boolean = false;

  go_to_register(){
    this.register = true;
    this.login = false;

  }

  go_to_login(){
    this.register = false;
    this.login = true;
  }

}
