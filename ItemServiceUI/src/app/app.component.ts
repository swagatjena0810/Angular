import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ItemServiceUI';

  form: FormGroup;

  constructor(){
    this.form=new FormGroup({
      
    }
  }
}
