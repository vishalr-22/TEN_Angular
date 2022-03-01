import { Component, Input, NgModule, OnInit } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

  
  home_var: boolean = false;
  online_courses_var: boolean = false;
  hiring_var: boolean = true;
  certificate_var: boolean = false;
  alumni_var: boolean = false;
  hackathon_var: boolean = false;
  mentorship_var: boolean = false;
  membership_var: boolean = false;
  ambassador_var: boolean = false;
  social_media_var: boolean = false;
  contactus_var: boolean = false;
  complaints_var: boolean = false;
  forum_var: boolean = false;
  testimonial_var: boolean = false;
  blog_var: boolean = false;
  toggleOn: boolean = false; 

  
  constructor() {
    
    
   }

  ngOnInit(): void {
  }

  course_click(){
    this.home_var = false;
    this.online_courses_var = true;
    this.hiring_var = false;
    this.certificate_var = false;
    this.alumni_var = false;
    this.hackathon_var = false;
    this.mentorship_var = false;
    this.membership_var = false;
    this.ambassador_var = false;
    this.social_media_var = false;
    this.contactus_var = false;
    this.complaints_var = false;
    this.forum_var = false;
    this.testimonial_var = false;
    this.blog_var = false;
  }
  hiring_interns(){
    this.home_var = false;
    this.online_courses_var = false;
    this.hiring_var = true;
    this.certificate_var = false;
    this.alumni_var = false;
    this.hackathon_var = false;
    this.mentorship_var = false;
    this.membership_var = false;
    this.ambassador_var = false;
    this.social_media_var = false;
    this.contactus_var = false;
    this.complaints_var = false;
    this.forum_var = false;
    this.testimonial_var = false;
    this.blog_var = false;
    
  }
  home(){
    this.home_var = true;
    this.online_courses_var = false;
    this.hiring_var = false;
    this.certificate_var = false;
    this.alumni_var = false;
    this.hackathon_var = false;
    this.mentorship_var = false;
    this.membership_var = false;
    this.ambassador_var = false;
    this.social_media_var = false;
    this.contactus_var = false;
    this.complaints_var = false;
    this.forum_var = false;
    this.testimonial_var = false;
    this.blog_var = false;
  }
  certification(){
    this.home_var = false;
    this.online_courses_var = false;
    this.hiring_var = false;
    this.certificate_var = true;
    this.alumni_var = false;
    this.hackathon_var = false;
    this.mentorship_var = false;
    this.membership_var = false;
    this.ambassador_var = false;
    this.social_media_var = false;
    this.contactus_var = false;
    this.complaints_var = false;
    this.forum_var = false;
    this.testimonial_var = false;
    this.blog_var = false;
  }
  alumni(){
    this.home_var = false;
    this.online_courses_var = false;
    this.hiring_var = false;
    this.certificate_var = false;
    this.alumni_var = true;
    this.hackathon_var = false;
    this.mentorship_var = false;
    this.membership_var = false;
    this.ambassador_var = false;
    this.social_media_var = false;
    this.contactus_var = false;
    this.complaints_var = false;
    this.forum_var = false;
    this.testimonial_var = false;
    this.blog_var = false;
  }
  hackathon(){
    this.home_var = false;
    this.online_courses_var = false;
    this.hiring_var = false;
    this.certificate_var = false;
    this.alumni_var = false;
    this.hackathon_var = true;
    this.mentorship_var = false;
    this.membership_var = false;
    this.ambassador_var = false;
    this.social_media_var = false;
    this.contactus_var = false;
    this.complaints_var = false;
    this.forum_var = false;
    this.testimonial_var = false;
    this.blog_var = false;
  }
  mentorship(){
    this.home_var = false;
    this.online_courses_var = false;
    this.hiring_var = false;
    this.certificate_var = false;
    this.alumni_var = false;
    this.hackathon_var = false;
    this.mentorship_var = true;
    this.membership_var = false;
    this.ambassador_var = false;
    this.social_media_var = false;
    this.contactus_var = false;
    this.complaints_var = false;
    this.forum_var = false;
    this.testimonial_var = false;
    this.blog_var = false;
  }
  forum(){
    this.home_var = false;
    this.online_courses_var = false;
    this.hiring_var = false;
    this.certificate_var = false;
    this.alumni_var = false;
    this.hackathon_var = false;
    this.mentorship_var = false;
    this.membership_var = false;
    this.ambassador_var = false;
    this.social_media_var = false;
    this.contactus_var = false;
    this.complaints_var = false;
    this.forum_var = true;
    this.testimonial_var = false;
    this.blog_var = false;
  }
  ambassador(){
    this.home_var = false;
    this.online_courses_var = false;
    this.hiring_var = false;
    this.certificate_var = false;
    this.alumni_var = false;
    this.hackathon_var = false;
    this.mentorship_var = false;
    this.membership_var = false;
    this.ambassador_var = true;
    this.social_media_var = false;
    this.contactus_var = false;
    this.complaints_var = false;
    this.forum_var = false;
    this.testimonial_var = false;
    this.blog_var = false;
  }
  social_media(){
    this.home_var = false;
    this.online_courses_var = false;
    this.hiring_var = false;
    this.certificate_var = false;
    this.alumni_var = false;
    this.hackathon_var = false;
    this.mentorship_var = false;
    this.membership_var = false;
    this.ambassador_var = false;
    this.social_media_var = true;
    this.contactus_var = false;
    this.complaints_var = false;
    this.forum_var = false;
    this.testimonial_var = false;
    this.blog_var = false;
  }
  contactus(){
    this.home_var = false;
    this.online_courses_var = false;
    this.hiring_var = false;
    this.certificate_var = false;
    this.alumni_var = false;
    this.hackathon_var = false;
    this.mentorship_var = false;
    this.membership_var = false;
    this.ambassador_var = false;
    this.social_media_var = false;
    this.contactus_var = true;
    this.complaints_var = false;
    this.forum_var = false;
    this.testimonial_var = false;
    this.blog_var = false;
  }
  complaints(){
    this.home_var = false;
    this.online_courses_var = false;
    this.hiring_var = false;
    this.certificate_var = false;
    this.alumni_var = false;
    this.hackathon_var = false;
    this.mentorship_var = false;
    this.membership_var = false;
    this.ambassador_var = false;
    this.social_media_var = false;
    this.contactus_var = false;
    this.complaints_var = true;
    this.forum_var = false;
    this.testimonial_var = false;
    this.blog_var = false;
  }

  membership(){
    this.home_var = false;
    this.online_courses_var = false;
    this.hiring_var = false;
    this.certificate_var = false;
    this.alumni_var = false;
    this.hackathon_var = false;
    this.mentorship_var = false;
    this.membership_var = true;
    this.ambassador_var = false;
    this.social_media_var = false;
    this.contactus_var = false;
    this.complaints_var = false;
    this.forum_var = false;
    this.testimonial_var = false;
    this.blog_var = false;
  }
  
  testimonial(){
    console.log("ekjdh")
    this.home_var = false;
    this.online_courses_var = false;
    this.hiring_var = false;
    this.certificate_var = false;
    this.alumni_var = false;
    this.hackathon_var = false;
    this.mentorship_var = false;
    this.membership_var = false;
    this.ambassador_var = false;
    this.social_media_var = false;
    this.contactus_var = false;
    this.complaints_var = false;
    this.forum_var = false;
    this.testimonial_var = true;
    this.blog_var = false;
  }
  blogs(){
    this.home_var = false;
    this.online_courses_var = false;
    this.hiring_var = false;
    this.certificate_var = false;
    this.alumni_var = false;
    this.hackathon_var = false;
    this.mentorship_var = false;
    this.membership_var = false;
    this.ambassador_var = false;
    this.social_media_var = false;
    this.contactus_var = false;
    this.complaints_var = false;
    this.forum_var = false;
    this.testimonial_var = false;
    this.blog_var = true;
  }
}
