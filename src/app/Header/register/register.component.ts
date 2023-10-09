import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm!: FormGroup;  
  // router: any;

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirmpassword:['',Validators.required],
    })
  }
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}


  onSubmit(){
    
   if(this.signupForm.valid){
    this.auth.signUp(this.signupForm.value)
    
    .subscribe({
      next: (res =>{
        // alert(res.message)
        this.signupForm.reset()
        this.router.navigate(['login'])
      })
      ,error:(err=>{
        alert(err.error.message)
      })
    })
     console.log(this.signupForm.value)
   }else{
     this.validateAllFormFields(this.signupForm);
     alert("Your Form is Invalid")
   }
  }
 private validateAllFormFields(formGroup:FormGroup) {
   Object.keys(formGroup.controls).forEach(field=>
     {
     const control = formGroup.get(field);
     if(control instanceof FormControl){
       control.markAsDirty({onlySelf:true});
     }else if (control instanceof FormGroup){
       this.validateAllFormFields(control)
     }
     });
 }

}
