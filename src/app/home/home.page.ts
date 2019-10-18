import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Login } from './login/login';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  login: Login = new Login;

  constructor(private rota: Router, private afAuth: AngularFireAuth) { }

  direcionar() {
    this.rota.navigate(['cadastrar'])
  }

  logar() {
    this.afAuth.auth.signInWithEmailAndPassword(this.login.email, this.login.senha).then(
      () => { this.rota.navigate(['primeirapagina']); }
    ).catch((erro) => console.log(erro));
  }

  redefinir() {
    alert('Verifique o seu e-mail');
    this.afAuth.auth.sendPasswordResetEmail(this.login.email).then(
      () => alert('Verifique o seu email')); { this.rota.navigate([]); }
  }


  /*logout() {
  this.afAuth.auth.signOut();
  this.rota.navigate(['/']);
  }*/

}
