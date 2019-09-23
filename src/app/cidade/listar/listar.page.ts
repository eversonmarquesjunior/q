import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Cidade } from '../entidade/cidade';
import * as _ from 'lodash';
import { SalvarPage } from '../salvar/salvar.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  listaCidades: Observable<Cidade[]>;
  listaFiltro: Cidade[];
  filtro = {};
  cidades: any;
  valor: string;

  constructor(private fire: AngularFireDatabase, private modal:ModalController) {
    this.listaCidades = this.fire.list<Cidade>('cidade').snapshotChanges().pipe(map(lista => lista.map(linha => ({
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

  excluir(key){
    this.fire.list('cidade').remove(key);
    alert("Excluido com sucesso!");
  }

  async alterar(cidade){
    const tela = await this.modal.create({
      component: SalvarPage, componentProps: {cidade:cidade}
    });
    tela.present();
  }

}
