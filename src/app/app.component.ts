import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

declare const window: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  value = 'Creative person';
  a = 'Web Developer';
  b = 'Creative Person';
  home = true;
  about_me = false;
  skills =false;
  contact = false;
  bounce = false;
  pro_bounce = false;
  jackInTheBox = false;

  data = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

ngOnInit(){
   setInterval(()=> {
   if(this.value == this.a){
   this.value = this.b
 }else {
    this.value = this.a
     }
  
   },2500);
 }

 @HostListener("window:scroll", []) 
  onWindowScroll(){
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    //console.log(number);//633 about me//1842 skills
    if(number < 633){
     this.home = true;
     this.about_me = false;
     this.skills = false;
     this.contact = false;
    }else if(number >= 633 && number < 1740) {
      this.home = false;
     this.about_me = true;
     this.skills = false;
     this.contact = false;

    }else if(number >= 1740 && number < 2153){
      this.home = false;
     this.about_me = false;
     this.skills = true;
     this.contact = false;
    }else {
      this.home = false;
     this.about_me = false;
     this.skills = false;
     this.contact = true;
    }

    if(number > 2153){
      this.bounce  = true;
    }else { 
      this.bounce = false;
    }

   if(number > 816 && number < 1592){
     this.pro_bounce = true;
   }else {
     this.pro_bounce = false;
   }
    //1192

     if(number >= 633 && number < 1740){
       this.jackInTheBox = true;
     }else {
       this.jackInTheBox = false;
     }

  }
  onSubmit(f) {
    console.log(f);
    f.submitted = false;
    this.data.email = '';
    this.data.name = '';
    this.data.message = '';
    this.data.subject = '';
  }

}
