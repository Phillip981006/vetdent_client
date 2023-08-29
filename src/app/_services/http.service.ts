import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../__env';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post_request(){


  }

  post_auth_user(user_name:string, user_password:string){
    var data = {
      user_name: user_name,
      user_password: user_password
    }

    this.http.post(env.backend_location + "auth", data, )
  }
}
