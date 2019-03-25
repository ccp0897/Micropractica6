//import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Contact } from '../../models/contact.model';
/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {

  constructor(public afDB: AngularFireDatabase) {
    console.log('Hello FirebaseDbProvider Provider');
  }
  //Guardar un contacto
  guardaContacto (contact: Contact){
    if(contact.key==''){
      contact.key=""+Date.now();
    }
    return this.afDB.database.ref('contactos/'+contact.key).set(contact);
  }
  //Borrar un contacto
  delContacto(key){
    this.afDB.database.ref('contactos/'+key).remove();
  }
  private contactos=this.afDB.list<Contact>('contactos');

  //Coger contacto
  getContactos(){
    return this.contactos.valueChanges();
  }
}
