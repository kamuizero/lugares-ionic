import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LugaresService} from "../../services/places.service";
import {Geolocation} from '@ionic-native/geolocation';

@Component({
  selector: 'page-nuevo-lugar',
  templateUrl: 'nuevo-lugar.html',
})
export class NuevoLugarPage {

  ubicacion: { lat: number, lng: number } = {lat: 0, lng: 0};

  constructor(private lugaresService: LugaresService, private navCtrl: NavController, private geolocation: Geolocation) {
  }

  onAgregar(value: { title: string }) {
    console.log('Ubicacion: ' + this.ubicacion.lat + ' ' + this.ubicacion.lng);

    this.lugaresService.agregarLugar({title: value.title, location: this.ubicacion});
    this.navCtrl.pop();
  }

  onUbicarUsuario() {
    console.log('Obteniendo ubicacion...');
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('Ubicacion obtenida');
      this.ubicacion.lat = resp.coords.latitude;
      this.ubicacion.lng = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
