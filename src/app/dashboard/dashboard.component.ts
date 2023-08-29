import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(){

  }

  access_blocks:any[] = [
    {path:"#hero" , label:"Home"},
    {path:"#about" , label:"About"},
    {path:"#services" , label:"Services"},
    {path:"#contact" , label:"Contact"}
  ]

}
