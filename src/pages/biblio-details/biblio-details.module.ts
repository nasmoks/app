import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BiblioDetailsPage } from './biblio-details';

@NgModule({
  declarations: [
    BiblioDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BiblioDetailsPage),
  ],
 entryComponents: [
    BiblioDetailsPage,
    
  ] 
})
export class BiblioDetailsPageModule {}
