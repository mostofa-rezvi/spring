import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './registration/login/login.component';
import { RegisterComponent } from './registration/register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HotelCreateComponent } from './component/Hotel/hotel-create/hotel-create.component';
import { HotelViewComponent } from './component/Hotel/hotel-view/hotel-view.component';
import { RoomCreateComponent } from './component/Room/room-create/room-create.component';
import { RoomViewComponent } from './component/Room/room-view/room-view.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    HotelCreateComponent,
    HotelViewComponent,
    RoomCreateComponent,
    RoomViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
