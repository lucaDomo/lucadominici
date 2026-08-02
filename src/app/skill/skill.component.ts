import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { DataloaderService } from './../dataloader.service';
import { Skill } from '../model/Skill';

@Component({
    selector: 'app-skill',
    standalone: true,
    imports: [],
    templateUrl: './skill.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './skill.component.scss'
})
export class SkillComponent {

  skills?: Skill[];
  constructor(private db: DataloaderService) {}
  
  ngOnInit() {
    this.skills = this.db.skills;
  }
  

}
