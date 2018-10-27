// aqui estamos importando o component do pacote angular core
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//  Aqui decoramos a classe do component App Header
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// Aqui exportamos a classe HeaderComponent
export class HeaderComponent implements OnInit {
  // aqui definimos o constructor da aplicacao
  
  constructor(private router: Router) { }

  ngOnInit() {}

  gotoAcessarConta() {
    this.router.navigate(['']);
   }
}