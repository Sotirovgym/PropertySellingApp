import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validator, ValidatorFn, Validators } from '@angular/forms';
import { PasswordValidator } from '../passwordValidator';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  isSubmitted: boolean
  user: User;

  constructor(private fb: FormBuilder,
              private alertify: AlertifyService,
              private userService: UserService) { }

  // getter methods for all form controls
  get username (){
    return this.registrationForm.get('username') as FormControl;
  }
  get email (){
    return this.registrationForm.get('email') as FormControl;
  }
  get password (){
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword (){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile (){
    return this.registrationForm.get('mobile') as FormControl;
  }

  ngOnInit() {
    this.createRegistrationForm();
  }

  userData(): User{
    return this.user = {
      Username: this.username.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    };
  }

  createRegistrationForm(){
    this.registrationForm = this.fb.group(
      {
        username: [null, [Validators.required, Validators.minLength(3)]],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        mobile: [null, [Validators.required, Validators.maxLength(10)]]
      }
      , {validators: PasswordValidator} as  AbstractControlOptions
    );
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this.isSubmitted = true;

    if (this.registrationForm.valid){
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.isSubmitted = false;
      this.alertify.seccess('Congrats, you are successfully registered');
    }
    else{
      this.alertify.error('Please provide the required fields');
    }
  }
}
