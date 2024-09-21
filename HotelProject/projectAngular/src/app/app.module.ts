import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HotelCreateComponent } from './Component/Hotel/hotel-create/hotel-create.component';
import { HotelViewComponent } from './Component/Hotel/hotel-view/hotel-view.component';
import { RoomCreateComponent } from './Component/Room/room-create/room-create.component';
import { RoomViewComponent } from './Component/Room/room-view/room-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HotelCreateComponent,
    HotelViewComponent,
    RoomCreateComponent,
    RoomViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
