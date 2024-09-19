import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../model/Project';
import { DataloaderService } from '../dataloader.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [FontAwesomeModule, NgFor, NavbarComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})
export class ProjectPageComponent {

  projects?:Project[];
  faGithub = faGithub;

  title:string|undefined = "";
  tag:string[]|undefined = [];
  description:string[]|undefined = []
  link:string|undefined = ""
  img:string|undefined = ""

  constructor(private route: ActivatedRoute, private db: DataloaderService) { }

  ngOnInit(): void {
    

    this.route.paramMap.subscribe(params => {
      var projectName = params.get('projectname');
      this.projects = this.db.projects;
      this.projects.forEach(project => {
        if (project.name?.toLowerCase()==projectName){
          this.title = project.name
          this.tag = project.tag
          this.description = project.modelDescription
          this.link = project.githubLink
          this.img = project.img
        }
      });
    });
    
  }

  openGithub(){
    window.open(this.link,'_blank')
  }

}
