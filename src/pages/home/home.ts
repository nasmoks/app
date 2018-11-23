import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuCommmandeProvider } from '../../providers/menu-commmande/menu-commmande';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 title='Home';
  constructor(public navCtrl: NavController, public provider : MenuCommmandeProvider) {

  }
    openBib() {
   this.navCtrl.push('BiblioPage');
}
 
 openBibDet() {
   this.navCtrl.push('BiblioDetailsPage');

}
openCours() {
   this.navCtrl.push('CoursPage');

}
}
