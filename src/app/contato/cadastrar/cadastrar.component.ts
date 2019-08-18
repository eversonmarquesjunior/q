import { Component, OnInit } from '@angular/core';
import { Contato } from '../entidade/contato';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class Cadastrar implements OnInit {

  constructor(private banco: AngularFireDatabase, private rota: Router) { }

  ngOnInit() { }

  contato: Contato = new Contato();

  salvar() {
    this.banco.list('contato').push(this.contato);
    
    this.contato = new Contato();
    alert('Bem Vindo(a) !!!');
  }

}
