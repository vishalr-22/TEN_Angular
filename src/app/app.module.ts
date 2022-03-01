import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { BodyComponent } from './Components/body/body.component';
import { FooterComponent } from './Components/footer/footer.component';
import { Body2Component } from './Components/body2/body2.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng5SliderModule } from 'ng5-slider';
import { OnlineCoursesComponent } from './Components/online-courses/online-courses.component';
import { HiringComponent } from './Components/hiring/hiring.component';
import { CertificationComponent } from './Components/certification/certification.component';
import { BlogComponent } from './Components/blog/blog.component';
import { AlumniTeamComponent } from './Components/alumni-team/alumni-team.component';
import { ForumComponent } from './Components/forum/forum.component';
import { HackathonComponent } from './Components/hackathon/hackathon.component';
import { MembershipComponent } from './Components/membership/membership.component';
import { MentorshipComponent } from './Components/mentorship/mentorship.component';
import { SocialMediaComponent } from './Components/social-media/social-media.component';
import { CampusAmbassadorComponent } from './Components/campus-ambassador/campus-ambassador.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { ComplaintsComponent } from './Components/complaints/complaints.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    Body2Component,
    OnlineCoursesComponent,
    HiringComponent,
    CertificationComponent,
    BlogComponent,
    AlumniTeamComponent,
    ForumComponent,
    HackathonComponent,
    MembershipComponent,
    MentorshipComponent,
    SocialMediaComponent,
    CampusAmbassadorComponent,
    TestimonialsComponent,
    ContactusComponent,
    ComplaintsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
