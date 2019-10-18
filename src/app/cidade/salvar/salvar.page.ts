import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { Estado } from '../../estado/entidade/estado';
import { Cidade } from '../entidade/cidade';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../entidade/endereco';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {

  cidade: Cidade = new Cidade();
  listaEstado: Observable<Estado[]>;
  endereco: Endereco = new Endereco();

  constructor(private fire: AngularFireDatabase, private rota: Router, private modalController: ModalController, private http: HttpClient) {
    this.listaEstado = this.fire.list<Estado>('estado').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  ngOnInit() {
  }

  /*preencher(){
    this.http.get<Endereco>("https://viacep.com.br/ws/"+this.endereco.cep+"/json/").subscribe(
      (dados) => this.endereco = dados);
  }
*/

  salvarcid() {
    this.fire.list('cidade-listar').push(this.cidade);
    this.cidade = new Cidade();
    alert("Salvo com sucesso!");
  }

  salvar() {
    if (this.cidade.key == null) {
      this.fire.list('cidade').push(this.cidade);
      this.cidade = new Cidade();
      this.rota.navigate(['cidade-listar']);
      alert("Salvo com sucesso!")
    } else {
      this.fire.object('cidade' + this.cidade.key).update(this.cidade);
      this.modalController.dismiss();
    }
  }

}
