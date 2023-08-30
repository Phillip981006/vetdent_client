import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../__env';

class key_res {
  api_key: string;

  constructor(api_key: string) {
    this.api_key = api_key;
  }
}


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private post_request(){


  }

  post_user_access(api_key:string){

    var data = {
      api_key: api_key
    }

    return this.http.post(env.backend_location + "api/Access", data );
  }

  post_auth_user(user_name:string, user_password:string){

    var data = {
      user_name: user_name,
      user_password: user_password
    }

    return this.http.post<key_res>(env.backend_location + "api/Authenticate", data )  ;
  }
}
