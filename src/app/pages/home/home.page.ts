import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { User } from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  user: User;

  constructor(private cadastro: CadastroService, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.cadastro.buscarCadastro().subscribe((user: User) =>{
        this.user = user;
    })
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
