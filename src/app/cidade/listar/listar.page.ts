import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Cidade } from '../entidade/cidade';
import * as _ from 'lodash';
import { SalvarPage } from '../salvar/salvar.page';
import { ModalController } from '@ionic/angular';
import { Endereco } from '../entidade/endereco';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  listaEnderecos: Observable<Endereco[]>;
  listaFiltro: Cidade[];
  filtro = {};
  cidades: any;
  valor: string;

  constructor(private fire: AngularFireDatabase, private modal:ModalController) {
    this.listaEnderecos = this.fire.list<Endereco>('endereco').snapshotChanges().pipe(map(lista => lista.map(linha => ({
      key: linha.payload.key, ...linha.payload.val()
    }))));
  }

  ngOnInit() {
    this.listaEnderecos.subscribe(endereco => {
        this.cidades = endereco;
        this.listaFiltro = _.filter(this.cidades, _.conforms(this.filtro));
    })
  }

  filtrar(){
    this.filtro['localidade'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.cidades, _.conforms(this.filtro));
  }

  excluir(key){
    this.fire.list('endereco').remove(key);
    alert("Excluido com sucesso!");
  }

  async alterar(endereco){
    const tela = await this.modal.create({
      component: SalvarPage, componentProps: {endereco:endereco}
    });
    tela.present();
  }

}
