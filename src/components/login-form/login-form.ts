import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { Account } from '../../models/account/account.interface';
import { LoginResponse } from '../../models/login/login.interface';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

	account = {} as Account;
	@Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController) {
  	this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login(){
  	try{
  		const result: LoginResponse = { 
  			result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
  		};
  		//console.log(result);
  		this.loginStatus.emit(result);
  	}
  	catch(e){
  		console.error(e);
  		const error: LoginResponse = {
  			error: e
  		}
  		this.loginStatus.emit(error);
  	}
  }

  navToRegisterPage(){
  	this.navCtrl.push('RegisterPage');
  }

  /*navToPage(pageName: string){
  	//Tenarary If, if login removes back arrow from the navbar
  	pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) 
  		: this.navCtrl.push(pageName);
  }*/

}
