import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';

import { Account } from '../../models/account/account.interface';

@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

	//new object syntax
	account = {} as Account;

  constructor(private toast: ToastController, private afAUTH: AngularFireAuth) {
  }

  //Its a promise so it needs to be async and also needs to recieve a callback
  async register(){
  	try{
  		const result = await 
  			this.afAUTH.auth.createUserWithEmailAndPassword(this.account.email, this.account.password);
  		this.toast.create({
  			message: "Account successfully created.",
  			duration: 3000,
  		}).present();
  		console.log(result);
  	}
  	catch(e){
  		console.error(e);
  		this.toast.create({
  			message: e.message,
  			duration: 3000,
  		}).present();
  	}
	}

}
