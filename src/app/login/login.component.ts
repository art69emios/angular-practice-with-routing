import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private logService: LogService, private router: Router){}

    user:string   | undefined
    pass:string   | undefined
    error:string  | undefined
  ngOnInit(): void {
    
  }

  getUserVal(userVal:any){
   return this.user = userVal.value
  }

  getPassVal(passVal:any){
   return this.pass = passVal.value
  }

  logIn(){
    if(this.user && this.pass){
      this.logService.loginService(this.user, this.pass)
      this.logService.isLoggedIn().then((isAuth) => {
        if (isAuth) {
          this.router.navigate(['moderator']);
        } else{
          this.error = 'error'
        }
      })
    } 

  }

  @HostListener('document:keyup',['$event'])
  logInEnter(e: any){
    if(e.key === 'Enter'){
      this.logIn()
    }
  }
  
}
