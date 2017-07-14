import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.sass'],
  template: `
    <nav>
      <button (click)="openDrawer()">Open Drawer</button>
      <a routerLink="home" routerLinkActive="active">Home</a>
      <a routerLink="about" routerLinkActive="active">About</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  openDrawer() {
    console.log('I should open the drawer!');
  }
}
