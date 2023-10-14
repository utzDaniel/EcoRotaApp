import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../authetication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email :any
  constructor(private authService:AutheticationService,private router: Router) {}
  ngOnInit(): void {
   
    this.authService.getProfile().then((user) =>{
        this.email = user?.email
        console.log(user);
        
    })
  }

 signOut(){

  this.authService.signOut().then(() =>{
    this.router.navigate(['/landing'])
  })
 }
}
