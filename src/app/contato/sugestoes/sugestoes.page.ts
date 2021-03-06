import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Sugestao } from './entidade/sugestao';

@Component({
  selector: 'app-sugestoes',
  templateUrl: './sugestoes.page.html',
  styleUrls: ['./sugestoes.page.scss'],
})
export class Sugestoes implements OnInit {

  constructor(private banco: AngularFireDatabase, private rota: Router) { }

  ngOnInit() {
  }

  sugestao: Sugestao = new Sugestao();

  salvar2() {
    this.banco.list('sugestao').push(this.sugestao);
    this.rota.navigate(['sugestoes']);
    this.sugestao = new Sugestao();
    alert('Obrigado por deixar sua sugestão!');

  }

}
