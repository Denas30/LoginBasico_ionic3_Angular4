import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';//se importa el login
import { SignupPage } from '../signup/signup';// se importa el signup

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  
   //agregamos signup para crear la funcion cuando se le de click a iniciar sesion
  login(){
   this.navCtrl.push(LoginPage);
  }

  //agregamos signup para crear la funcion cuando se le de click para registrarse
  signup(){
    this.navCtrl.push(SignupPage);
      }
}
