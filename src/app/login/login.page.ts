import { Component, OnInit } from '@angular/core';
import { auth, firestore } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formValue = { email: '', password: '' };
  changeValues = { nome: '', password: '', confirmPassword: '' };
  title = '';
  loggedIn = false;
  user = {};

  constructor(private afAuth: AngularFireAuth, private nav: NavController) {}

  ngOnInit() {
    auth().onAuthStateChanged(usuario => {
      if (usuario) {
        firestore().collection('usuarios').doc(usuario.uid).get().then(resultado => {
          if (resultado.data())
            this.user = resultado.data();
        })
      }
      this.loggedIn = !!usuario;
      this.title = this.loggedIn ? 'Conta' : 'Login';
    });
  }

  login() {
    const { email, password } = this.formValue;
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.nav.navigateForward('home');
      })
      .catch(error => window.alert(error.message));
  }

  logout() {
    auth().signOut().then(() => {
      this.loggedIn = false;
    });
  }

  criarConta(){
    this.nav.navigateForward('conta');
  }
}
