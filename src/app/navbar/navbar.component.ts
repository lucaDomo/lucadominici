import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    imports: [],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  close(){
    var el = document.getElementById("navbar")
    if(el!=null){
      el.style.display = "none"
      el = <HTMLDivElement>document.getElementById("x_btn")
      el.style.display = "none"
      el = <HTMLDivElement>document.getElementById("hamburger")
      el.style.display = "block"
    }
  }

  open(){
    var el = document.getElementById("navbar")
    if(el!=null){
      el.style.display = "block"
      el = <HTMLDivElement>document.getElementById("x_btn")
      el.style.display = "block"
      el = <HTMLDivElement>document.getElementById("hamburger")
      el.style.display = "none"
    }
  }

}
