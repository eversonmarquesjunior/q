import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { Estado } from '../../estado/entidade/estado';
import { Cidade } from '../entidade/cidade';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {

  cidade: Cidade = new Cidade();
  listaEstado: Observable<Estado[]>;

  constructor(private fire: AngularFireDatabase, private rota: Router, private modalController: ModalController) {
    this.listaEstado = this.fire.list<Estado>('estado').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  ngOnInit() {
  }

  salvarcid() {
    this.fire.list('cidade').push(this.cidade);
    this.cidade = new Cidade();
  }

  salvar() {
    if (this.cidade.key == null) {
      this.fire.list('estado').push(this.cidade);
      this.cidade = new Cidade();
      this.rota.navigate(['estado-listar']);
    } else {
      this.fire.object('estado/' + this.cidade.key).update(this.cidade);
      this.modalController.dismiss();
    }
  }

}
