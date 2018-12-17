import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform } from 'ionic-angular';
import { facultylocation } from '../../model/facultylocation';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { child } from '../../model/child';
import { Geolocation } from '@ionic-native/geolocation';



@IonicPage()
@Component({
  selector: 'page-faculty',
  templateUrl: 'faculty.html',
})
export class FacultyPage {
  mylocatioref: FirebaseListObservable<facultylocation[]>;
  locationset = false;
  baselocation: facultylocation = new facultylocation(29.866866, 31.315270);

  //get the child information
  childref: FirebaseListObservable<child[]>;
  childlist: child[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modctrl: ModalController, private database: AngularFireDatabase, 
    private geolocation: Geolocation) {

    //get the location and child information from Firebase
    this.mylocatioref = this.database.list("location");
    this.childref = this.database.list('child');
    this.childref.subscribe((items) => {
      this.childlist = items;
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FacultyPage');
  }
  getCurrentLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // get and add the current location GPS in Firebase
      this.baselocation.latitude = resp.coords.latitude;
      this.baselocation.longitude = resp.coords.longitude;
      //remove the location from Firebase
      this.database.list('location').remove();
      //add the new location
      this.mylocatioref.push(this.baselocation);
      this.locationset = true;

      // console.log(resp.coords.latitude);
      // console.log(resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition({
      timeout: 300
    });
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      console.log(data.coords.latitude);
      console.log(data.coords.longitude);
      // data.coords.latitude
      // data.coords.longitude
    });
  }

  setonmap() {
    const model = this.modctrl.create('DetlocationmodelPage');
    model.present();
    model.onDidDismiss((data) => {
      this.baselocation = data;
      this.locationset = true;
    })
  }

  tackphoto() {

  }
  opengalary() {

  }
  save() {

  }
  cancel() {
    this.navCtrl.pop();
  }

}
