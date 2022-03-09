import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName:string;;
  password:string;
  constructor(private router: Router) {
    this.userName="cmd";
    this.password="password@123"
   }

  ngOnInit(): void {
  }
  login(userName: string,password: string){
    if(this.userName === userName && this.password === password){
      localStorage.setItem("activePageName","dashboard")
      this.router.navigate(["/CMD/dashboard"])
    }
  }

}
