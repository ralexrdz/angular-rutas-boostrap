import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginaUnoComponent } from './pagina-uno/pagina-uno.component';
import { PaginaDosComponent } from './pagina-dos/pagina-dos.component';
import { PaginaTresComponent } from './pagina-tres/pagina-tres.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaginaUnoComponent,
    PaginaDosComponent,
    PaginaTresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
