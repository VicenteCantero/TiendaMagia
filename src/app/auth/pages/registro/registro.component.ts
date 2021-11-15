import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../interfaces/auth.interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuario: Auth = {
    id: '',
    nombre: '',
    email: '',
    password: '',
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  registro() {

    const { nombre, email, password } = this.miFormulario.value;

    this.authService.registro(nombre, email, password)
      .subscribe(ok => {
        if (ok === true) {
          this.router.navigate(['./productos']);
        } else {
          //TODO: error
        }

      });
  }
}
