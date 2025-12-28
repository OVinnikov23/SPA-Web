import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// 1. Створення enum UserStatus
export enum UserStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Pending = 'Pending'
}

// 2. Створення інтерфейсу User
export interface User {
  id: number;
  name: string;
  status: UserStatus;
  address: {
    city: string;
    street: string;
  };
  hobbies: string[];
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfileComponent {
  // 3. Створення об'єкта user
  user: User = {
    id: 1,
    name: 'Олег Вінніков',
    status: UserStatus.Active,
    address: {
      city: 'Київ',
      street: 'вул. Хрещатик, 1'
    },
    hobbies: ['Програмування', 'Angular', 'Спорт', 'Подорожі']
  };

  // 4. Метод, що повертає кількість хобі
  getHobbiesCount(): number {
    return this.user.hobbies.length;
  }
}