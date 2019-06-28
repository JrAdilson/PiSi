import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{
  formValue = { name: '', celular: '', opcao: '', mensagem: ''};

  constructor(
    public alertController: AlertController,
    private nav: NavController,
    private db: AngularFirestore
  ) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'OficinAPP',
      message: 'Obrigado pela mensagem!',
      buttons: ['OK']
    });

    await alert.present();
  }
  enviarMensagem() {
    const { name, celular, opcao, mensagem } = this.formValue;
    
    this.db.collection('Mensagens').add(this.formValue);
  }

}
