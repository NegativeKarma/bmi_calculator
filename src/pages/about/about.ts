import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openBasicModal  () {
    let myModal = this.modalCtrl.create(ModalPage);
    myModal.present();
  }

}
