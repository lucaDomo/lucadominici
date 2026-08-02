import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataloaderService } from '../dataloader.service';
import { About } from '../model/About';

@Component({
    selector: 'app-about',
    imports: [],
    templateUrl: './about.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './about.component.scss'
})
export class AboutComponent {
  
  about?:About
  
  constructor(private db: DataloaderService) {}
  ngOnInit() {
    this.about = this.db.about
  }
}
