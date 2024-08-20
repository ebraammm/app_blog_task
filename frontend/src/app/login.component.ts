import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post<any>('http://127.0.0.1:8000/api-token-auth/', { username: this.username, password: this.password })
      .subscribe(
        response => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', this.username);
          this.router.navigate(['/posts']);
        },
        error => {
          this.errorMessage = 'Invalid username or password';
        }
      );
  }
}
