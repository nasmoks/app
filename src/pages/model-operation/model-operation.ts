import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';

/**
 * Generated class for the ModelOperationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-model-operation',
  templateUrl: 'model-operation.html',
})
export class ModelOperationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelOperationPage');
  }
 close() {
    this.viewCtrl.dismiss();
  }
}
