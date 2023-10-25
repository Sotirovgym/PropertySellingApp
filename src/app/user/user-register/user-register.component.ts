import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(private route: ActivatedRoute) { }

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
    this.registrationForm = new FormGroup(
      {
        username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(8)],),
        confirmPassword: new FormControl(null, Validators.required),
        mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
      },
      this.passwordMatchingValidator);
  }

  passwordMatchingValidator(fg: FormGroup) : Validators{
    // If there is a match return null, else return notMatched = true
    return fg.get('password').value === fg.get('confirmPassword').value ? null : {notMatched: true};
  }

  onSubmit(){
    console.log(this.registrationForm);
  }

}
