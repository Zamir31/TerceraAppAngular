import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EnlacesDeLaWebComponent } from './navbar/enlaces-de-la-web/enlaces-de-la-web.component';
import { EnlacesRedesSocialesComponent } from './navbar/enlaces-redes-sociales/enlaces-redes-sociales.component';
import { EnlaceComponent } from './navbar/enlace/enlace.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EnlacesDeLaWebComponent,
    EnlacesRedesSocialesComponent,
    EnlaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
