import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Subject } from 'rxjs';
import { LocalstorageService } from './localstorage.service';
import { env } from '../__env';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpService,
    private localstorage: LocalstorageService
    ) { }

  //acess blocks observer subject : pushed the
  public access_blocks_subject = new Subject<any>();
  //this.mySubject.next(newValue);

  get_user_access(){

    var key = this.localstorage.get_api_key()

    if (key != null){
      this.http.post_user_access(key).subscribe((data)=>{
        this.access_blocks_subject.next(data);
      });
    }else{
      this.http.post_auth_user(env.guest_username,env.guest_password).subscribe((data)=>{
        console.log(data);

        this.localstorage.set_api_key(data.api_key)
        this.http.post_user_access(data.api_key).subscribe((data)=>{
          //console.log(data);
          this.access_blocks_subject.next(data);
        });
        //set the api key
        ///console.log(data);
      });

    }

  }

  get_user_api_key(user_name:string = env.guest_username, user_password:string = env.guest_password){

    this.http.post_auth_user(user_name,user_password).subscribe((data)=>{
      this.localstorage.set_api_key(data.api_key)
      this.http.post_user_access(data.api_key).subscribe((data)=>{
        //console.log(data);
        this.access_blocks_subject.next(data);
      });
    });

  }

}
