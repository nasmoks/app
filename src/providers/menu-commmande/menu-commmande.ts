import { Injectable } from '@angular/core';
import { PopoverController,Platform } from 'ionic-angular';

@Injectable()
export class MenuCommmandeProvider {

  constructor(public popoverCtrl : PopoverController,public platform:Platform) {
    console.log('Hello MenuCommmandeProvider Provider');
  }

   openMenu(){
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
