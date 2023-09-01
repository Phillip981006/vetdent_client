import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  toast_message:string = "no message to display at this moment in time please check again later "

  logged_in:boolean = false;

  access_blocks_location_1:any[] = [
    {path:"#hero" , blockLabel:"Home"}
  ]

  access_blocks_location_2:any[]= [];


  constructor(private auth: AuthService){

    this.auth.access_blocks_subject_location_1.subscribe((data)=>{
      this.access_blocks_location_1 = data;
    })

    this.auth.access_blocks_subject_location_2.subscribe((data)=>{
      this.access_blocks_location_2 = data
    })

    this.auth.get_user_access();

  }

  logout(){
    this.auth.logout();
    this.auth.get_user_access();
  }



}
