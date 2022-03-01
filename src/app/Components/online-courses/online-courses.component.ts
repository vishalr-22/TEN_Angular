import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/courses';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-online-courses',
  templateUrl: './online-courses.component.html',
  styleUrls: ['./online-courses.component.css']
})
export class OnlineCoursesComponent implements OnInit {

  courses: Courses[] | undefined;
  constructor() { 
    this.courses = [
      {
        img: "../../../assets/images/online courses/sales.webp",
        desc:"Sales: Internship + Training + Career Counselling + Resume & LinkedIn Profile",
        price: 200
      },
      {
        img: "../../../assets/images/online courses/hr.webp",
        desc:"Human Resource: Internship + Training + Career Counselling + Resume & LinkedIn Profile",
        price: 200
      },
      {
        img: "../../../assets/images/online courses/sales2.webp",
        desc:"Sales: Internship + Training + Career Counselling + Resume & LinkedIn Profile",
        price: 400
      },
      {
        img: "../../../assets/images/online courses/hr2.webp",
        desc:"Human Resource: Internship + Training + Career Counselling + Resume & LinkedIn Profile",
        price: 400
      },
      {
        img: "../../../assets/images/online courses/sales3.webp",
        desc:"Sales: Internship + Training + Career Counselling + Resume & LinkedIn Profile",
        price: 1000
      },
      {
        img: "../../../assets/images/online courses/hr3.webp",
        desc:"Human Resources",
        price: 1000
      },
      {
        img: "../../../assets/images/online courses/career_forum.webp",
        desc:"Carrer Forum",
        price: 39000
      },
      {
        img: "../../../assets/images/online courses/ten_guaranteed.webp",
        desc:"Ten Guaranteed Placement Program",
        price: 39000
      },
      {
        img: "../../../assets/images/online courses/intrapreneur.webp",
        desc:"Intrapreneur: Internship + Training + Career Counselling + Resume & LinkedIn Profile",
        price: 7244
      },
      {
        img: "../../../assets/images/online courses/hr4.webp",
        desc:"Human Resource: Internship + Training + Career Counselling + Resume & LinkedIn Profile",
        price: 7244
      },
      {
        img: "../../../assets/images/online courses/graphics.webp",
        desc:"Graphic Creation: Internship + Training + Career Counselling + Resume & LinkedIn Profile",
        price: 7244
      },
      {
        img: "../../../assets/images/online courses/hr3.webp",
        desc:"General Management: Internship + Training + Career Counselling + Resume & LinkedIn Profile",
        price: 7244
      }
    ];
  }

  minValue: number = 100;
  maxValue: number = 45000;
  options: Options = {
    floor: 0,
    ceil: 45000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> Rs. ' + value;
        case LabelType.High:
          return '<b>Max price:</b> Rs. ' + value;
        default:
          return 'Rs. ' + value;
      }
    }
  };
  public greaterThan(sub: any, num: number) {
    return sub < num;
  }
  public lessThan(sub: any, num: number) {
    return sub > num;
  }
  ngOnInit(): void {
  }

}
