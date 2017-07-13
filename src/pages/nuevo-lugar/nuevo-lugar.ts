import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LugaresService} from "../../services/places.service";

@Component({
  selector: 'page-nuevo-lugar',
  templateUrl: 'nuevo-lugar.html',
})
export class NuevoLugarPage {

  constructor(private lugaresService: LugaresService, private navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoLugarPage');
  }

  onAgregar(value: { title: string }) {
    this.lugaresService.agregarLugar(value);
    this.navCtrl.pop();
  }

}
