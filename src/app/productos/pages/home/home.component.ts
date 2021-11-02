import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth} from 'src/app/auth/interfaces/auth.interfaces';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
    margin: 20px;
  }
  `]
})
export class HomeComponent implements OnInit {



  get auth(): Auth {
    return this.authService.auth;
  }

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.router.navigate(['./auth'])
  }
}
