import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursPresPage } from './cours-pres';

@NgModule({
  declarations: [
    CoursPresPage,
  ],
  imports: [
    IonicPageModule.forChild(CoursPresPage),
  ],
})
export class CoursPresPageModule {}
