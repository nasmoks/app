import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuCommmandeProvider } from '../../providers/menu-commmande/menu-commmande';

/**
 * Generated class for the CoursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cours',
  templateUrl: 'cours.html',
})
export class CoursPage {
  class=[];
  cours=[];
  constructor(public navCtrl: NavController, public navParams: NavParams , public provider : MenuCommmandeProvider) {
  }



  ionViewDidLoad() {
  this.cours=[];
    console.log('ionViewDidLoad CoursPage');
  this.filterChoose(0);
  }
filterChoose(i : any){
this.class=[];  
for(var j=0;j<3;j++)
this.class.push("released");
this.class[i]="pressed";    
}
getProgressValue(i:any){
return this.cours[i].prog;
}
getCours(){
this.cours=[];
 for(var i=0;i<20;i++)
    this.cours.push({'number':i,'name':'cours n°'+(i+1),'prog':i*5});
 
 return this.cours;
 }

openCours(i:any){
this.navCtrl.push('CoursPresPage',{'NomCours':this.cours[i].name});
console.log('marche');
}

}
