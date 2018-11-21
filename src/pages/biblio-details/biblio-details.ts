import { Component } from '@angular/core';
import { IonicPage, PopoverController, NavController, NavParams } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'

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
          style({transform: 'translateY(100%)', opacity: 1}),
          animate('400ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('400ms', style({transform: 'translateY(100%)', opacity: 1}))
        ])
      ]
    )
 ]
})
export class BiblioDetailsPage {
  visibleState = [];

  constructor(public navCtrl: NavController, public navParams: NavParams , public popoverCtrl : PopoverController) {
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
      popover.present();
  }

}
