import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../info/info';
import { BuscarPage } from '../buscar/buscar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  casas = [];
  infoPage = InfoPage;
  buscarPage = BuscarPage;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('v1/api/v1/casas')
    .subscribe( data => {
      console.log(JSON.stringify(data));
      this.casas = data;
      console.log(JSON.stringify(this.casas));
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

  info (casa){
    //console.log('click');
    this.navCtrl.push(this.infoPage, {casa: casa});
  }

  search(){
    console.log('search');
    this.navCtrl.push(this.buscarPage, {casas: this.casas});
  }

}
