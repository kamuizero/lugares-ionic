import { Component } from '@angular/core';
import {ModalController, NavController, ToastController} from 'ionic-angular';
import {NuevoLugarPage} from "../nuevo-lugar/nuevo-lugar";
import {LugaresService} from "../../services/places.service";
import {LugarPage} from "../lugar/lugar";
import {Lugar} from "../../model/lugar.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lugares: { title: string }[] = [];

  constructor(public navCtrl: NavController,
              private lugaresService: LugaresService,
              private modalCtrl: ModalController,
              private toastCtrl: ToastController) {

  }

  ionViewWillEnter() {
    this.lugaresService.getLugares()
      .then(
        (lugares) => this.lugares = lugares
      );
  }

  onAgregarLugar() {
    this.navCtrl.push(NuevoLugarPage);
  }

  onAbrirLugar(lugar: Lugar) {
    if (lugar.location == null) {
      this.presentToast();
    }
    else {
      this.modalCtrl.create(LugarPage, lugar).present();
    }
  }

  onBorrarLugares() {
    this.lugaresService.borrarLugares().then(
      (result) => {
        console.log('result: ', result);
        console.log('Datos borrados!');
      }
    );
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'El lugar no tiene definidas coordenadas',
      duration: 2000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Cerrado el mensaje Toast');
    });

    toast.present();
  }

}
