import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import { child } from '../../model/child';

/**
 * Generated class for the AddchildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addchild',
  templateUrl: 'addchild.html',
})
export class AddchildPage {
 mychild={}as child;
  childref:FirebaseListObservable<child[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database:AngularFireDatabase) {
      this.childref=this.database.list('child');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddproductPage');
  }
  AddChild(){
    this.childref.push(this.mychild);
    this.mychild={}as child;
    this.navCtrl.pop();
  }
}
