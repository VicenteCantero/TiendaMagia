import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import  Swal from 'sweetalert2';
import { AuthResponse } from '../../interfaces/authResponse.interfaces';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,) { }

  login() {

    const { nombre, password } = this.miFormulario.value;

    this.authService.login(nombre, password)
      .subscribe(token => {
        console.log(token);
        if (token) {
          this.router.navigate(['./productos']);
        } else {
          Swal.fire('Error',token, 'error');
        }
      });

  }

}



