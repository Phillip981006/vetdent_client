import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Subject } from 'rxjs';
import { LocalstorageService } from './localstorage.service';
import { env } from '../__env';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpService,
    private localstorage: LocalstorageService,
    private router: Router
    ) { }

    user_access:any[]=[];

  //acess blocks observer subject : pushed the
  public access_blocks_subject_location_1 = new Subject<any>();

  public access_blocks_subject_location_2 = new Subject<any>();

  //this.mySubject.next(newValue);

  access_call(key:string){
    this.http.post_user_access(key).subscribe((data)=>{
      // debugger;
       //this.add_to_access(data);
       console.log(data);
       this.access_blocks_subject_location_1.next(data);
     });
     this.http.post_user_profile_access(key).subscribe((data)=>{
       //debugger;
       //this.add_to_access(data);
       console.log(data);
       this.access_blocks_subject_location_2.next(data);
     });


  }

  get_user_access(){

    var key = this.localstorage.get_api_key()

    if (key != null){
      this.access_call(key);
      this.http.get_user_profile(key).subscribe(( data )=>{
        //debugger;
        this.localstorage.set_redirect_path(data.redirect)
        console.log(data.redirect);
        this.router.navigate([data.redirect])
      })
    }else{
      this.http.post_auth_user(env.guest_username,env.guest_password).subscribe((data)=>{
        console.log(data);

        this.localstorage.set_api_key(data.api_key);
        this.access_call(data.api_key);
        this.http.get_user_profile(data.api_key).subscribe(( data )=>{
          //debugger;
          this.localstorage.set_redirect_path(data.redirect)
          console.log(data.redirect);
          this.router.navigate([data.redirect])
        })
        //set the api key
        ///console.log(data);
      });
    }

   // this.save_user_access();

  }

  get_user_api_key(user_name:string = env.guest_username, user_password:string = env.guest_password){

    this.http.post_auth_user(user_name,user_password).subscribe((data)=>{

      console.log(data)
      this.localstorage.set_api_key(data.api_key)

      this.access_call(data.api_key);

      this.http.get_user_profile(data.api_key).subscribe(( data )=>{

        this.localstorage.set_redirect_path(data.redirect)
        console.log(data.redirect);
        this.router.navigate([data.redirect])
      })
    });

    //this.save_user_access();

  }


  //add_to_access(data:any[]){
  //  //debugger;
  //  data.forEach((block)=>{
  //    this.user_access.push(block.path);
  //  })
  //}
//
//
//
  //save_user_access(){
  // // debugger;
  // console.log(this.user_access)
  //  var access = { access : this.user_access }
//
  //  var access_string = access.toString();
//
  //  this.localstorage.set_user_access(access_string);
//
  //}

  logout(){
    this.localstorage.delete_api_key();
  }

}
