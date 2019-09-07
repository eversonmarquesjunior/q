import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from 'src/app/estado/entidade/estado';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Cidade } from '../entidade/cidade';
import * as _ from 'lodash';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  listaCidades: Observable<Estado[]>;
  listaFiltro: Cidade[];
  filtro = {};
  cidades: any;
  valor: string;

  constructor(private fire: AngularFireDatabase) {
    this.listaCidades = this.fire.list<Estado>('cidade').snapshotChanges().pipe(map(lista => lista.map(linha => ({
      key: linha.payload.key, ...linha.payload.val()
    }))));
  }

  ngOnInit() {
    this.listaCidades.subscribe(cidade => {
        this.cidades = cidade;
        this.listaFiltro = _.filter(this.cidades, _.conforms(this.filtro));
    })
  }

  filtrar(){
    this.filtro['nome'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.cidades, _.conforms(this.filtro));
  }


}
