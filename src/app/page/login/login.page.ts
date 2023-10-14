import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from 'src/app/authetication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ionicForm: FormGroup;

    constructor(private toastController: ToastController, 
      private alertController: AlertController, 
      private loadingController: LoadingController, 
      private authService: AutheticationService, 
      private router: Router, public formBuilder: FormBuilder) { }


  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [
        Validators.required,
      ]
      ],
    });
  }
  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
    if (this.ionicForm.valid) {

      //  await  loading.dismiss();
      const user = await this.authService.loginUser(this.ionicForm.value.email, this.ionicForm.value.password).catch((erro) => {
        this.presentToast(erro)
        console.log(erro);
        loading.dismiss();
      })

      if (user) {
        loading.dismiss();
        this.router.navigate(['/home'])
      }
    } else {
      return console.log('Forneça todos os valores necessários!');
    }

  }
  get errorControl() {
    return this.ionicForm.controls;
  }

  async presentToast(messagem: undefined) {
    console.log(messagem);

    const toast = await this.toastController.create({
      message: messagem,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }
}
