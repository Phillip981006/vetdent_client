import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  get_api_key(){
    return localStorage.getItem("api_key");
  }

  set_api_key(key:string){
    localStorage.setItem("api_key", key);
  }
  delete_api_key(){
    localStorage.removeItem("api_key");
  }

  set_redirect_path(path : string){
    localStorage.setItem("redirect_path", path);
  }

  get_redirect_path(){
    return localStorage.getItem("redirect_path");
  }

 // get_user_access(){
 //   return localStorage.getItem("user_access");
 // }
//
 // set_user_access(access_string: any){
 //   localStorage.setItem("user_access", access_string)
 // }

}
