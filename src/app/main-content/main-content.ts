// src/app/main-content/main-content.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from '../user-profile/user-profile';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, UserProfileComponent],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css'
})
export class MainContentComponent { }