import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage implements OnInit{
  formValue = { email: '', password: '', confirmPassword: '' };

  constructor(
    private afAuth: AngularFireAuth,
    private nav: NavController,
    private db: AngularFirestore
  ) {}

  ngOnInit() {}

  signUp() {
    const { email, password, confirmPassword } = this.formValue;
    if (confirmPassword === password) {
      this.afAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          this.db.collection('usuarios').doc(response.user.uid).set({ nome: name, admin: false, despensa: [], favoritos: [] });
          window.alert('Cadastrado com sucesso');
          this.nav.navigateBack('tab3');
        })
        .catch(error => window.alert(error.message));
    } else {
      window.alert(`As senhas devem ser iguais`);
    }
  }
}