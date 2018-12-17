import { homelocation } from './../../model/homelocation.';
import { ChildList } from './../../app/app.firebase.config';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import { child } from '../../model/child';
import { facultylocation } from '../../model/facultylocation';
import Firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-addchild',
  templateUrl: 'addchild.html',
})
export class AddchildPage {
  mychild={}as child;
  childref:FirebaseListObservable<child[]>;

  mylocatioref:FirebaseListObservable<facultylocation[]>;
  locationset=false;
  baselocation:facultylocation=new facultylocation(29.866866,31.315270);
  basehomeLocation:homelocation = new homelocation(50.866866,50.315270);
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database:AngularFireDatabase,private modctrl:ModalController) {
      //this.childref=this.database.list('child');
      //this.mylocatioref=this.database.list("location");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddproductPage');
  }
  AddChild(){
    this.mychild.school_address = this.baselocation;
    this.mychild.home_address = this.basehomeLocation;
    //this.childref.push(this.mychild);
    const ChildList = Firebase.database().ref("child");
    ChildList.push(this.mychild);
    this.mychild={}as child;
    this.navCtrl.pop();
  }
  setonmap(){
    const model=this.modctrl.create('DetlocationmodelPage');
    model.present();
    model.onDidDismiss((data)=>{
      this.baselocation=data;
      this.locationset=true;
    })
  }
  setonmap2(){
    const model=this.modctrl.create('DetlocationmodelPage');
    model.present();
    model.onDidDismiss((data)=>{
      this.basehomeLocation=data;
      this.locationset=true;
    })
  }

  // placeMarker($event){
  //   this.baselocation.latitude=$event.coords.lat;
  //   this.baselocation.longitude=$event.coords.lng;
  //   this.locationset=true;
  //   this.locationref.push(this.baselocation);
  //   console.log($event);
  // }
}
