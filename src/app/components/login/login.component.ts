import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'

})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor( private as:AuthService) { }

  async login() {

    try {
      let resp:any = await this.as.loginWithUsernameAndPassword(this.username, this.password);
      console.log('resp', resp)
      localStorage.setItem('token', resp['token']);

    }
    catch (error) {
      console.log('error', error)
    }
  }
}
