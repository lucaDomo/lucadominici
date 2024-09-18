import { Istruzione } from './../model/Istruzione';
import { Component } from '@angular/core';
import {
  NgFor,
  NgIf
} from '@angular/common';
import { DataloaderService } from '../dataloader.service';

@Component({
  selector: 'app-formazione',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './formazione.component.html',
  styleUrl: './formazione.component.scss'
})
export class FormazioneComponent {

  istruzione?: Istruzione[];
  length = 0;

  constructor(private db: DataloaderService) {}

  ngOnInit() {
    this.istruzione = this.db.istruzione;
    this.length = this.istruzione.length-1 ;
  }

}
