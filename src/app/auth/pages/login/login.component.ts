import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  miFormulario: FormGroup= this.fb.group({
    email: ['lolo@Email', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  })
 
  constructor(private router: Router,
    private authService: AuthService,
    private fb: FormBuilder) { }

  login(){

    // const{email, password}= this.miFormulario.value;

    // this.authService.login(email, password)
    //   .subscribe(resp => {
    //    console.log(resp);


     this.authService.login()
     .subscribe(resp => {
       console.log(resp);

       if (resp.id){
         this.router.navigate(['./productos']);
      }
     })
  }

  

  
}
