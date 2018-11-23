import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuCommmandeProvider } from '../../providers/menu-commmande/menu-commmande';
import { trigger, style, transition, animate } from '@angular/animations'

/**
 * Generated class for the CoursPresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cours-pres',
  templateUrl: 'cours-pres.html',
animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(100%)', opacity: 0}))
        ])
      ]
    )
 ] 
})
export class CoursPresPage {
public NomCours :any;
more=false;    
chapiter=[]    
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider : MenuCommmandeProvider) {
  this.NomCours=navParams.get('NomCours');
  for(var i=1;i<10;i++)
    this.chapiter.push({'num':'chapitre '+i,'nom':'titre titre tire','contenu':'some random text .azeazeazazeazeaza aeazeazeaze some random text .azeazeazazeazeaza aeazeazeaze some random text .azeazeazazeazeaza aeazeazeaze some random text .azeazeazazeazeaza aeazeazeaze some random text .azeazeazazeazeaza aeazeazeaze some random text .azeazeazazeazeaza aeazeazeaze some random text .azeazeazazeazeaza aeazeazeaze'});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursPresPage');
  }
  
  swiped(){
  this.more=!this.more;
 }


}
