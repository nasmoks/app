import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
    openBib() {
   this.navCtrl.push('BiblioPage');

}
 
 openBibDet() {
   this.navCtrl.push('BiblioDetailsPage');

}
}
