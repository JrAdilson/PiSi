import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage{
  formValue = { email: '', password: '', confirmPassword: '' };

  constructor(
    private afAuth: AngularFireAuth,
    private nav: NavController
  ) {}
 

  signUp() {
    const { email, password, confirmPassword } = this.formValue;
    if (confirmPassword === password) {
      this.afAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          firebase.firestore().collection('usuarios').doc(response.user.uid).set({ nome: name, admin: false, despensa: [], favoritos: [] });
          window.alert('Cadastrado com sucesso');
          this.nav.navigateBack('tab3');
        })
        .catch(error => window.alert(error.message)); 
    } else {
      window.alert(`As senhas devem ser iguais`);
    }
  }
}