import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

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

@NgModule({
  declarations: [AppComponent, Primeira, Segunda, Terceira, Quarta, Sugestoes, ListarSugestoes, Cadastrar, Listar, Agua, GasCarbonico,
    Sal, Acetona, Vinagre, Oxigenio, Carbono, Fluor, Hidrogenio, Cloro],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBKKnEJ3TQGCMHRIYtnXMMHr6xfIJka650",
      authDomain: "calcularmm.firebaseapp.com",
      databaseURL: "https://calcularmm.firebaseio.com",
      projectId: "calcularmm",
      storageBucket: "calcularmm.appspot.com",
      messagingSenderId: "442823691672",
      appId: "1:442823691672:web:a3ed74f0c5b3054c"
    }), AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
