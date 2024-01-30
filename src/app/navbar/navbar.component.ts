import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { FormazioneComponent } from '../formazione/formazione.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AboutComponent, FormazioneComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
