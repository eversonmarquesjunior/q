import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListarSugestoes } from './listarsugestoes.page';

const routes: Routes = [
  {
    path: '',
    component: ListarSugestoes
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListarSugestoes]
})
export class ListarSugestoesModule {}
