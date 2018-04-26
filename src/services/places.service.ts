import {Storage}  from '@ionic/storage';
import {Injectable} from "@angular/core";
import {Lugar} from "../model/lugar.model";

@Injectable()
export class LugaresService {
  private lugares: Lugar[] = []; //Arreglo de objetos Lugar

  constructor(private storage: Storage) {

  }

  agregarLugar(lugar: Lugar) {
    console.log('Ingresando en el agregar lugar');
    console.log(lugar);
    this.lugares.push(lugar);
    this.storage.set('lugares', this.lugares);
  }

  getLugares() {
    return this.storage.get('lugares')
      .then(
        (lugares) => {
          console.log('Entrando en el GET LUGARES');
          this.lugares = lugares == null ? [] : lugares;
          return this.lugares.slice();
        })
    //return this.lugares.slice();
  }

  borrarLugares() {
    console.log('Borrar toda la data de lugares');

    return this.storage.remove('lugares')
      .then(
        (result) => {
          console.log('result: ', result);
          this.storage.set('lugares', []);
          console.log('Data reseteada');
        }
      )
  }
}
