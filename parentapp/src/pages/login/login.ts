import { Component } from '@angular/core';
import firebase from 'firebase';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";
import { parent } from '../../model/parent';

import {AngularFireAuth} from "angularfire2/auth";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
myparent={}as parent; 

constructor(public navCtrl: NavController, public navParams: NavParams,
  private ofauth:AngularFireAuth) {
  }

 
  async gotoparentpage(myparent:parent){
   


          
   this.ofauth.auth.signInWithEmailAndPassword(myparent.email,myparent.password);
         
    this.myparent={}as parent;
    this.navCtrl.push('ParentPage');
    
 
  }
}
