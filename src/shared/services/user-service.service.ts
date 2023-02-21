import { JwtModel } from './../models/JwtModel';
import { Observable } from 'rxjs';
import { User } from 'src/shared/models/User';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(private $http:HttpClient) { }

  private API_URL = environment.URL_API;


  logarUsuario(user:User):Observable<JwtModel>{
    return this.$http.post<JwtModel>(`${this.API_URL}/user/login`,user)
  }
}
