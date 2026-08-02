import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page-not-found',
    imports: [],
    templateUrl: './page-not-found.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

  constructor(private router:Router){}

  returnHome(){
    this.router.navigate([""])
  }
}
