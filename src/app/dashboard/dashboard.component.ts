import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  access_blocks:any[] = [
    {path:"#hero" , blockLabel:"Home"}
  ]

  constructor(private auth: AuthService){

    this.auth.access_blocks_subject.subscribe((data)=>{

      this.access_blocks = data;
      console.log("ththththththth")
    })

    this.auth.get_user_access();
  }





}
