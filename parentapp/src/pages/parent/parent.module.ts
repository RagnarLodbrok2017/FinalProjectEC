import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentPage } from './parent';
import{AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    ParentPage,
  ],
  imports: [
    IonicPageModule.forChild(ParentPage),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCIHg0L8RtTMcAleWqjbJp7nb6DY5PJTrg'

    })
  ],
})
export class ParentPageModule {}
