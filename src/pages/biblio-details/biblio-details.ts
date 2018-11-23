import { Component } from '@angular/core';
import { IonicPage, Platform, PopoverController, NavController, NavParams } from 'ionic-angular';
import { trigger, style, transition, animate } from '@angular/animations'
import { MenuCommmandeProvider } from '../../providers/menu-commmande/menu-commmande';

/**
 * Generated class for the BiblioDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-biblio-details',
  templateUrl: 'biblio-details.html',
 animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-50%) rotateX(-90deg)', opacity: 0}),
          animate('400ms', style({transform: 'translateY(0) rotateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0) rotateX(0deg)', opacity: 1}),
          animate('400ms', style({transform: 'translateY(-50%) rotateX(-90deg)', opacity: 0}))
        ])
      ]
    )
 ]
})
export class BiblioDetailsPage {
  visibleState = [];

  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams , public popoverCtrl : PopoverController, public provider : MenuCommmandeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BiblioDetailsPage');
  for( var i=0;i<2;i++)
      this.visibleState[i]= false;
  }
  
  openModelModule(i:any){
  //  this.visibleState[i] = (this.visibleState[i] == 'visible') ? 'invisible' : 'visible';
  this.visibleState[i]=!this.visibleState[i];
  }
    openModelOperation(){
    let popover = this.popoverCtrl.create('ModelOperationPage');  
        
let ev = {
  target : {
    getBoundingClientRect : () => {
      return {
        top: this.platform.height()+''
      };
    }
  }
};
 console.log(this.platform.height()-100);
      popover.present({ev});
  }

}
