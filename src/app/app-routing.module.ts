import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { Primeira } from './paginas/primeirapagina/component.primeirapagina';
import { Segunda } from './paginas/segundapagina/component.segundapagina';
import { Terceira } from './paginas/terceirapagina/component.terceirapagina';
import { Quarta } from './paginas/quartapagina/component.quartapagina';
import { Cadastrar } from './contato/cadastrar/cadastrar.component';
import { Listar } from './contato/listar/listar.component';
import { Sugestoes } from './contato/sugestoes/sugestoes.page';
import { ListarSugestoes } from './contato/listarsugestoes/listarsugestoes.page';

import { Agua } from './contato/substancias/agua/agua.page';
import { GasCarbonico } from './contato/substancias/gascarbonico/gascarbonico.page';
import { Sal } from './contato/substancias/sal/sal.page';
import { Acetona } from './contato/substancias/acetona/acetona.page';
import { Vinagre } from './contato/substancias/vinagre/vinagre.page';

import { Oxigenio } from './contato/elementos/oxigenio/oxigenio.page';
import { Carbono } from './contato/elementos/carbono/carbono.page';
import { Fluor } from './contato/elementos/fluor/fluor.page';
import { Hidrogenio } from './contato/elementos/hidrogenio/hidrogenio.page';
import { Cloro } from './contato/elementos/cloro/cloro.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'primeirapagina', component: Primeira },
  { path: 'segundapagina', component: Segunda },
  { path: 'terceirapagina', component: Terceira },
  { path: 'quartapagina', component: Quarta },
  { path: 'sugestoes', component: Sugestoes },
  { path: 'listarsugestoes', component: ListarSugestoes },
  { path: 'cadastrar', component: Cadastrar },
  { path: 'listar', component: Listar },
  { path: 'agua', component: Agua },
  { path: 'gascarbonico', component: GasCarbonico },
  { path: 'sal', component: Sal },
  { path: 'acetona', component: Acetona },
  { path: 'vinagre', component: Vinagre },
  { path: 'oxigenio', component: Oxigenio },
  { path: 'carbono', component: Carbono },
  { path: 'fluor', component: Fluor },
  { path: 'hidrogenio', component: Hidrogenio },
  { path: 'cloro', component: Cloro },
  { path: 'cidade-salvar', loadChildren: './cidade/salvar/salvar.module#SalvarPageModule' },
  { path: 'cidade-listar', loadChildren: './cidade/listar/listar.module#ListarPageModule' },
  { path: 'estado-salvar', loadChildren: './estado/salvar/salvar.module#SalvarPageModule' },
  { path: 'estado-listar', loadChildren: './estado/listar/listar.module#ListarPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
