import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,  // <--- Це виправляє помилку
  imports: [CommonModule],
  templateUrl: './main-content.html', // Перевір, щоб ім'я збігалося з файлом зліва
  styleUrls: ['./main-content.css']
})
export class MainContent {
  // Тут може бути логіка контенту
}