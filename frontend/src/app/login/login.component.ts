import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username:string='';

  constructor(private router: Router){
    const userfromStorage = localStorage.getItem('username')
    if(userfromStorage){
      this.username = userfromStorage;
    }
  }

  signIn(){
    localStorage.setItem('username',this.username)
    this.router.navigate(['homepage'])
  }

}
