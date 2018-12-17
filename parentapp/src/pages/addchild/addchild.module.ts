import { firebase_config } from './../../app/app.firebase.config';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddchildPage } from './addchild';
import{AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AddchildPage,
  ],
  imports: [
    IonicPageModule.forChild(AddchildPage),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCIHg0L8RtTMcAleWqjbJp7nb6DY5PJTrg'
      
    })
  ],
})
export class AddchildPageModule {}
