import { Component, OnInit } from '@angular/core';
import { Blogs } from 'src/app/blogs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs: Blogs[] | undefined;
  constructor() { 
    this.blogs = [
      {
        img: "../../../assets/images/blogs/blog1.webp",
        name: "malavika r",
        date: "Nov 28, 2020",
        desc: "\" TAKE ACTION IS A WAY TO SUCCESS \""
      },
      {
        img: "../../../assets/images/blogs/blog2.webp",
        name: "malavika r",
        date: "Nov 28, 2020",
        desc: "** BE A STRONG WOMAN **"
      },
      {
        img: "../../../assets/images/blogs/blog3.webp",
        name: "malavika r",
        date: "Nov 28, 2020",
        desc: "** THINK POSITIVE**"
      },
      {
        img: "../../../assets/images/blogs/blog4.webp",
        name: "malavika r",
        date: "Nov 28, 2020",
        desc: "## DON'T FEAR BE BOLD ##"
      },
      {
        img: "../../../assets/images/blogs/blog5.webp",
        name: "malavika r",
        date: "Nov 25, 2020",
        desc: "** TIME IS GOLD **"
      },
      {
        img: "../../../assets/images/blogs/blog6.webp",
        name: "RAMYA A",
        date: "Nov 22, 2020",
        desc: "#IT'S NOT ABOUT BEING THE BEST,IT'S ABOUT BEING..."
      }
      
    ]
  }

  ngOnInit(): void {
  }

}
