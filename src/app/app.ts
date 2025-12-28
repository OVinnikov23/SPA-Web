import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Header } from './header/header';
import { Sidebar} from './sidebar/sidebar';
import { MainContentComponent } from './main-content/main-content';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    Header, 
    Sidebar, 
    MainContentComponent, 
    Footer
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'SPA-WEB';
}