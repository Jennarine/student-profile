import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {
  studentName = 'John Doe';
  studentAge = 20;
  profileImageUrl = 'https://th.bing.com/th/id/R.3418054b48a04d15df783a8fe8133b12?rik=irPhVo7JHp6ftA&pid=ImgRaw&r=0';
  isButtonDisabled = false;
  colspanValue = 2;
 
  disableButton() {
    this.isButtonDisabled = true;
  }
  
  enableButton() {
    this.isButtonDisabled = false;
  }

  username = ""
}
