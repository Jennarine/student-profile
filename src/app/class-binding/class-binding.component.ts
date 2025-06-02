import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {

  isError = false
  toggleClass() {
    this.isError = !this.isError
  }
  count = 0;

  onButtonClick() {
    this.count++;
  }
  name = '';

 onNameInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  }
}


