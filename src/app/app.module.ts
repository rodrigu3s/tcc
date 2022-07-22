import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { OpenBoxComponent } from './pages/login/open-box/open-box.component';
import { OrderComponent } from './pages/order/order.component';
import { RegisterPlateComponent } from './pages/register-plate/register-plate.component';
import { ScreenKitchen } from './pages/screens/screen-kitchen/screen-kitchen.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OpenBoxComponent,
    OrderComponent,
    RegisterPlateComponent,
    ScreenKitchen
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
