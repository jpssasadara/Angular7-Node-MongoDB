import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topics = ['Angular','React','Vue'];
userModel = new User('RGdfg','dfdf2@.com',445555555,'','morning',true);
}
