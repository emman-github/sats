import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentPage: string;

  constructor(
    private router: Router, 
    private navController: NavController
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {

      this.currentPage = event.url;  
    });
  }

  ngOnInit() {

  }

  getClass() {
    console.log(this.currentPage); 
    if (this.currentPage === `/home`) {
      return `shown-main-header`
    }

    if (this.isRootPage()) {
      return 'hidden-header';
    }

    return this.currentPage === '/login' ? 'hidden-header' : 'shown-full-header'
  }

  isRootPage() {
    return this.currentPage === `/`;
  }

  isLoginPage() {
    return this.currentPage === `/login` 
  }

}
