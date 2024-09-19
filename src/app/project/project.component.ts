import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import { Project } from '../model/Project';
import { DataloaderService } from '../dataloader.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [FontAwesomeModule, NgFor],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  projects?:Project[];
  
  faCircleInfo = faCircleInfo;
  faGithub = faGithub;

  constructor(private db: DataloaderService, private router:Router) {}
  
  ngOnInit() {
    this.projects = this.db.projects;
  }



  seeDetails(index:number){
    if (this.projects!=null){
      var projectName = this.projects[index].name?.toLowerCase()
      this.router.navigate(["/project", projectName])
    }
  }

  openCardLink(index:number){
    if (this.projects!=null){
      var project_ = this.projects[index];
      this.openGithubLink(project_.githubLink);
    }
  }

  openGithubLink(link:any){
    if (typeof link!="string"){
      link = link.modalLink;
    }
    window.open(link,'_blank')
  }

}
