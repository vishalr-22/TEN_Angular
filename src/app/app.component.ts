import { Component,Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { Options } from '@angular-slider/ngx-slider';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TEN';
  tag: string ="Null"
  faTimes = faTimes;
  constructor(){
    
  }
  
}
