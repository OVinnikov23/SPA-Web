import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app'; // Импорт класса App из файла app.ts

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));