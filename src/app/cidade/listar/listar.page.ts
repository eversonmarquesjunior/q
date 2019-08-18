import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from 'src/app/estado/entidade/estado';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  listaCidades: Observable<Estado[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaCidades = this.fire.list<Estado>('cidade').snapshotChanges().pipe(map(lista => lista.map(linha => ({
      key: linha.payload.key, ...linha.payload.val()
    }))));
  }

  ngOnInit() {
  }

}
