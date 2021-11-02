import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [`
    center-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  } `]
})
export class RegistroComponent{

  miFormulario: FormGroup= this.fb.group({
    nombre: ['lolo', [Validators.required]],
    email: ['lolo@Email', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  })

  constructor( private fb: FormBuilder,
    private router:Router) { }

  registro(){

    this.router.navigate(['./productos']);
  }
}
