import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import { Project } from '../model/Project';
import { DataloaderService } from '../dataloader.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [FontAwesomeModule, NgFor],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  projects?:Project[];
  modal?:HTMLElement;
  
  modalTitle:string|undefined = "";
  modalImg:string|undefined = "";
  modalTag:string[]|undefined = [];
  modalDescription:string[]|undefined = [];
  modalLink:string|undefined = ""

  
  faCircleInfo = faCircleInfo;
  faGithub = faGithub;

  constructor(private db: DataloaderService) {}
  
  ngOnInit() {
    this.projects = this.db.projects;

    this.modal = <HTMLElement> document.getElementById("myModal");
    
    // Get the button that opens the modal
    var btn = <HTMLElement> document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    var span = <HTMLElement> document.getElementsByClassName("close")[0];

    var modalImg = <HTMLInputElement> document.getElementById("img01");

    // When the user clicks on the button, open the modal
    /*
    btn.onclick = function() {
      //modalImg.src = "../../assets/image/image.png";
      this.modal.style.display = "block";

    }*/

    // When the user clicks on <span> (x), close the modal
    //span.addEventListener("click", this.closeModal);

    // When the user clicks anywhere outside of the modal, close it
   /* 
    window.onclick = function(event) {
      if (event.target == this.modal) {
        this.modal.style.display = "none";
      }
    }*/
    
    
    window.onclick = (event) => {
      this.windowCloseModal(event)
    }


    
  }

  windowCloseModal(event:any){
    if (this.modal!=null){
      if (event.target == this.modal) {
        this.modal.style.display = "none";
      }
    }
  }

  closeModal(){
    if (this.modal!=null){
      this.modal.style.display = "none";
    }
      
  }

  openModal(index:number){
    if (this.modal!=null && this.projects!=null){
      var project_ = this.projects[index];
      this.modalImg = project_.img;
      this.modalTag = project_.tag;
      this.modalDescription = project_.modelDescription;
      this.modalTitle = project_.name;
      this.modalLink = project_.githubLink;

      this.modal.style.display = "block";
    }
  }

  openCardLink(index:number){
    if (this.projects!=null){
      var project_ = this.projects[index];
      this.modalLink = project_.githubLink;
      this.openGithubLink(this.modalLink);
    }
  }

  openGithubLink(link:any){
    if (typeof link!="string"){
      link = link.modalLink;
    }
    window.open(link,'_blank')
  }

}
