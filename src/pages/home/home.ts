import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NuevoLugarPage} from "../nuevo-lugar/nuevo-lugar";
import {LugaresService} from "../../services/places.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lugares: { title: string }[] = [];

  constructor(public navCtrl: NavController, private lugaresService: LugaresService) { //Controlador de navegacion para manipular el stack de vistas

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

}
