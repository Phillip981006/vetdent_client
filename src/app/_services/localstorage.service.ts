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


}
