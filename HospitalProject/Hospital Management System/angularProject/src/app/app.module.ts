import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ActivitiesComponent} from './dashboard/activities/activities.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, provideHttpClient, withFetch} from '@angular/common/http';
import {AdddoctorComponent} from './Doctors/adddoctor/adddoctor.component';
import {ViewdoctorComponent} from './Doctors/viewdoctor/viewdoctor.component';
import {UpdatedoctorComponent} from './Doctors/updatedoctor/updatedoctor.component';
import {LoginComponent} from './security/login/login.component';
import {AppointmenthomeComponent} from './HomePage/appointmenthome/appointmenthome.component';
import {BodyhomeComponent} from './HomePage/bodyhome/bodyhome.component';
import {FooterhomeComponent} from './HomePage/footerhome/footerhome.component';
import {NavbarhomeComponent} from './HomePage/navbarhome/navbarhome.component';
import {SalarysettingsComponent} from './Admin/Settings/salarysettings/salarysettings.component';
import {LeavetypeComponent} from './Admin/Settings/leavetype/leavetype.component';
import {ChngpassComponent} from './Admin/Settings/chngpass/chngpass.component';
import {AdminpayrollComponent} from './Admin/adminpayroll/adminpayroll.component';
import {ViewdepartmentComponent} from './Admin/Department/viewdepartment/viewdepartment.component';
import {AdddepartmentComponent} from './Admin/Department/adddepartment/adddepartment.component';
import {UpdatedepartmentComponent} from './Admin/Department/updatedepartment/updatedepartment.component';
import {ViewReceptionistComponent} from './Admin/Receptionist/viewreceptionist/viewreceptionist.component';
import {UpdateReceptionistComponent} from './Admin/Receptionist/updatereceptionist/updatereceptionist.component';
import {AddReceptionistComponent} from './Admin/Receptionist/addreceptionist/addreceptionist.component';
import {MyprofileComponent} from './Admin/Profile/myprofile/myprofile.component';
import {EditprofileComponent} from './Admin/Profile/editprofile/editprofile.component';
import {AdmindashboardComponent} from './dashboard/admindashboard/admindashboard.component';
import {DepartmenthomeComponent} from './HomePage/departmenthome/departmenthome.component';
import {DoctorshomeComponent} from './HomePage/DoctorsDepartment/doctorshome/doctorshome.component';
import {DoctorpntComponent} from './PatientDashBoard/doctorpnt/doctorpnt.component';
import {AppointmentpntComponent} from './PatientDashBoard/appointmentpnt/appointmentpnt.component';
import {PaymentpntComponent} from './PatientDashBoard/paymentpnt/paymentpnt.component';
import {SettingspntComponent} from './PatientDashBoard/settingspnt/settingspnt.component';
import {ReportpntComponent} from './PatientDashBoard/reportpnt/reportpnt.component';
import {AddpatientdocComponent} from './DoctorDashBoard/Patient Doc/addpatientdoc/addpatientdoc.component';
import {UpdatepatientdocComponent} from './DoctorDashBoard/Patient Doc/updatepatientdoc/updatepatientdoc.component';
import {ViewpatientdocComponent} from './DoctorDashBoard/Patient Doc/viewpatientdoc/viewpatientdoc.component';
import {AddreportdocComponent} from './DoctorDashBoard/Report Doc/addreportdoc/addreportdoc.component';
import {UpdatereportdocComponent} from './DoctorDashBoard/Report Doc/updatereportdoc/updatereportdoc.component';
import {ViewreportdocComponent} from './DoctorDashBoard/Report Doc/viewreportdoc/viewreportdoc.component';
import {MyprofilenrsComponent} from './NurseDashBoard/NurseProfile/myprofilenrs/myprofilenrs.component';
import {EditprofilenrsComponent} from './NurseDashBoard/NurseProfile/editprofilenrs/editprofilenrs.component';
import {MyprofilepntComponent} from './PatientDashBoard/PatientProfile/myprofilepnt/myprofilepnt.component';
import {EditprofilepntComponent} from './PatientDashBoard/PatientProfile/editprofilepnt/editprofilepnt.component';
import {
  MyprofilerecepComponent
} from './ReceptionistDashBoard/ReceptionistProfile/myprofilerecep/myprofilerecep.component';
import {
  EditprofilerecepComponent
} from './ReceptionistDashBoard/ReceptionistProfile/editprofilerecep/editprofilerecep.component';
import {DoctorlistadminComponent} from './Doctors/doctorlistadmin/doctorlistadmin.component';
import {
  ReceptionistlistadminComponent
} from './Admin/Receptionist/receptionistlistadmin/receptionistlistadmin.component';
import {MyprofiledocComponent} from './DoctorDashBoard/DoctorProfile/myprofiledoc/myprofiledoc.component';
import {EditprofiledocComponent} from './DoctorDashBoard/DoctorProfile/editprofiledoc/editprofiledoc.component';
import {
  AddappointmentComponent
} from './ReceptionistDashBoard/ReceptionistAppointment/addappointment/addappointment.component';
import {
  UpdateappointmentComponent
} from './ReceptionistDashBoard/ReceptionistAppointment/updateappointment/updateappointment.component';
import {
  ViewappointmentComponent
} from './ReceptionistDashBoard/ReceptionistAppointment/viewappointment/viewappointment.component';
import {
  ListofappointmentComponent
} from './ReceptionistDashBoard/ReceptionistAppointment/listofappointment/listofappointment.component';
import {ChilddepartmentComponent} from './HomePage/DoctorsDepartment/childdepartment/childdepartment.component';
import {GeneraldepartmentComponent} from './HomePage/DoctorsDepartment/generaldepartment/generaldepartment.component';
import {
  OrthopedicsdepartmentComponent
} from './HomePage/DoctorsDepartment/orthopedicsdepartment/orthopedicsdepartment.component';
import {NeurodepartmentComponent} from './HomePage/DoctorsDepartment/neurodepartment/neurodepartment.component';
import {CardiacdepartmentComponent} from './HomePage/DoctorsDepartment/cardiacdepartment/cardiacdepartment.component';
import {LastappointmentComponent} from './HomePage/lastappointment/lastappointment.component';
import {UserporfileComponent} from './Registration/userporfile/userporfile.component';
import {WelcomepageComponent} from './Registration/welcomepage/welcomepage.component';
import {ListofpatientComponent} from './DoctorDashBoard/Patient Doc/listofpatient/listofpatient.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import {AuthInterceptor} from "./security/interceptor/auth.interceptor";
import {StorageUtil} from "./util/storage.util";
import {AuthService} from "./security/service/auth.service";
import { RegisterComponent } from './security/register/register.component';
import { AppointmentCreateComponent } from './Component/appointment-create/appointment-create.component';

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
    ViewdepartmentComponent,
    AdddepartmentComponent,
    UpdatedepartmentComponent,
    ViewReceptionistComponent,
    UpdateReceptionistComponent,
    AddReceptionistComponent,
    MyprofileComponent,
    EditprofileComponent,
    AdmindashboardComponent,
    DepartmenthomeComponent,
    DoctorshomeComponent,
    DoctorpntComponent,
    AppointmentpntComponent,
    PaymentpntComponent,
    SettingspntComponent,
    ReportpntComponent,
    AddpatientdocComponent,
    UpdatepatientdocComponent,
    ViewpatientdocComponent,
    AddreportdocComponent,
    UpdatereportdocComponent,
    ViewreportdocComponent,
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
    AddappointmentComponent,
    UpdateappointmentComponent,
    ViewappointmentComponent,
    ListofappointmentComponent,
    ChilddepartmentComponent,
    GeneraldepartmentComponent,
    OrthopedicsdepartmentComponent,
    NeurodepartmentComponent,
    CardiacdepartmentComponent,
    LastappointmentComponent,
    UserporfileComponent,
    WelcomepageComponent,
    ListofpatientComponent,
    UserFormComponent,
    UserListComponent,
    RegisterComponent,
    AppointmentCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    AuthService,
    StorageUtil,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
