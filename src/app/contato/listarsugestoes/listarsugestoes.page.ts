import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sugestao } from '../sugestoes/entidade/sugestao';

@Component({
  selector: 'app-listarsugestoes',
  templateUrl: './listarsugestoes.page.html',
  styleUrls: ['./listarsugestoes.page.scss'],
})
export class ListarSugestoes implements OnInit {

  listaSugestoes: Observable<Sugestao[]>;

  constructor(private banco: AngularFireDatabase) {
    this.listaSugestoes = this.banco.list<Sugestao>('sugestao').snapshotChanges().pipe(map(lista => lista.map(linha => ({
      key: linha.payload.key, ...linha.payload.val()
    }))));
  }

  ngOnInit() {
  }

}
