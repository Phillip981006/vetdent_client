import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { AuthComponent } from './auth/auth.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { PanelComponent } from './auth/panel/panel.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { BoardComponent } from './board/board.component';
import { ProfileComponent } from './profile/profile.component';
import { CompanyComponent } from './company/company.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { PracticeComponent } from './practice/practice.component';
import { ClientsComponent } from './clients/clients.component';
import { PatientBoardComponent } from './board/patient-board/patient-board.component';
import { MessageBoardComponent } from './board/message-board/message-board.component';
import { ConsultBoardComponent } from './board/consult-board/consult-board.component';
import { AddPatientComponent } from './board/patient-board/add-patient/add-patient.component';
import { PatientProfileComponent } from './board/message-board/patient-profile/patient-profile.component';
import { MessagesComponent } from './board/message-board/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingComponent,
    AuthComponent,
    LoginFormComponent,
    PanelComponent,
    RegisterFormComponent,
    BoardComponent,
    ProfileComponent,
    CompanyComponent,
    SubscriptionsComponent,
    PracticeComponent,
    ClientsComponent,
    PatientBoardComponent,
    MessageBoardComponent,
    ConsultBoardComponent,
    AddPatientComponent,
    PatientProfileComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
