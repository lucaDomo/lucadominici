import { Component } from '@angular/core';
import {
  NgFor,
  NgIf
} from '@angular/common';
import { DataloaderService } from '../dataloader.service';
import { Work } from '../model/Work';


@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {

  works?: Work[];
  length = 0;

  constructor(private db: DataloaderService) {}

  ngOnInit() {
    this.works = this.db.works;
    this.length = this.works.length-1 ;
  }
  
}
