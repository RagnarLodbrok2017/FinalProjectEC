import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { facultylocation } from '../../model/facultylocation';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { child } from '../../model/child';

/**
 * Generated class for the FacultyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faculty',
  templateUrl: 'faculty.html',
})
export class FacultyPage {
  mylocatioref:FirebaseListObservable<facultylocation[]>;
  locationset=false;
  baselocation:facultylocation=new facultylocation(29.866866,31.315270);
  
  //get the child information
  childref:FirebaseListObservable<child[]>;
  childlist: child[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modctrl:ModalController,private database:AngularFireDatabase) {
      this.mylocatioref=this.database.list("location");
      this.childref=this.database.list('child');
      this.childref.subscribe((items) => {
        this.childlist = items;
      })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FacultyPage');
  }
  getlocation(){

  }
  setonmap(){
    const model=this.modctrl.create('DetlocationmodelPage');
    model.present();
    model.onDidDismiss((data)=>{
      this.baselocation=data;
      this.locationset=true;
    })
  }
  
  tackphoto(){

  }
  opengalary(){

  }
  save(){

  }
  cancel(){
    this.navCtrl.pop();
  }

}
