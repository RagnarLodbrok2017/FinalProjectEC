import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController  } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, } from 'angularfire2/database';
import { child } from '../../model/child';
import { facultylocation } from '../../model/facultylocation';

/**
 * Generated class for the ParentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parent',
  templateUrl: 'parent.html',
})
export class ParentPage {
  locationref:FirebaseListObservable<facultylocation[]>;
  childref:FirebaseListObservable<child[]>;
  childlist:child[];
  locationlist:facultylocation[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database:AngularFireDatabase,
    ) {

      this.locationref=this.database.list('location');
      this.childref=this.database.list('child');
      this.childref.subscribe((items)=>{
        this.childlist=items;})
        this.locationref.subscribe((items)=>{
          this.locationlist=items;})
  }

  goaddchild(){
    this.navCtrl.push('AddchildPage');
  }

}
