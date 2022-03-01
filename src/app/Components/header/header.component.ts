import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { Console } from 'console';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  @Output() Course_Click: EventEmitter<any> =new EventEmitter();
  @Output() hiring: EventEmitter<any> =new EventEmitter();
  @Output() home_page: EventEmitter<any> =new EventEmitter();
  @Output() certificate: EventEmitter<any> =new EventEmitter();
  @Output() alumni_team: EventEmitter<any> =new EventEmitter();
  @Output() Hackathon: EventEmitter<any> =new EventEmitter();
  @Output() Mentorship: EventEmitter<any> =new EventEmitter();
  @Output() Membership: EventEmitter<any> =new EventEmitter();
  @Output() Campus_ambas: EventEmitter<any> =new EventEmitter();
  @Output() Social_media: EventEmitter<any> =new EventEmitter();
  @Output() contact: EventEmitter<any> =new EventEmitter();
  @Output() Complaints: EventEmitter<any> =new EventEmitter();
  @Output() Forum: EventEmitter<any> =new EventEmitter();
  @Output() Testimonials: EventEmitter<any> =new EventEmitter();
  @Output() blog: EventEmitter<any> =new EventEmitter();
  
  modal:any;
  btn = document.getElementById("login");
  span:any = document.getElementsByClassName("close")[0];
  signUpButton: any;
  signInButton: any;
  container: any;

  constructor() { 
    
  }
  
  ngOnInit(): void {
    
  }
   
  login(){
    console.log("skh")
    this.modal = document.getElementById("myModal");
    this.modal.style.display = "block";
  }
  signUp(){
    this.container = document.getElementById('container');
    this.container.classList.add("right-panel-active");
  }
  
  signIn(){
    this.container = document.getElementById('container');
    this.container.classList.remove("right-panel-active");
  }
  close1(){
    this.modal.style.display = "none";
  }
  Online_courses(){
    this.Course_Click.emit();
  }
  blogs(){
    this.blog.emit();
  }
  hiring_interns(){
    this.hiring.emit();
  }
  home(){
    this.home_page.emit();
  }
  certification(){
    this.certificate.emit();
  }
  alumni(){
    this.alumni_team.emit();
  }
  hackathon(){
    this.Hackathon.emit();
  }
  membership(){
    this.Membership.emit();
  }
  ambassador(){
    this.Campus_ambas.emit();
  }
  mentorship(){
    this.Mentorship.emit();
  }
  social_media(){
    this.Social_media.emit();
  }
  contactus(){
    this.contact.emit();
  }
  complaints(){
    this.Complaints.emit();
  }
  forum(){
    this.Forum.emit();
  }
  testimonial(){
    this.Testimonials.emit();
  }
}
