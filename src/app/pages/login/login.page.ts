import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  currentStep: number = 1;

  constructor(
    private navController: NavController, 
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.currentStep = 1;
  }

  ionViewWillEnter() {
    this.currentStep = 1;
  }

  async send() { 
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Sending security code...',
      duration: 2000
    });
    await loading.present();

    loading.onDidDismiss().then(() => {
        this.currentStep = 2;
    });
    console.log('Loading dismissed!'); 
    
  }

  async login() {
   const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Logging in...',
      duration: 2000
    });
    await loading.present();

    loading.onDidDismiss().then(() => {
      this.currentStep = 1;
      console.log('Loading dismissed!'); 
      this.navController.navigateForward(`/home`);
    });
  }

}
