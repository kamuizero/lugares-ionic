import {Storage}  from '@ionic/storage';
import {Injectable} from "@angular/core";

@Injectable()
export class LugaresService {
  private lugares: { title: string }[] = []; //Arreglo de objetos que solo tienen un string

  constructor(private storage: Storage) {

  }

  agregarLugar(lugar: { title: string }) {
    this.lugares.push(lugar);
    this.storage.set('lugares', this.lugares);
  }

  getLugares() {
    return this.storage.get('lugares')
      .then(
        (lugares) => {
          this.lugares = lugares == null ? [] : lugares;
          return this.lugares.slice();
        })
    //return this.lugares.slice();
  }
}
