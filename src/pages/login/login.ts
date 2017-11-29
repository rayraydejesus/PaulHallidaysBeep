import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { LoginResponse } from '../../models/login/login.interface';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor( private toast: ToastController,
    private navCtrl: NavController, private navParams: NavParams) {
  }

  login(event){
    //console.log(event);
    if(!event.error){
      this.toast.create({
        message: `Welcome to Beep, ${event.result.email}`,
        duration: 3000
      }).present();
      this.navCtrl.setRoot('ProfilePage');
    }
    else{
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }

  //MOVED TO COMPONENT
  /*navToPage(pageName: string){
  	//Tenarary If, if login removes back arrow from the navbar
  	pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) 
  		: this.navCtrl.push(pageName);
  }*/

}
