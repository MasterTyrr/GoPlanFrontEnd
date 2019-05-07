import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
 } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { VacationComponent } from './components/vacation/vacation.component';
import { MyvacationsComponent } from './components/vacation/myvacations/myvacations.component';
import { NewComponent } from './components/vacation/new/new.component';
import { DetailComponent } from './components/vacation/detail/detail.component';
import { EventDetailComponent } from './components/vacation/detail/event-detail/event-detail.component';
import { AdminComponent } from './components/admin/admin.component';
import { EventTypeComponent } from './components/admin/event-type/event-type.component';
import { NewEventComponent } from './components/vacation/detail/new-event/new-event.component';
import { VacationService } from './vacation.service';

const routes = [
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'admin', children: 
  [
    {path: '', component: AdminComponent},
    {path: 'event-type', component: EventTypeComponent},
  ]},
  { path: 'vacation', children: 
  [
    { path: '', component: VacationComponent},
    { path: 'my-vacations', component: MyvacationsComponent},
    { path: 'new', component: NewComponent},
    { path: ':id', children: 
    [
      { path: '', component: DetailComponent},
      { path: 'new-event', component: NewEventComponent},
      { path: 'detail/:id', component: EventDetailComponent},
    ]},
  ]},
  { path: '', children: 
  [
    { path: '', component: LandingComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
  ]},
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
    VacationComponent,
    MyvacationsComponent,
    NewComponent,
    DetailComponent,
    EventDetailComponent,
    AdminComponent,
    EventTypeComponent,
    NewEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    VacationService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
