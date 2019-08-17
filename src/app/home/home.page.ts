import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contato } from '../contato/entidade/contato';
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contato: Contato = new Contato;

  constructor(private rota: Router, private auth: AngularFireAuth) { }

  direcionar() {
    this.rota.navigate(['cadastrar'])
  }

  login(){
this.auth.auth.signInWithEmailAndPassword(this.contato.email, this.contato.senha).then(
() => { this.rota.navigate(['pagina']); }
).catch( (erro) => console.log(erro) );
}

logout() {
this.auth.auth.signOut();
this.rota.navigate(['/']);
}

}
