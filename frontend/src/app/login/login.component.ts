import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username:string='';

  constructor(private router: Router,private appService:AppService){
    const userfromStorage = localStorage.getItem('username')
    if(userfromStorage){
      this.username = userfromStorage;
    }
  }

  signIn(){
    this.appService.getUserbyUsername(this.username).subscribe({
      next: (response) => {
        //localStorage.setItem('userName',response?.userName),
        localStorage.setItem('firstName',response?.firstName)
        localStorage.setItem('lastName',response?.lastName)
        this.router.navigate(['homepage'])
      },
      error: (err) => { }
    });
  }

}
