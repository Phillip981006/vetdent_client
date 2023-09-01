import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../__env';

class key_res {
  api_key: string;

  constructor(api_key: string) {
    this.api_key = api_key;
  }
}

class profile_res {
  appUsersId : string
  appUsersParentID : string
  email : string
  password : string
  firstName : string
  lastName : string
  active : boolean
  redirect : string
  roleID : 6
  organozationID : string

  constructor(
    appUsersId: string ,
    appUsersParentID : string,
    email : string,
    password : string,
    firstName : string,
    lastName : string,
    active : boolean,
    redirect : string,
    roleID : 6,
    organozationID : string
    ) {

    this.appUsersId = appUsersId;
    this.appUsersParentID = appUsersParentID;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.active = active;
    this.redirect = redirect;
    this.roleID = roleID;
    this.organozationID = organozationID;
  }
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get_user_profile(api_key:string){

    return this.http.get<profile_res>(env.backend_location + "api/Profile" + api_key );

  }

  post_user_profile_access(api_key:string){

    var data = {
      api_key: api_key
    }

    return this.http.post<any[]>(env.backend_location + "api/ProfileAccess", data );

  }

  post_user_access(api_key:string){

    var data = {
      api_key: api_key
    }

    return this.http.post<any[]>(env.backend_location + "api/Access", data );
  }

  post_auth_user(user_name:string, user_password:string){

    var data = {
      user_name: user_name,
      user_password: user_password
    }

    return this.http.post<key_res>(env.backend_location + "api/Authenticate", data );
  }
}
