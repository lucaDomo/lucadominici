import { Component } from '@angular/core';
import { DataloaderService } from '../dataloader.service';
import { About } from '../model/About';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  
  about?:About
  
  constructor(private db: DataloaderService) {}
  ngOnInit() {
    this.about = this.db.about
  }
}
