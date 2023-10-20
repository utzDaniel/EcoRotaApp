import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { User } from 'src/app/core/types/type';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  cadastroForm: FormGroup;
  
  constructor(private cadastroService: CadastroService,
    private router: Router, 
    public formBuilder: FormBuilder) { 
  }

  ngOnInit() :void {
    this.cadastroForm = this.formBuilder.group({
      nome:['', [Validators.required]],
      email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      senha: ['', [Validators.required]],
    });
  }
  
  get errorControl() {
    return this.cadastroForm.controls;
  }
 
  cadastrar(){
    if (this.cadastroForm?.valid) {
      const novoCadastro = this.cadastroForm.getRawValue() as User;
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) => {
          console.log('Cadastro realizado com sucesso', value);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log('Erro ao realizar cadastro', err)
        }
      });
     }else {
      return console.log('Forneça todos os valores necessários!');
    }
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
