import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AboutComponent, ProjectPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lucadominici';

  btn: any;

  ngOnInit(){

    this.btn = document.getElementById("btn_top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.addEventListener('scroll', () => {
      this.scrollFunction()
    });

  }

  scrollFunction() {
    if (this.btn!=null){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.btn.style.display = "block";
    } else {
      this.btn.style.display = "none";
    }
  }
  }



  topFunction(){

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
