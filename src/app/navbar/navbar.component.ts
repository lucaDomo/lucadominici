import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FormazioneComponent } from '../formazione/formazione.component';
import { SkillComponent } from '../skill/skill.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AboutComponent, FormazioneComponent, SkillComponent, WorkExperienceComponent, ContactComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  close(){
    var el = document.getElementById("navbar")
    if(el!=null){
      el.style.display = "none"
      el = <HTMLDivElement>document.getElementById("x_btn")
      el.style.display = "none"
      el = <HTMLDivElement>document.getElementById("hamburger")
      el.style.display = "block"
    }
  }

  open(){
    var el = document.getElementById("navbar")
    if(el!=null){
      el.style.display = "block"
      el = <HTMLDivElement>document.getElementById("x_btn")
      el.style.display = "block"
      el = <HTMLDivElement>document.getElementById("hamburger")
      el.style.display = "none"
    }
  }

}
