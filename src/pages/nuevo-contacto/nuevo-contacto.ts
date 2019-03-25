import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { Contact } from '../../models/contact.model';
/**
 * Generated class for the NuevoContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-contacto',
  templateUrl: 'nuevo-contacto.html',
})
export class NuevoContactoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private dbFirebase: FirebaseDbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoContactoPage');
  }

  onAddContact(value:{nombre​:​string​, ​organizacion​:​string​, ​movil​:​string​, ​correo​:​string}){
    let contacto:Contact=new Contact();
    contacto.key=""+Date.now();
    contacto.correo=value.correo;
    contacto.movil=value.movil;
    contacto.nombre=value.nombre;
    contacto.organizacion=value.organizacion;

    ​this​.​dbFirebase.guardaContacto(contacto).then(res=>{});​
    this​.​navCtrl​.​pop​();
  }
}
