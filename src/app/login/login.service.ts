import { Injectable } from "@angular/core";


@Injectable({
   providedIn: 'root'
})

export class LogService{
   constructor(){}
      private name = '';
   users = [
      {
         login: "Denis", 
         password: "1812",
      },
      {
         login: "Misha", 
         password: "1911",
      },
      {
         login: "Artem", 
         password: "007",
      }
   ]

   private isAuth = false;

   loginService(login: string, password: string){
      this.isAuth = !!this.users.find((user)=> user.login === login && user.password === password);
      if(this.isAuth){
         this.name = login;
      }
   }

   logoutService(){
      this.isAuth = false;
   }

   getName() {
      return this.name;
   }

   isLoggedIn(){
      return new Promise(resolve => {
         setTimeout(() => {
         resolve(this.isAuth)
         }, 200);
      })
   }

}