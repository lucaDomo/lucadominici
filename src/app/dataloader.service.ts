import { Injectable } from '@angular/core';
import { Skill } from './model/Skill';
import { Work } from './model/Work';
import { Istruzione } from './model/Istruzione';
import { About } from './model/About';
import { Project } from './model/Project';

import portfolio from '../assets/portfolio.json';

@Injectable({
  providedIn: 'root'
})

export class DataloaderService {

  skills:Skill[];
  works:Work[];
  istruzione:Istruzione[];
  about:About;
  projects:Project[];

  constructor() {
    this.skills= portfolio.skills;
    this.works = portfolio.works;
    this.istruzione = portfolio.istruzione;
    this.about = portfolio.about;
    this.projects = portfolio.projects;
   }
}
