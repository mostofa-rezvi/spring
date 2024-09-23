import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './home/footer/footer.component';
import { AppointmentHomeComponent } from './home/appointment-home/appointment-home.component';
import { DepartmentHomeComponent } from './home/department-home/department-home.component';
import { NavbarHomeComponent } from './home/navbar-home/navbar-home.component';
import { BodyPartComponent } from './home/body-part/body-part.component';
import { WelcomePageComponent } from './registration/welcome-page/welcome-page.component';
import { LoginComponent } from './registration/login/login.component';
import { RegisterComponent } from './registration/register/register.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AppointmentDoneComponent } from './home/appointment-done/appointment-done.component';
import { ForgotPasswordComponent } from './registration/forgot-password/forgot-password.component';
import { PayrollComponent } from './common/payroll/payroll.component';
import { ActivitiesComponent } from './common/activities/activities.component';
import { ChangePasswordComponent } from './common/settings/change-password/change-password.component';
import { LeaveComponent } from './common/settings/leave/leave.component';
import { SalaryComponent } from './common/settings/salary/salary.component';
import { ProfileViewComponent } from './common/profile/profile-view/profile-view.component';
import { ProfileUpdateComponent } from './common/profile/profile-update/profile-update.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AppointmentHomeComponent,
    DepartmentHomeComponent,
    NavbarHomeComponent,
    BodyPartComponent,
    WelcomePageComponent,
    LoginComponent,
    RegisterComponent,
    UserFormComponent,
    UserListComponent,
    AppointmentDoneComponent,
    ForgotPasswordComponent,
    PayrollComponent,
    ActivitiesComponent,
    ChangePasswordComponent,
    LeaveComponent,
    SalaryComponent,
    ProfileViewComponent,
    ProfileUpdateComponent
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
