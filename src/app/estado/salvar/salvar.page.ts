import { Component, OnInit } from '@angular/core';
import { Estado } from '../entidade/estado';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {

  estado: Estado = new Estado();

  constructor(private fire:AngularFireDatabase, private rota:Router) { }

  ngOnInit() {
  }

  salvarest(){
  this.fire.list('estado').push(this.estado);
    this.estado = new Estado();

  }
}
