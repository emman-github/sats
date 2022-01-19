import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';
import { HeaderComponent } from 'src/app/components/header/header.component'; 

@NgModule({
  declarations: [
    AppComponent, 
    SideMenuComponent, 
    HeaderComponent
  ],
  entryComponents: [ 
    SideMenuComponent, 
    HeaderComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
