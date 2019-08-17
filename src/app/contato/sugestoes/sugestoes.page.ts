import { Component, OnInit } from '@angular/core';
import { Sugestao } from '../entidade/sugestao';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

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
    this.rota.navigate(['listarsugestoes']);
    this.sugestao = new Sugestao();
    alert('Obrigado por deixar sua sugestão!');

  }

}
