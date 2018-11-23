import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuCommmandeProvider } from '../../providers/menu-commmande/menu-commmande';

/**
 * Generated class for the BiblioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-biblio',
  templateUrl: 'biblio.html',
})
export class BiblioPage {
 years=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider : MenuCommmandeProvider) {
  }



    getAllYears(){
    return this.years;
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BiblioPage');
   for(var i=1;i<=3;i++)
        this.years.push("L"+i);
     for(i=1;i<=2;i++)
        this.years.push("M"+i);  
    for(i=1;i<=2;i++)
        this.years.push("D"+i);     
  }

}
