import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {
  lista = [];
  casas = [];

  infoPage = InfoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lista = this.navParams.get('casas');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }

  getItems(ev: any){
    //console.log(ev.target.value);
    let municipio = ev.target.value.toLowerCase();

    this.casas = this.lista.filter(casa => {
      return casa.municipio.toLowerCase().includes(municipio)
    });

    console.log(JSON.stringify(this.casas));
  }

  info(casa){
    this.navCtrl.push(this.infoPage, {casa: casa});
  }

}
