import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  profileName = 'Okedi Jennifer Ufoma';
  bio = 'A passionate web developer who loves Angular.';
  profileImageUrl = 'https://i.ibb.co/j9PNNGDV/1743783570642.jpg';
  showBio = true;
  cardBgColor = 'white';
  fontStyle = 'normal';
  bioFontSize = 15;
  profileImageBorder = 'none';

  toggleBackground(): void {
    this.cardBgColor = this.cardBgColor === 'white' ? '#f0f0f0' : 'white';
  }

  toggleBioVisibility(): void {
    this.showBio = !this.showBio;
  }

  handleImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.profileImageUrl = e.target?.result as string;
        this.profileImageBorder = '2px solid black';
      };
      reader.readAsDataURL(file);
    }
  }
}
