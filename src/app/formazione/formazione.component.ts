import { Istruzione } from './../model/Istruzione';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataloaderService } from '../dataloader.service';

@Component({
    selector: 'app-formazione',
    imports: [],
    templateUrl: './formazione.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
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
