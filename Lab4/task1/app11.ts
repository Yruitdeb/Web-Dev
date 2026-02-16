
import {NgOptimizedImage} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32"/>
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32"/>
      </li>
      <li>
        Background Image:
        <div class="image-container">
          <img ngSrc="www.example.com/image.png" fill/>
        </div>
      </li>
      <li>
        <img ngSrc="www.example.com/image.png" width="800" height="600" priority/>
    </ul>
  `,
  imports: [NgOptimizedImage],
})
export class User {
  logoUrl = '/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
