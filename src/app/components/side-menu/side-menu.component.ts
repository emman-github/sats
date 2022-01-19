import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  currentPage: string;

  menuItems: Array<any> = [
    { label: `APPOINTMENT`, icon: `/assets/components/side-menu/appointment.png`, link: `/appointment` }, 
    { label: `MESSAGES`, icon: `/assets/components/side-menu/messages.png`, link: `/messages` }, 
    { label: `REPORT ISSUE`, icon: `/assets/components/side-menu/report-issue.png`, link: `/report-issue` }, 
    { label: `ALARM DETAILS`, icon: `/assets/components/side-menu/alarm-details.png`, link: `/alarm-details` }, 
    { label: `HELP`, icon: `/assets/components/side-menu/help.png`, link: `` }, 
    { label: `FAQ`, icon: `/assets/components/side-menu/faq.png`, link: `` }, 
    { label: `CONTACT US`, icon: `/assets/components/side-menu/contact-us.png`, link: `/contact-us` }
  ];

  constructor(
    private navController: NavController, 
    private menuController: MenuController
  ) { }

  ngOnInit() {

  }

  async openPage(link) {
    if (!link) {
      alert(`No page found!`);
      return;
    }
        await this.navController.navigateForward(link); 
    await this.menuController.close();
    console.log(link);

  }

}
