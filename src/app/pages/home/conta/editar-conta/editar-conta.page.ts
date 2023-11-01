import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { UserEditar } from 'src/app/core/types/type';

@Component({
  selector: 'app-editar-conta',
  templateUrl: './editar-conta.page.html',
  styleUrls: ['./editar-conta.page.scss'],
})
export class EditarContaPage implements OnInit {

  editarForm: FormGroup;

  constructor(private cadastroService: CadastroService,
    private router: Router,
    public formBuilder: FormBuilder) { }

  
  ngOnInit() :void {
    this.editarForm = this.formBuilder.group({
      nome:["this.nome", [Validators.required]],
      senhaAtual: ['', [Validators.required]],
      novaSenha: ['', ],
      novaSenhaRepetida: ['', ]
    });
  }

  get errorControl() {
    return this.editarForm.controls;
  }
 
  editar(): void{
    if (this.editarForm?.valid) {
      const editarCadastro = this.editarForm.getRawValue() as UserEditar;
      this.cadastroService.editarCadastro(editarCadastro).subscribe({
        next: (value) => {
          console.log('Cadastro atualizado com sucesso', value);
          this.router.navigate(['/conta']);
        },
        error: (err) => {
          console.log('Erro ao atualizar cadastro', err)
        }
      });
     }else {
      console.log('Forneça todos os valores necessários!');
    }
  }

}