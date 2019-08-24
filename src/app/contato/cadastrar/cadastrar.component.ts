import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Contato } from '../excluircontato/entidade/contato';

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
    alert("Salvo com sucesso!");
  }


}
