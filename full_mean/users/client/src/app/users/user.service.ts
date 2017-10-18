import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import "rxjs"

import { User } from "./user"

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  create(new_user: User){
    return this.http.post("/login", new_user).map(data => data.json()).toPromise()
  }

  get_all(){
    return this.http.get("/get_all_users").map(data => data.json()).toPromise()
  }

  am_i_logged_in(){
    return this.http.get("/am_i_logged_in").map(data => data.json()).toPromise()
  }

}
