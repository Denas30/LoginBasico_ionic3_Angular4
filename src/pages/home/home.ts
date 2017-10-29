import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App) {

  }
 logout(){
   //se agrega esta funcion cuando se cierre sesion no salga el tabs al inicio
   const root = this.app.getRootNav();
   root.popToRoot();
 }
}
