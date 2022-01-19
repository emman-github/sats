import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, PopoverController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pageTitle: string;

  constructor(
    private navController: NavController, 
    private menuController: MenuController, 
    private router: Router,  
    private popoverController: PopoverController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      console.log(event.url);
      if (event.url === `/appointment`) {
        this.pageTitle = `APPOINTMENT`;
      } else if (event.url === `/messages`) {
        this.pageTitle = `MESSAGES`;
      } else if (event.url === `/report-issue`) {
        this.pageTitle = `REPORT ISSUE`;
      } else if (event.url === `/alarm-details`) {
        this.pageTitle = `ALARM DETAILS`;
      } else if (event.url === `/contact-us`) {
        this.pageTitle = `CONTACT US`;
      } else {
        this.pageTitle = ``;
       }
    });
  }

  async openHomePage() {     

      await this.navController.navigateForward(`/home`); 
      await this.menuController.open();
  }

  async logout() {  
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Logout?', 
      message: 'Are you sure you want to logout of your account?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          id: 'confirm-button',
          handler: async() => {   
            window.location.href="/";
            // await this.navController.navigateRoot(`/login`);
          }
        }
      ]
    });

    await alert.present(); 

    
  }

  async openMessagesPage() {
   
    await this.navController.navigateForward(`/messages`);
     await this.menuController.close();
  }

}
