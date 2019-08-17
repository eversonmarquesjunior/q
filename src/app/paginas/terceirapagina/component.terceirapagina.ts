import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'component-terceirapagina',
  templateUrl: 'component.terceirapagina.html'
})
export class Terceira {

  endereco: string

  constructor(private rota: Router) { }

  proximo() {
    this.rota.navigate([this.endereco]);

  }



}
