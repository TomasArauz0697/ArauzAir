import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
/*import { HelloComponent } from './hello.component';*/
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,/* HelloComponent, */ HeaderComponent, MainComponent, FooterComponent, NavbarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
