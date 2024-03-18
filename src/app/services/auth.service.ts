import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public loginWithUsernameAndPassword(username:string, password:string){
    const url = environment.baseUrl + '/login/';
    const body = {
      "username": username,
      "password": password
    };
    return lastValueFrom(this.http.post(url, body));
  }
}
