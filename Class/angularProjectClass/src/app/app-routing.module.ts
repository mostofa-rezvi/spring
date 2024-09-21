import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HotelViewComponent } from './component/Hotel/hotel-view/hotel-view.component';

const routes: Routes = [
  // {path: '', component: SidebarComponent},
  {path: 'hotel', component: HotelViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
