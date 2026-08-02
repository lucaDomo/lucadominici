import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataloaderService } from '../dataloader.service';
import { Work } from '../model/Work';


@Component({
    selector: 'app-work-experience',
    imports: [],
    templateUrl: './work-experience.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
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
