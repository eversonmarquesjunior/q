import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'component-quartapagina',
  templateUrl: 'component.quartapagina.html'
})
export class Quarta {

  endereco2: string;

  constructor(private rota: Router) { }

  proximo() {
    this.rota.navigate([this.endereco2]);

  }

}
