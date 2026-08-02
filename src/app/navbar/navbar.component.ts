import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    imports: [],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  close(){
    var x_btn = document.getElementById("x_btn")
    var el = document.getElementById("navbar")
    if(el!=null && x_btn!=null && x_btn.style.display == "block"){
      el.style.display = "none"
      x_btn.style.display = "none"
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
