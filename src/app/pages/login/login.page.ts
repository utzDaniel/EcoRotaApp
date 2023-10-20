import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;

    constructor(private authService: AutenticacaoService, 
      private router: Router, 
      public formBuilder: FormBuilder) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      senha: ['', [Validators.required]]
    });
  }

  login() {
    if(this.loginForm?.valid) {
      const email = this.loginForm.value.email;
      const senha = this.loginForm.value.senha;
      this.authService.autenticar(email, senha).subscribe({
        next: (value) => {
          console.log('Autenticado com sucesso', value)
          this.router.navigate(['/home'])
          this.loginForm.reset();
        },
        error: (err) => {
          console.log('Problema na autenticação', err)
        },
      })
    }else {
      return console.log('Forneça todos os valores necessários!');
    }
  }
  
  get errorControl() {
    return this.loginForm.controls;
  }

  // async presentToast(messagem: undefined) {
  //   console.log(messagem);

  //   const toast = await this.toastController.create({
  //     message: messagem,
  //     duration: 1500,
  //     position: 'top',
  //   });

  //   await toast.present();
  // }
}
