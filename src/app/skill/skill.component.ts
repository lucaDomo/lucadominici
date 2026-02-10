import { Component, OnInit } from '@angular/core';

import { DataloaderService } from './../dataloader.service';
import { Skill } from '../model/Skill';

@Component({
    selector: 'app-skill',
    standalone: true,
    imports: [],
    templateUrl: './skill.component.html',
    styleUrl: './skill.component.scss'
})
export class SkillComponent {

  skills?: Skill[];
  constructor(private db: DataloaderService) {}
  
  ngOnInit() {
    this.skills = this.db.skills;
  }
  

}
