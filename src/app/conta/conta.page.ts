import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {
  formValue = { name: '', email: '', password: '', confirmPassword: '' };

  constructor(   
    private afAuth: AngularFireAuth,
    private nav: NavController,
    private db: AngularFirestore
    ) { }

  ngOnInit() {
  }

  signUp() {
    const { name, email, password, confirmPassword } = this.formValue;
    if (confirmPassword === password) {
      this.afAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          this.db.collection('usuarios').doc(response.user.uid).set({ nome: name, admin: false, despensa: [], favoritos: [] });
          window.alert('Cadastrado com sucesso');
          this.nav.navigateBack('login');
        })
        .catch(error => window.alert(error.message));
    } else {
      window.alert(`As senhas devem ser iguais`);
    }
  }
} 
