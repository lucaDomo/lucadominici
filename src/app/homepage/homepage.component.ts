import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { AboutComponent } from '../about/about.component';
import { FormazioneComponent } from '../formazione/formazione.component';
import { SkillComponent } from '../skill/skill.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { ProjectComponent } from '../project/project.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [NavbarComponent, AboutComponent, FormazioneComponent, SkillComponent, WorkExperienceComponent,
        ProjectComponent, ContactComponent]
})
export class HomepageComponent {
}
