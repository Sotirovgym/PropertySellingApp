import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm);
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if (token){
      localStorage.setItem('token', token.Username);
      this.alertify.seccess('Login Successful');
      this.router.navigate(['/'])
    }
    else{
      this.alertify.error('Wrong username or password');
    }
  }

}
