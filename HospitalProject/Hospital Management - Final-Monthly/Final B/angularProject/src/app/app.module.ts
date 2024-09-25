import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './Login-Page/navbar/navbar.component';
import {SidebarComponent} from './Login-Page/sidebar/sidebar.component';
import {ActivitiesComponent} from './shared/activities/activities.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi
} from '@angular/common/http';
import {LoginComponent} from './Login-Page/login/login.component';
import {AppointmenthomeComponent} from './Home-Page/appointmenthome/appointmenthome.component';
import {BodyhomeComponent} from './Home-Page/bodyhome/bodyhome.component';
import {FooterhomeComponent} from './Home-Page/footerhome/footerhome.component';
import {NavbarhomeComponent} from './Home-Page/navbarhome/navbarhome.component';
import {AdmindashboardComponent} from './Component/AdminDashBoard/dashboard/admindashboard.component';
import {DepartmenthomeComponent} from './Home-Page/departmenthome/departmenthome.component';
import {DoctorshomeComponent} from './Home-Page/DoctorsDepartment/doctorshome/doctorshome.component';
import {ChilddepartmentComponent} from './Home-Page/DoctorsDepartment/childdepartment/childdepartment.component';
import {GeneraldepartmentComponent} from './Home-Page/DoctorsDepartment/generaldepartment/generaldepartment.component';
import {
  OrthopedicsdepartmentComponent
} from './Home-Page/DoctorsDepartment/orthopedicsdepartment/orthopedicsdepartment.component';
import {NeurodepartmentComponent} from './Home-Page/DoctorsDepartment/neurodepartment/neurodepartment.component';
import {CardiacdepartmentComponent} from './Home-Page/DoctorsDepartment/cardiacdepartment/cardiacdepartment.component';
import {LastappointmentComponent} from './Home-Page/lastappointment/lastappointment.component';
import {WelcomepageComponent} from './Login-Page/welcomepage/welcomepage.component';
import {UserFormComponent} from './user/user-form/user-form.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {AuthInterceptor} from "./security/interceptor/auth.interceptor";
import {StorageUtil} from "./util/storage.util";
import {AuthService} from "./security/service/auth.service";
import {RegisterComponent} from './Login-Page/register/register.component';
import {AppointmentCreateComponent} from './shared/appointment/appointment-create/appointment-create.component';
import {AdddoctorComponent} from "./Component/AdminDashBoard/Doctors/adddoctor/adddoctor.component";
import {ViewdoctorComponent} from "./Component/AdminDashBoard/Doctors/viewdoctor/viewdoctor.component";
import {UpdatedoctorComponent} from "./Component/AdminDashBoard/Doctors/updatedoctor/updatedoctor.component";
import {SalarysettingsComponent} from "./shared/Settings/salarysettings/salarysettings.component";
import {LeavetypeComponent} from "./shared/Settings/leavetype/leavetype.component";
import {ChngpassComponent} from "./shared/Settings/chngpass/chngpass.component";
import {AdminpayrollComponent} from "./shared/payroll/adminpayroll.component";
import {
  ViewReceptionistComponent
} from "./Component/AdminDashBoard/Receptionist/viewreceptionist/viewreceptionist.component";
import {
  UpdateReceptionistComponent
} from "./Component/AdminDashBoard/Receptionist/updatereceptionist/updatereceptionist.component";
import {
  AddReceptionistComponent
} from "./Component/AdminDashBoard/Receptionist/addreceptionist/addreceptionist.component";
import {MyprofileComponent} from "./Component/AdminDashBoard/Profile/myprofile/myprofile.component";
import {EditprofileComponent} from "./Component/AdminDashBoard/Profile/editprofile/editprofile.component";
import {ListofpatientComponent} from "./Component/DoctorDashBoard/Patient Doc/listofpatient/listofpatient.component";
import {
  EditprofiledocComponent
} from "./Component/DoctorDashBoard/DoctorProfile/editprofiledoc/editprofiledoc.component";
import {MyprofiledocComponent} from "./Component/DoctorDashBoard/DoctorProfile/myprofiledoc/myprofiledoc.component";
import {
  ReceptionistlistadminComponent
} from "./Component/AdminDashBoard/Receptionist/receptionistlistadmin/receptionistlistadmin.component";
import {DoctorlistadminComponent} from "./Component/AdminDashBoard/Doctors/doctorlistadmin/doctorlistadmin.component";
import {
  EditprofilerecepComponent
} from "./Component/ReceptionistDashBoard/ReceptionistProfile/editprofilerecep/editprofilerecep.component";
import {
  MyprofilerecepComponent
} from "./Component/ReceptionistDashBoard/ReceptionistProfile/myprofilerecep/myprofilerecep.component";
import {
  EditprofilepntComponent
} from "./Component/PatientDashBoard/PatientProfile/editprofilepnt/editprofilepnt.component";
import {MyprofilepntComponent} from "./Component/PatientDashBoard/PatientProfile/myprofilepnt/myprofilepnt.component";
import {EditprofilenrsComponent} from "./Component/NurseDashBoard/NurseProfile/editprofilenrs/editprofilenrs.component";
import {MyprofilenrsComponent} from "./Component/NurseDashBoard/NurseProfile/myprofilenrs/myprofilenrs.component";
import {ViewpatientdocComponent} from "./Component/DoctorDashBoard/Patient Doc/viewpatientdoc/viewpatientdoc.component";
import {
  UpdatepatientdocComponent
} from "./Component/DoctorDashBoard/Patient Doc/updatepatientdoc/updatepatientdoc.component";
import {AddpatientdocComponent} from "./Component/DoctorDashBoard/Patient Doc/addpatientdoc/addpatientdoc.component";
import { AppointmentListComponent } from './shared/appointment/appointment-list/appointment-list.component';
import { DepartmentListComponent } from './shared/department/department-list/department-list.component';
import { DepartmentAddComponent } from './shared/department/department-add/department-add.component';
import { DepartmentUpdateComponent } from './shared/department/department-update/department-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ActivitiesComponent,
    AdddoctorComponent,
    ViewdoctorComponent,
    UpdatedoctorComponent,
    LoginComponent,
    AppointmenthomeComponent,
    BodyhomeComponent,
    FooterhomeComponent,
    NavbarhomeComponent,
    SalarysettingsComponent,
    LeavetypeComponent,
    ChngpassComponent,
    AdminpayrollComponent,
    ViewReceptionistComponent,
    UpdateReceptionistComponent,
    AddReceptionistComponent,
    MyprofileComponent,
    EditprofileComponent,
    AdmindashboardComponent,
    DepartmenthomeComponent,
    DoctorshomeComponent,
    AddpatientdocComponent,
    UpdatepatientdocComponent,
    ViewpatientdocComponent,
    MyprofilenrsComponent,
    EditprofilenrsComponent,
    MyprofilepntComponent,
    EditprofilepntComponent,
    MyprofilerecepComponent,
    EditprofilerecepComponent,
    DoctorlistadminComponent,
    ReceptionistlistadminComponent,
    MyprofiledocComponent,
    EditprofiledocComponent,
    ChilddepartmentComponent,
    GeneraldepartmentComponent,
    OrthopedicsdepartmentComponent,
    NeurodepartmentComponent,
    CardiacdepartmentComponent,
    LastappointmentComponent,
    WelcomepageComponent,
    ListofpatientComponent,
    UserFormComponent,
    UserListComponent,
    RegisterComponent,
    AppointmentCreateComponent,
    AppointmentListComponent,
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    AuthService,
    StorageUtil,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
