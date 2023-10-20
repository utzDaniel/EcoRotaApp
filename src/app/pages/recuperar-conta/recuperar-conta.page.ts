import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-conta',
  templateUrl: './recuperar-conta.page.html',
  styleUrls: ['./recuperar-conta.page.scss'],
})
export class RecuperarContaPage implements OnInit {

  email:any
  constructor(private toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
  }

  resetar(){
    // this.authService.resetSenha(this.email).then( () =>{      
    //   console.log('Enviar'); //show confirmation dialog
    //   this.presentToast()
    // })
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'O link de redefinição de senha foi enviado em seu e-mail',
      duration: 2000, // Duration in milliseconds
      position: 'bottom' // Position of the toast (top, bottom, middle)
    });
  
    toast.present();
    toast.onDidDismiss().then(()=>{
      this.router.navigate(['/login']);
    })
  }

  voltar(): void{
    this.router.navigate(['/login']);
  }
}