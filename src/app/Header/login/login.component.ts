import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  AdminServiceService: any;
  // router: any;


type : string = "password"
isText: boolean = false; 
eyeIcon: string = "fa-eye-slash";
loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password:['',Validators.required]
    })
  }

  username: string = '';
  password: string = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

 hideshow() {
  this.isText = !this.isText;
  this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon= "fa-eye-slash"
  this.isText ? this.type = "text" : this.type = "password"
 }
 onLogin() {
  if (this.loginForm.valid) {
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value)
      .subscribe({
        next: (res) => {
          // alert(res.message)
          this.loginForm.reset();
          this.router.navigate(['dashboard']); // Redirect to the dashboard page
        },
        error: (err) => {
          // Handle login error
          // alert(err.error.message)
        }
      });
  } else {
    this.validateAllFormFields(this.loginForm);
    alert('Your Form is Invalid');
  }
}


//  onLogin(){
//   debugger
//   if(this.loginForm.valid){
//     console.log(this.loginForm.value)
//     this.auth.login(this.loginForm.value)
//     .subscribe({
//       next:(res) => {
//         // alert(res.message)
//         this.loginForm.reset();
//         this.router.navigate(['dashboard'])
//       },
//       error:(err) => {
//         // alert(err.error.message)
//       }
//      })
//   }else{
//     this.validateAllFormFields(this.loginForm);
//     alert("You r Form is Invalid")
//   }
//  }
private validateAllFormFields(formGroup:FormGroup) {
  Object.keys(formGroup.controls).forEach(field=>
    {
    const control = formGroup.get(field);
    if(control instanceof FormControl){
      control.markAsDirty({onlySelf:true});
    } else if (control instanceof FormGroup){
      this.validateAllFormFields(control)
    }
    });
}
}


