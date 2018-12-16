import { Component } from '@angular/core';
import firebase from 'firebase';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { parent } from '../../model/parent';
import {AngularFireAuth} from "angularfire2/auth";


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  myparent={}as parent;  


  constructor(public navCtrl: NavController, public navParams: NavParams,private ofauth:AngularFireAuth) {
  }

 
 async signUp(myparent:parent) {

          
        const result=await this.ofauth.auth.createUserWithEmailAndPassword(myparent.email,myparent.password);
        console.log(result);
        this.navCtrl.push('LoginPage');
        this.myparent={}as parent;
  }

}
