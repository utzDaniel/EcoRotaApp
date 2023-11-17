import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { User } from 'src/app/core/types/type';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute,
    private cadastro: CadastroService, 
    private userService: UserService, 
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.reload();
    });
  }

  reload():void {
    this.cadastro.buscarCadastro().subscribe((user: User) =>{
      this.user = user;
    })
  }

  editar(): void {
    this.router.navigate(['home/conta/editar', this.user]);
  }

  preferencia(): void {
    this.router.navigate(['home/conta/preferencia', this.user.preferencia]);
  }

  sair(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
